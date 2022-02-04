<template>
  <div>
    <!-- ชื่อ
    เบอร์โทร
    อีเมล
    รหัสผ่าน
    รหัสผ่านอีกครั้ง -->
    <form @submit.prevent="submit()">
      <div class='input-container'>
          <div class="inputTitle">ชื่อ</div>
          <input type="text" required v-model.trim="name">
      </div>
      <div class='input-container'>
          <div class="inputPhone">เบอร์โทร</div>
          <input type="text" required v-model.trim="phone">
      </div>
      <div class='input-container'>
          <div class="inputEmail">Email</div>
          <input type="text" required v-model="email">
      </div>
      <div class='input-container'>
          <div class="inputPass">รหัสผ่าน</div>
          <input type="password" required v-model.trim="pass1" @change="passChange">
          <p v-show="isPassError"> รหัสผ่านไม่ถูกต้อง</p>
      </div>
      <div class='input-container'>
          <div class="inputPass">รหัสผ่านอีกครั้ง</div>
          <input type="password" required v-model.trim="pass2" @change="passChange">
          <p v-show="isPassError"> รหัสผ่านไม่ถูกต้อง</p>
      </div>
      {{isPassError}}
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: '',
      phone: '',
      email:'',
      pass1:'',
      pass2:'',
      isPassError: false
    }
  },
  methods:{
    submit(){
      if(this.pass1 === this.pass2){
        alert('Registered Succeed')
      } else {
        alert('Please Check Your Confirm Password')
      }
    },
    passChange(){
      if (this.pass1 !== this.pass2){
        this.isPassError = true
      } else {
        this.isPassError = false
      }
    }
  }

}
</script>

<style>

</style>