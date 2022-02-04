<template>
  <div>
    <form>
      <div>
        <label for="firstName">First Name</label>
        <input type="text" id='firstName' v-model="form.firstname">
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <input type="text" id='lastName' v-model="form.lastname">
      </div>
      <div>
        <label for="email">Email: </label>
        <input type="email" id='email' v-model="form.email">
      </div>
      <div>
        <label for="phoneNumber">Phone</label>
        <input type="text" id='phoneNumber' v-model="form.phoneNumber">
      </div>
      <div>
        <label for="password">password</label>
        <input type="text" id='password' v-model="form.password">
      </div>
      <div>
        <label for="avatar">Avatar</label>
        <input type="file" id='avatar'>
      </div>
      <button type="submit"> Submit</button>
    </form>
    <div>
      <div>Fistname: {{profile.firstname}}</div>
      <div>Lastname: {{profile.lastname}}</div>
      <div>Phone:{{profile.phoneNumber}}</div>
      <div>Email: {{profile.email}}</div>
      <div>Avatar {{profile.avatar}}</div>
    </div>
  </div>
</template>

<script>
const host = 'https://camt-foodapi.pair-co.com/'
export default {
data(){
  return{
    form:{
      fisrtname:'',
      lastname:'',
      password:'',
      phoneNumber:'',
      email:'',
    },
    profile:{

    }
  }
  },
  methods:{
    register(){
      const registerURL = `${host}/register`
      fetch(registerURL),{
        method: 'POST',
        Headers:{
          'content-type':'application/json'
        }
      }
    }

}
}

</script>

<style>

</style>