<template>
  <div class="regis-body">
    <div>
      <form @submit.prevent="regist()" class="register-form">
        <div class="register-box">
            <input id="avatar" type="file" @change="avatarUpload">
        </div>
        <div class="register-box">
          <label for="username">Username</label>
          <input type="text" v-model="register.username" />
        </div>
        <div class="register-box">
          <label for="firstname">Firstname</label>
          <input type="text" v-model="register.firstname" />
        </div>
        <div class="register-box">
          <label for="lastname">Lastname</label>
          <input type="text" v-model="register.lastname" />
        </div>
        <div class="register-box">
          <label for="email">Email</label>
          <input type="text" v-model="register.email" />
        </div>
        <div class="register-box">
          <label for="password">Password</label>
          <input type="text" v-model="register.password" />
        </div>
        <div class="register-box">
          <label for="phoneNumber">Phone Number</label>
          <input type="text" v-model="register.phoneNumber" />
        </div>
        <button class="button">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        phoneNumber:"",
        avatar:null
      },
    }
  },
  methods:{
      regist(){
          const formData = new FormData()
            formData.append('firstname', this.register.firstname)
            formData.append('lastname', this.register.lastname)
            formData.append('email', this.register.email)
            formData.append('username', this.register.username)
            formData.append('password', this.register.password)
            formData.append('phoneNumber', this.register.phoneNumber)
            formData.append('avatar', this.register.avatar)
          fetch('https://camt-twitterapi.pair-co.com/register', {
              method: 'POST',
              body: formData
          }).then(Response=>{
              console.log(Response)
              this.$router.push('/login')
          }).catch(error=>{alert(error)})
      },
      avatarUpload(event){
          this.register.avatar = event.target.files[0]
      }

  }
};
</script>

<style>
.register-form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.register-box{
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 56px;
    justify-content: space-around;
    margin: 16px 0;
}
</style>