<template>
  <div>
      Todo List
      <div v-for="(list, index) in $root.state.todoList" :key="index">
          <label>
          <input type='checkbox' :checked="false">
          {{list}}
          </label>
      </div>
    <router-link to='/add'>Add to do</router-link>
  </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$root.state.todoList)
    }
}
</script>

<style>

</style>