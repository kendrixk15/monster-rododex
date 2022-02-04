<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view/>
    <!-- old web reload all web -->
    <a href="/com1">Go to com1</a>
    <br>
    <a href="/com2">Go to com2</a>
    <br>
    <!-- new web style -->
    <router-link to='/com1'>1</router-link>
    <br>
    <router-link to='/com2'>2</router-link>
    <com-1/>
    <com-2/>
  </div>
</template>

<script>
import Com1 from './components/com1.vue'
import Com2 from './components/com2.vue'

export default {
  name: 'App',
  components: {
    Com1,
    Com2
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
</style>
