<template>
  <div>
    <form @submit.prevent="submit()">
      <h1>To do list</h1>
      <input type="text" v-model="toDoItem" required>
       &nbsp;
      <button type="submit">Submit</button>
    </form>
    <div>
      <div id='list' v-for="(todo, i) in list" :key="i">
        Your to do list: 
          {{todo.task}}
          <input type="checkbox" v-model="todo.isDone" id="">
        &nbsp;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      toDoItem:'',
      list: []
    }
  },
  methods: {
    submit(){
      alert( this.toDoItem + ' added')
      console.log(this.toDoItem)
      this.list.push({
        task: this.toDoItem,
        isDone: false}
        )

      this.toDoItem = null
    }
  }
}
</script>

<style>

</style>