<template>
  <div>
    {{nested()}}
  </div>
</template>

<script>
export default {
  methods:{
    nested(){
      let i =0 
      while ( i < 10){
        let j = 0 
        let leaf = ''
        while ( j < i){
          if ( j <= i ){
            leaf += '*'
          }
           console.log(leaf)
          j++
          
        }
        i++
      }
      
    }
  }
}
</script>

<style>

</style>