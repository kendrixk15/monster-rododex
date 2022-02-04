<template>
  <div>
    <div>
      <vue-confirmation-button :messages="myMessages" ></vue-confirmation-button>
    </div>
    <button @click="toggleToDo">Hide</button>
    <div> 
      <todo-input v-if='isShow' @toDoTask="todo"></todo-input>
      <todo-show :toDoList="todos"></todo-show>
    </div>
    {{todos}}
       
  </div>
</template>

<script>
// import {conCelToFah,conFahToCel} from './tempChanger.js'
import todoinput from './todo-input.vue'
import todooutput from './todo-show.vue'
import vuecConfirmationButton from 'vue-confirmation-button'
export default {
  components:{
    'todo-input': todoinput,
    'todo-show' : todooutput,
    'vue-confirmation-button' : vuecConfirmationButton,
  },
  data(){
    return{
      myMessages:[
        'OK',
        'Pls Dont',
        'NO'
      ],
      isShow: true,
      todos:[
                {
                    text: 'aaa',
                    isDone: false
            },
            {
                    text: 'bbb',
                    isDone: false
            },
            {
                    text: 'ccc',
                    isDone: false
            },
            
            ]
    }
  },
  methods:{
    toggleToDo(){
      this.isShow = !this.isShow
    },
    todo(task){
      this.todos.push({
        text: task,
        isDone: false
        })
    }
  }
}

</script>

<style>

</style>