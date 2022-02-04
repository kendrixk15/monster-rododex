<template>
  <div>
    <div>
      <button @click="clickMe">Click me</button>
      <div v-if="loading">loading....</div>
      <div v-else>
        <div v-for="item in showMe" :key="item.id" class='box'>
          {{item.title}}
          <br>
          {{item.body}}
          <br>
          <button>View Comment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showMe:'',
      comment:'',
      show:1,
      loading:false
    }
  },
  methods:{
    clickMe(){
      this.loading = true
      fetch('https://jsonplaceholder.typicode.com/posts')
    .then((Response) =>{
      return Response.json()
  }) .then((data) =>{
     this.showMe = data
  })
  .catch((error) =>{
    alert(error)
  })
  .finally(()=>{
    this.loading = false
  })
    },
    viewComment(){
      
    }
  }
}
</script>

<style>
.box{
  margin: 10px 0;
  border: 1px solid black;
  font-size: 12px;
  width: 500px;
}
</style>