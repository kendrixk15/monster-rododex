<template>
  <div>
      <form @submit.prevent="toDoIt">
        <label for="todo">Todo</label>
        <input type="text" v-model="toDoList" id="todo">
        <button type="submit">Do It!</button>
      </form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            toDoList:'',
        }
    },
    methods:{
        toDoIt(){
            //this.toDo.push(this.toDoList)
            this.$emit('toDoTask', this.toDoList)
            this.toDoList = ''
            
        }
    },
    // beforeMount(){
    //     alert('ready to create')
    // },
    // beforeDestroy(){
    //     alert('Goodbye')
    // }

}
</script>

<style>

</style>