<template>
  <div>
    <div>
      <header>
         <router-link to="/main" class="router-link">Twitter</router-link>
      </header>
      <div v-if="!router-link">
        <h1>Hi! Welcome to Twitchter</h1>
        Please Log In or Sign Up to continue!
        <button @click="enterSite" class="button"> Enter Site</button>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isShow: true
    }
  },
  mounted(){
    // บังคับให้ไปหน้า login ก่อนถ้ายังไม่ได้ login
    if(!this.$root.state.isLogin){
      this.$router.push('/login')
    } else {
      this.$router.push('/main')
    }
  },
  methods:{
    enterSite(){
      this.isShow = false
      this.$router.push('/main')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #0e0e10;
  font-family: 'Roboto Mono', monospace;
  color: white;
}
header{
  display: flex;
}

.router-link{
  color: #fff;
  background-color: #9147ff;
  text-decoration: none;
  margin-left:80px;
}
.router-link:hover{
  cursor: pointer;
}

</style>