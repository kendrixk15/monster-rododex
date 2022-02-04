<template>
  <div>
    <div>
      <nav>
        <router-link to="newsdetail">Mac</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
mounted(){
        console.log(this.$route)
    }
}
</script>

<style>

</style>