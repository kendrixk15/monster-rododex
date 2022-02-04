<template>
  <div>
    <form @submit.prevent="postTodo">
      <input type="text" v-model="todoInput" id="todoInput">
      <button type="submit">Do It!</button>
    </form>
    <div>
      <div v-for="list in todoList" :key="list.id">
        <label>
        <input type="checkbox" :checked="list.done" @click="toggleTodo(list)">
        {{list.text}}
        </label>
        <button>Delete</button>
      </div>
    </div>
    {{getList()}}
  </div>
</template>

<script>
const host ='https://camt-todoapi.pair-co.com/users/sasiwong/todos'
export default {
  data(){
    return{
      todoInput:'',
      todoList:[],
      id:1
    }
  },
  methods:{
    postTodo(){
      const createURL = `${host}/`
      this.todoArr.push({id:1, text:this.todoInput, done:false})
      fetch( createURL, {
        method: 'POST',
        headers:{
          'content-Type': 'application/json'
        },
        body: JSON.stringify({text: this.todoInput})
      }).then(()=>{
        alert('Okay')
      })
      .catch((error)=>{
        alert(error)
      })
      this.id++
    },
    getList(){
      const listURL = `${host}`
      fetch(listURL)
      .then((Response) =>{
      return Response.json()
  }) .then((data) =>{
     this.todoList = data
  })
    },
    toggleTodo(list){
      const updateURL = `${host}/${list.id}`
      fetch(updateURL,{
        method: 'PUT',
        headers : {'content-type': 'application/json'},
        body: JSON.stringify({...list, done: !list.done })
      })
    }
  }


}
</script>

<style>

</style>