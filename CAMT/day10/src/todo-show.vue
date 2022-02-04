<template>
  <div>
      <h1>Here is to do list:</h1>
      
      <div v-for="(list, i) in toDoList" :key='i'>
          <input type="checkbox">
          {{list.text}}
          <!-- {{toDoList}} -->
      </div>
  </div>
</template>

<script>
export default {
    props: ['toDoList'],
    data(){
        return{
            
        }
    }

}
</script>

<style>

</style>