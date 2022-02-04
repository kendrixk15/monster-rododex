<template>
  <div>
      <div class="edit-body">
    <div>
      <form @submit.prevent="editProfile()" class="register-form">
        <div class="register-box">
          <label for="firstname">Firstname</label>
          <input type="text" v-model="edit.firstname" />
        </div>
        <div class="register-box">
          <label for="lastname">Lastname</label>
          <input type="text" v-model="edit.lastname" />
        </div>
        <div class="register-box">
          <label for="username">username</label>
          <input type="text" v-model="edit.username" />
        </div>
        <div class="register-box">
          <label for="phoneNumber">Phone Number</label>
          <input type="text" v-model="edit.phoneNumber" />
        </div>
        <div class="register-box">
          <label for="password">password</label>
          <input type="text" v-model="edit.password" />
        </div>
        <div class="register-box">
          <label for="confirmPassword">Confirm Password</label>
          <input type="text" v-model="edit.confirmPassword" />
        </div>
        <div class="editpro-but-container">
          <router-link to="/editavatar" class="button">Edit Avatar</router-link>
        <button type="submit" class="button">Save edit</button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
      edit: {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        confirmPassword:""
      },
    }
    },
methods:{
    editProfile(){
      fetch('https://camt-twitterapi.pair-co.com/me',{
        method:"PUT",
        headers:{
            Authorization: `Bearer ${this.$root.state.token}`,
            'content-type':'application/json'
        },
        body: JSON.stringify(this.edit)
      }).then(Response=>{
        return Response, 
        alert('Profile Updated'), 
        this.$router.push('/main')
      })
      this.$router.push('/main')
    }
}
}
</script>

<style>
.edit-body{
  width: 100%;
}
.editpro-but-container{
  width: 100%;
  display: flex;
  justify-content: center;
}
.button{
  background-color: #9147ff ;
  height: 32px;
  width: 8%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 12px;
  border: none;
  box-shadow: 0px 0px 2px whitesmoke;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0 8px;
}
.button:hover{
   box-shadow: 0px 0px 4px white;
  cursor: pointer;
}
</style>