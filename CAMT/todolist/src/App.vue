<template>
  <div>
    <form @submit.prevent="submit()">
      <h1>To do list</h1>
      <input type="text" v-model="toDoItem" required>
      <button type="submit">Submit</button>
    </form>
    <div>
      <div id='list' v-if="list">
        <p>Your to do list: {{list}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      toDoItem:'',
      list: ''
    }
  },
  methods: {
    submit(){
      alert('Now you finished')
      console.log(this.toDoItem)
      this.list = this.toDoItem
    }
  }
}
</script>

<style>

</style>