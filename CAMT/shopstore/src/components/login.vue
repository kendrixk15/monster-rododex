<template>
  <div class="body-login">
    <div class="login-container">
      <form @submit.prevent="login" class="form-box">
        <div class="input-form-box">
          <div class="input-box">
            <label for="loginInput">Email: </label>
            <input id="loginInput" type="email" v-model="loginInfo.email" required />
          </div>
          <div class="input-box">
            <label for="passwordInput">Password: </label>
            <input id="passwordInput" type="password" v-model="loginInfo.password" required />
          </div>
        </div>
        <div class="button-box">
          <button type="button" class="button" @click="registPage">Register</button>
          <button type="sumbit" class="button">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  data() {
    return {
      loginInfo:{
        email: "",
        password: "",
      }
    }
  },
  methods:{
    registPage(){
      this.$router.push('/register')
    },
    login(){
      const host = 'https://camt-shopapi.pair-co.com'
      fetch(`${host}/login`,{
        method: "POST",
        headers:{
          'content-type':'application/JSON'
        },
        body: JSON.stringify(this.loginInfo)
      }).then(Response=>{
            if (Response.status===401){
                alert('incorrect username/password')
              } else {
                return Response.json()
              }
        }).then(data=>{
        console.log(data)
        store.setToken(data.token)
      }).catch(err=>console.log(err))
    }
  }
}
</script>

<style>
.body-login{
  width: 100%;
  height: 60px;
}
.input-form-box{
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  margin-right: 32px;
  /* margin-top: 16px; */
  width: 100%;
  color: #fff;
}
.form-box{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  /* margin-bottom: 8px;
  padding-bottom: 8px; */
}
.button-box{
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-self: center;
  align-items: center;
  margin-left: 32px;

}
.input-box{
  margin: 0 8px;
}
.button{
  margin: 4px 4px;
  height: 25px;
  font-size: 14px;
  padding: 0 8px;
  
}
#loginInput, #passwordInput{
  margin-left: 4px;
}
.login-container{
  display: flex;
  margin-bottom: 16px;
}
</style>