<template>
  <div>
      <div>Youtube {{$route.params.videoId}} </div>
      {{youtubelink}}
      <iframe width="560" height="315" 
      :src="youtubelink" 
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; 
      encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
    computed:{
        youtubelink(){
            return 'https://www.youtube.com/embed/' + this.$route.params.videoId
        }
    }
}
</script>

<style>

</style>