<template>
  <div>
    <div v-for="(item, i) in 'EACH' " :key="i">
      {{item}} -> {{i}}
    </div>
    <!-- for each เพื่อ ทำซ้ำอะไรก็ตามหลัง in -->
    <div v-for="(score, j) in score " :key="j">
      {{score}} -> index[{{j}}]
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      score: [50, 44, 45, 54, 89]
    }
  }
}
</script>

<style>

</style>