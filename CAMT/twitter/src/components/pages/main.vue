<template>
  <div>
      <div class="main-body">
        <div class="profile-body">
            <profile/>
        </div>
        <div class="feed-body">
            <feed/>
        </div>
        <div class="others">
            All People:
            <twittians/>
        </div>
    </div>
  </div>
</template>

<script>
import feed from '../feed.vue'
import Profile from '../profile.vue'
import Twittians from "../twittian.vue";
export default {
  components: { feed, Profile, Twittians},
  data(){
    return{
      isLoggedin: false
    }
  },
  mounted(){
    // บังคับให้ไปหน้า login ก่อนถ้ายังไม่ได้ login
    if(!this.$root.state.token){
      this.$router.push('/login')
    } else {
      this.$router.push('/main')
    }
    // console.log(this.$root.state.isLogin)
    // console.log(this.$root.state.token)
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #191414;
  font-family: 'Roboto Mono', monospace;
}
header{
  background-color: #9147ff ;
  height: 50px;
  min-width: 100vh;
  /* box-shadow: 1px 1px 5px gray; */
  text-align: center;
  font-size: 32px;
}
.main-body{
  display: flex;
}

.profile-body{
  flex:1;
  /* border: gray 1px solid; */
  min-height: 100vh;
  padding: 16px 0;
}

.feed-body{
  display: flex;
  flex: 3;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.others{
  flex: 1;
  /* border: gray 1px solid; */
  min-height: 100vh;
  padding: 32px 0;
  margin-right: 64px;
}
</style>