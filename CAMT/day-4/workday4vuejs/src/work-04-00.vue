<template>
  <div id="app">
    <img v-show='show' alt="Vue logo" src="./assets/logo.png">
    <br>
    <button @click="onOff">ShowHide</button>
    <button @click="off">Hide</button>
    <button @click="onOff">Show</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function() {
    return {
      show: true
    }
  },
  methods: {
    onOff(){
      if (this.show === true){
        this.show = false
      } else {
        this.show = true
      }
    },
    off(){
      this.show = false
    },
    on(){
      this.show = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin: 5px;
}
</style>
