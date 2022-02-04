<template>
  <div>
    <h1>Counting</h1>
    <p>{{oodNumber()}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      number: 0
    }
  },
  methods:{
    oodNumber(){
      let i = 1
      let count = 1
      while (i <= 560){
        if ( i %2 ===1 ){
          count++
        }
        i++
      }
      return count
    }
  }
}
</script>

<style>

</style>