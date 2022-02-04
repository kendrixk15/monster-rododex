<template>
  <div>
      <div class="login-container">
          <form @submit.prevent="login()">
              <div class="log-box">
                <label for="username" >Username: </label>
                <input type="text" v-model="loginInfo.username">
            </div>
            <div class="log-box">
                <label for="password" >Password: </label>
                <input type="password" v-model="loginInfo.password">
            </div>
            <div class="but-container">
                <router-link to="/register" class="log-button"> Register </router-link>
                <button class="log-button">Login</button>
            </div>
          </form>
      </div>
  </div>
</template>

<script>
import store from '../../store.js'
export default {
data(){
    return{
        loginInfo:{username:'',
        password:''}
    }
},
methods:{
    login(){
        // console.log(this.$root.state.token)
        fetch('https://camt-twitterapi.pair-co.com/login',{
            method: "POST",
            headers:{
                'content-type':'application/json'            
                },
            body: JSON.stringify(this.loginInfo)
        }).then(Response=>{
            if (Response.status===401){
                alert('incorrect username/password')
              } else {
                return Response.json()
              }
        }).then(data=>{
            store.setToken(data.token)
            console.log(this.$root.state.token)
            this.$root.state.isLogin = true
            this.$router.push('/main')
        })
    }
}
}
</script>

<style>
.login-container{
    display: flex;
    justify-content: center;
    width: 100%;
}
.log-box{
    display: flex;
    flex-direction: column;
    margin: 16px 0;
    width: 30vh;
}
.log-box>label{
    margin-bottom: 16px ;
}
.but-container{
    display: flex;
    justify-content: space-around;
    margin-left: 32px;
}
.log-button{
    background-color: #9147ff ;
  height: 32px;
  width: 32%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 12px;
  border: none;
  /* box-shadow: 0px 0px 2px whitesmoke; */
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0 4px;
}
.log-button:hover{
    box-shadow: 0px 0px 4px whitesmoke;
    cursor: pointer;
}

</style>