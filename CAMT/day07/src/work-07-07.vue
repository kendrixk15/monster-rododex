<template>
  <div>
    <form @submit.prevent="showArray()">
      <h3>Give us first number</h3>
      <input type="number" v-model.number="devineNum">
      <p v-if='isZero'>Please choose number greater than zero</p>
      <h3>Give us Goal number</h3>
      <input type="number" v-model.number="maxNum">
      <br>
      <button type="submit">Submit</button>
    </form>
    show: {{devineNum}}
    show: {{maxNum}}
    <br>
    Array is: {{array}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      isZero: false,
      devineNum: null,
      maxNum: null,
      array: []
    }
  },
  methods:{
    showArray(){
      if (this.devineNum <= 0) {
        alert('Please Check your input (Dont put Zero)')
        return}
      else {
      this.array = []
      let i = 0
      while ( i <= this.maxNum){
        if (i% this.devineNum === 0){
          this.array.push(i)
        }
        i++
      }
      }
      //alert(this.array)
    }
  }
}
</script>

<style>

</style>