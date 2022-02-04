<template>
  <div>
      Todo Add
      <div>
          <form @submit.prevent="onSubmit">
              <label>Todo:</label>
              <input type="text" v-model="todoText">
              <button type="submit"> Just Do It!</button>
          </form>
      </div>
      <router-link to='/list'>Go to List</router-link>
  </div>
</template>

<script>
import store from '../store'
export default {
    data(){
        return{
            todoText: ''
        }
    },
    methods:{
        onSubmit(){
            alert('added '+ this.todoText)
            store.addTodo(this.todoText)
            this.todoText = ''
            // เปลี่ยนหน้าหลังกด
            this.$router.push('/list')
        }
    }
}
</script>

<style>

</style>