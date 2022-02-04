<template>
  <div>Test
    <hello></hello>
    <nong-joy></nong-joy>
  </div>
  
</template>

<script>
import Opec from './components/Opec.vue'
import Joy from './components/joy.vue'
export default {
  components:{
    'hello': Opec,
    'nong-joy': Joy,
  }
}

</script>

<style>

</style>