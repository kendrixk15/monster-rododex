<template>
  <div>
    <div>
      <textarea cols="30" row="10" v-model.trim="des"></textarea>
      <button @click="submit('des')">Submit</button>
    </div>
    <input type="number" v-model.number="age">
    <button @click="submit('age')">Submit</button>
  </div>
</template>

<script>
export default {  
  data(){
    return{
      // number: 0,
      age: 0,
      des: null
    }
  },
  methods: {
    submit(input){
      console.log(input,this[input])
    }
  }
}
</script>

<style>

</style>