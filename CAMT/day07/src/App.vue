<template>
  <div>
    <form @submit.prevent="submit()">
      <h1>To do list</h1>
      <input type="text" v-model="toDoItem" required>
       &nbsp;
      <button type="submit">Submit</button>
    </form>
    <div>
      <div id='list' v-if="list">
        <p>Your to do list: {{list}}</p>
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
      this.list.push(this.toDoItem)
    }
  }
}
</script>

<style>

</style>