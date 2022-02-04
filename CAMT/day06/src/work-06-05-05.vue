<template>
  <div>
    <header>
      <img :src='image.logo'>
        <ul>
          <button @click="showMember(1)">อาหาร</button>
          <button @click="showMember(2)">สมาชิก</button>
          <button @click="showMember(3)">รายการที่สั่ง</button>
          <a href='#'>0</a>
        </ul>
    </header>
    <div v-if="show === 1" id='menus'>
      <div>
        <div id="hilight-meunu-boxes">
            <img :src='image.kapao' />
            <div id="menu-name-boxes">
                <div id="menu-name">
                    <h3>กะเพราทะเลไข่ดาว</h3>
                    <p>ข้าวหอมมะลิคัดพิเศษ ราดด้วยผัดกะเพราทะเล <br> ที่วัตถุดิบส่งตรงจากเรือประมงส่วนตัวของร้าน</p>
                </div>
                <div class="price-button">
                    <h4>100 Baht</h4>
                    <button @click="addToCart"> + </button>
                </div>
            </div>
        </div>
        <div id="hilight-meunu-boxes">
            <img :src="image.kaijeaw">
            <div id="menu-name-boxes">
                <div id="menu-name">
                    <h3>ไข่เจียวปู</h3>
                    <p>ไข่เจียวปูต้นตำหรับ เจ๊ไฝก็มาเรียนสูตรการจับปูจากทางร้านเรา</p>
                </div>
                <div class="price-button">
                    <h4>200 Baht</h4>
                    <button @click="addToCart(kapaotalay)"> + </button>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div v-if='show === 2' id='member'>
      <h1> สมาชิก </h1>
      <form @submit="submit()">
      <div>
        <div class='input-container'>
          <p>อีเมล</p>
          <input type="email" v-model.trim="email" required>
        </div>
        <div class='input-container'>
          <p>รหัสผ่าน</p>
          <input type="password" v-model.trim="password" required>
        </div>
      </div>
      <button type="menu">สมัครสมาชิก</button>
      <button type="submit">เข้าสู่ระบบ</button>
    </form>
    </div>
    <hr>
    <div v-if='show === 3' id='cart'>
      <p> คุณมีรายการคำสั่งซื้อในตระกร้าทั้งหมด</p>
      <h2> 1 รายการ </h2>
      <br>
      <img :src='image.kapao' /> 
      <h4>กะเพราทะเลไข่ดาว</h4>
      <p>ข้าวหอมมะลิคัดพิเศษ ราดด้วยผัดกะเพราทะเล <br> ที่วัตถุดิบส่งตรงจากเรือประมงส่วนตัวของร้าน</p>
      <h4> 100$ </h4>
      <h3> รวมเป็นเงิน </h3>
      <h3> 100$</h3>

      <button> สั่งอาหาร </button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      image: {
        logo: 'https://cdn.dribbble.com/users/3055978/screenshots/11864513/1_4x.jpg',
        kapao: 'https://krua.co/wp-content/uploads/2020/06/RT1493_ImageBanner_1140x507.jpg',
        kaijeaw: 'https://www.khaosod.co.th/wpapp/uploads/2017/12/Jay-Fai_preview.jpeg'
      },
      show: 3,
      email:"",
      password: ''
    }
  },
  methods: {
    showMember(a){
      this.show = a
    }
  }
}
</script>

<style>
  img {
   width: 240px;}
  
  button {
    border: 0px;
    border-radius: 10px;
  }
  
</style>