<template>
  <div class="app-body">
    <header>
      <div class="header-img">
        <router-link to="/main"><span class="home">Lazadee</span></router-link>
      </div>
      <div v-if="!this.$root.state.token" class="member-box">
        <login/>
      </div>
      <div v-else class="member-box">
        <memberbox/>
      </div>
    </header>
    <!-- <section class="cover-photo">
    </section> -->
    <router-view class="router-container" />
  </div>
</template>

<script>
import login from './components/login.vue'
import Memberbox from './components/memberbox.vue'
export default {
  components: { login, Memberbox },
  data(){
    return{
    }
  },
  mounted(){
    this.$router.push('/main')
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Oswald', 'Prompt';
}
.home-logo{
  width: 80px;
  height: 80px;
  object-fit: contain;
  object-position: 50% 50%;
}
.app-body{
  background: linear-gradient(0deg, #E5002B 0%, #0050A0 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
header{
  display: flex;
  color: #fff;
  /* background-color: lightgray; */
  background: linear-gradient(90deg, #E5002B 0%, #0050A0 100%);
  min-height: 96px;
  max-height: 96px;
  max-width: 100%;
  box-shadow: 0px 0px 1px lightgray;
  /* position: fixed; */
  z-index: 10;
}
.header-img{
  flex: 3;
  display: flex;
  justify-content: flex-start;
}
/* .nav-bar{
  flex: 1;
  display: flex;
  justify-content: center;
} */
.member-box{
  flex:1;
  display: flex;
  height: 88px;
  width: 120px;
}
.home{
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  
  text-decoration: none;
}
a{
  text-decoration: none;
  margin: 16px;
}
.cover-photo{
    position: absolute;
    width: 100%;
    height: 50%;
    font-size: 158px;
    text-align: center;
    z-index: 0;
    margin: 0 0 1000px 0;
    background-image: url('https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/2018-11-28/Holiday%20Spending_Gift%20Giving.jpg?pw=1200') ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    align-self: center;
    opacity: 0.95;
    color: #fff;
    text-shadow:0px 0px 56px #1e792c;
}
@media screen and (max-width: 1200px) {
  .cover-photo > span {
    display: none;
  }
}
.cover-photo:hover{
    /* opacity: 1; */
    color: #E5002B;
    text-shadow:0px 0px 18px #067034;
    transition: ease-in-out 2ms;
    cursor: wait;
}
/* .router-container{
  margin-top: 264px;
  z-index: 10;
} */
</style>