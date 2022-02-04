<template>
  <div class="register-body">
      <span class="profile-title">Create New Shop</span>
      <div class="register-container">
          <form @submit.prevent="regist()" class="regist-form">
          <div class='input-box-regist'>
              <label for="regis-picture">Shop Pictures: </label>
              <input id="regis-picture" type="file" @change="getPic">
          </div>
          <div class='input-box-regist'>
              <label for="regis-name">Shop Name: </label>
              <input id="regis-name" type="text" v-model="regis.shopName" required>
          </div>
           <div class='input-box-regist'>
              <label for="regis-des">Shop Desscription: </label>
              <input id="regis-des" type="text" v-model="regis.shopDes" required>
          </div>
          <div class='input-box-regist'>
              <!-- <label for="regis-cate">Email: </label>
              <input id="regis-cate" type="drop" v-model="regis.shopeDes"> -->
              <label for="regis-cate">Choose your shop category: </label>
                <select id="regis-cate" v-model="regis.cate">
                    <option>Cosmetic/Beauty</option>
                    <option>Toys</option>
                    <option>F/B</option>
                    <option>Home Applicances </option>
                    <option>Fashion/Clothes</option>
                    <option>Electric Devices</option>
                    <option>Sports</option>
                    <option>Travel</option>
                </select>                   
          </div>
          <div class='input-box-regist'>
              <label for="regis-email">Email: </label>
              <input id="regis-email" type="text" v-model="regis.email" required>
          </div>
          <div class='input-box-regist'>
              <span class="conPass">{{confirmText}}</span>
              <label for="regis-password">Passwords: </label>
              <input id="regis-password" type="password" v-model="regis.password" @change="conPassword" required>
          </div>
          <div class='input-box-regist'>
              <span class="conPass">{{confirmText}}</span>
              <label for="regis-conPass">Confirm Password: </label>
              <input id="regis-conPass" type="password" v-model="regis.conPassword" @change="conPassword" required>
          </div>
          <button class="regist-button" type="submit">Create Shop</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            regis:{
                shopName:'',
                shopDes:'',
                cate:'',
                email:'',
                password:'',
                conPassword:'',
                photo:null
            },
            confirmText:''
        }
    },
    methods:{
        getPic(event){
            console.log(event.target.files[0])
            this.regis.photo = event.target.files[0]
        },
        regist(){
          if(!this.confirmText){  
          const formData = new FormData()
            formData.append('name', this.regis.shopName)
            formData.append('description', this.regis.shopDes)
            formData.append('category', this.regis.cate)
            formData.append('email', this.regis.email)
            formData.append('password', this.regis.password)
            formData.append('photo', this.regis.photo)
          fetch('https://camt-shopapi.pair-co.com/register', {
              method: 'POST',
              body: formData
          }).then(Response=>{
              console.log(Response)
              alert('You are good to go, let start selling now!')
              this.$router.push('/main')
          }).catch(error=>{alert(error)})
          } else {
              alert('Please check password and confirm password')
          }
      },
      conPassword(){
          if(this.regis.password!==this.regis.conPassword){
              this.confirmText = 'Password do not match'
          } else {
              this.confirmText = ''
          }
      }
    },
    mounted(){
        //prevent การเข้าหน้าสมัครตอนล้อคอิน
        if(this.$root.state.token){
            alert('You are already logged in')
            this.$router.push('/shopdetail')
        } else {
            return 
        }
    }
}
</script>

<style>
.register-body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
}
.input-box-regist{
    display: flex;
    flex-direction: column;
    border: none;
    /* box-shadow: 0px 0px 2px lightgray; */
    margin: 8px;
    font-size: 24px;
}
.conPass{
    color: #e5002b;
}
.register-container{
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin-top: 16px;
    align-items: center;
    background: linear-gradient(120deg, #c7c7c7 50%, #616161 120%);
    border-radius: 25px;
    padding: 16px;
}
.regist-button{
    margin: 8px 96px;
}
</style>