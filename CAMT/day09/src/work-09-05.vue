<template>
  <div>
    <form @submit.prevent="submit()">
      <h1>To do list</h1>
      <input type="text" v-model="toDoItem" required>
       &nbsp;
      <button type="submit">Submit</button>
    </form>
    <div>
      <div id='list' v-for="(todo) in list" :key="todo.id">
          
          <!-- {{list}} -->
          <div v-if='!todo.isDone'>
            <input @click="reset(todo)" type="checkbox" v-model="todo.isDone">
            {{todo.task}} 
          </div>
        &nbsp;
      </div>
    </div>
    {{list}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      // เพิ่ม id
      id: 1,
      toDoItem:'',
      list: []
    }
  },
  methods: {
    submit(){
      // alert( this.toDoItem + ' added')
      //console.log(this.toDoItem)
      this.list.push({
        task: this.toDoItem,
        isDone: false,
        id: this.id
        }
        )
      this.id++
      this.toDoItem = null
    },
    remove(){
      if(this.list.isDone){
      this.list = []
      }
    }
  }
}
</script>

<style>

</style>