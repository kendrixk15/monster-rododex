<template>
  <div class='body'>
    <header>
      <img :src='image.logo'>
        <ul>
          <button :class="show === 1 ? 'activeBut' : 'defaultBut'" @click="showMember(1)">อาหาร</button>
          <button :class="show === 2 ? 'activeBut' : 'defaultBut'" @click="showMember(2)">สมาชิก</button>
          <button :class="show === 3 ? 'activeBut' : 'defaultBut'" @click="showMember(3)">รายการที่สั่ง</button>
          <button v-show='currentItem' @click="showMember(3)">{{currentItem}}</button>
        </ul>
    </header>
    <div v-if="show === 1" class='menus'>
      <div>
        <!-- Food1 -->
        <div class="hilight-meunu-boxes">
            <img :src='image.kapao' />
            <div class="menu-name-boxes">
                <div class="menu-name">
                    <h3>{{food[0].title}}</h3>
                    <p>{{food[0].des}}</p>
                </div>
                <div class="price-button">
                    <h4> {{food[0].price}} Baht</h4>
                    <button @click="addToCart(food[0])"> + </button>
                </div>
            </div>
        </div>
        <!-- Food2 -->
        <div class="hilight-meunu-boxes">
            <img :src='image.kaijeaw' />
            <div class="menu-name-boxes">
                <div class="menu-name">
                    <h3>{{food[1].title}}</h3>
                    <p>{{food[1].des}}</p>
                </div>
                <div class="price-button">
                    <h4> {{food[1].price}} Baht</h4>
                    <button @click="addToCart(food[1])"> + </button>
                </div>
            </div>
        </div>
      </div>
    </div>
    <hr>
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
    <div v-if='show === 3' class='cart'>
      <p> คุณมีรายการคำสั่งซื้อในตระกร้าทั้งหมด</p>
      <h2> {{cart.length}} รายการ </h2>
      <br>
      <div class='cart-items'>
        <div v-if='cart[0]'>
          <img :src='cart[0].image' /> 
          <h4>{{cart[0].title}}</h4>
          <p>{{cart[0].des}}</p>
          <h4> {{cart[0].price}} ฿</h4>
        </div>
        <div v-if='cart[1]'>
          <img :src='cart[1].image' /> 
          <h4>{{cart[1].title}}</h4>
          <p>{{cart[1].des}}</p>
          <h4> {{cart[1].price}} ฿</h4>
        </div>
        <div v-if='cart[2]'>
          <img :src='cart[2].image' /> 
          <h4>{{cart[2].title}}</h4>
          <p>{{cart[2].des}}</p>
          <h4> {{cart[2].price}} ฿</h4>
        </div>
        <div v-if='cart[3]'>
          <img :src='cart[3].image' /> 
          <h4>{{cart[3].title}}</h4>
          <p>{{cart[3].des}}</p>
          <h4> {{cart[3].price}} ฿</h4>
        </div>
        <div v-if='cart[4]'>
          <img :src='cart[4].image' /> 
          <h4>{{cart[4].title}}</h4>
          <p>{{cart[4].des}}</p>
          <h4> {{cart[4].price}} ฿</h4>
        </div>
        <h3> รวมเป็นเงิน </h3>
        <h3 v-if='currentItem'> {{totalPrice()}}฿ </h3>
        <button> สั่งอาหาร </button>

      </div>
    </div>
    <!-- length = {{foodLength()}} -->
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
      currentItem: 0 ,
      show: 1,
      cart: [],
      food: [
        {
        image: 'https://krua.co/wp-content/uploads/2020/06/RT1493_ImageBanner_1140x507.jpg',
        title: 'กะเพราทะเลไข่ดาว1',
        des: 'ข้าวหอมมะลิคัดพิเศษ ราดด้วยผัดกะเพราทะเล ที่วัตถุดิบส่งตรงจากเรือประมงส่วนตัวของร้าน',
        price: 100
        },
        {
        image: 'https://www.khaosod.co.th/wpapp/uploads/2017/12/Jay-Fai_preview.jpeg',
        title: 'ไข่เจียวปูสุดอู้ฟู่',
        des: 'ไข่เจียวปูสูตรต้นตำหรับ ขนาดเจ๊ไฝแกยังมาเรียนจับปูจากเรา',
        price: 200
        }
      ],
      email:'',
      password:'',
    }
  },
  methods: {
    showMember(a){
      this.show = a
    },
    addToCart(a){
      this.currentItem++
      this.cart.push(a)
    },
    totalPrice(){
      let total = 0
      let i = 0
      // while loop to calculate total prices
      while (i < this.cart.length){
        total += this.cart[i].price
        i++
      }
      return total
    },
    
    foodLength(){
      return this.food.length
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
    width: 80px;
    margin-bottom: 10px;
  }
  
  .activeBut{
    background-color: crimson;
    color: wheat;
  }

  .defaultBut{
    background-color: lightgray;
    color: black;
  }
  /* reset */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

  a {
      text-decoration: none;
  }

  li{
      list-style: none;
  }

  /* style */
  .body{
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  #name-logo img {
      width: 120px;
      margin-left: 30px;
      margin-bottom: 10px;
  }

  h1{
      margin-bottom: 20px;
  }

  #header-nav {
      display: flex;
      flex-direction: row;
      justify-content: center;

  }

  #header-nav #a-menu, #a-mem {
      margin: 0 5px;
      background-color: lightgray;
      width: 80px;
      border-radius: 20px;
      text-align: center;
      padding-top: 3px;
  }

  #header-nav #a-buy-items{
      margin: 0 5px;
      background-color: lightgray;
      width: 150px;
      border-radius: 20px;
      text-align: center;
      padding-top: 3px;
  }
  #cart-item{
      background-color: red;
      width: 30px;
      height: 30px;
      border-radius: 60%;
      text-align: center;
      padding-top:6px;
      padding-right: 1px;
      color: white;
      margin-bottom: 10px;
  }

  .menus{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }

  .hilight-meunu-boxes{
      display:flex;
      flex-direction: column;
      width: 550px;
      margin: 0 10px;
      height: 300px;
  }

  .menu-name{
      margin-left: 5px;
  }

  .menu-name p{
      font-size: 12px;
      color: rgba(50, 50, 50, 0.7);
      width: 70%;
  }

  .menu-name-boxes{
      display: flex;
      justify-content: space-between;
      box-shadow: 1px 1px 5px lightgray;
      height: 60px;
  }

  .price-button{
      display: flex;
      flex-direction: row;
      align-items: center;
      align-content: center;
      height: 60px;
  }

  .price-button > button {
      background-color: darkred;
      border-radius: 50%;
      border: none;
      width: 20px;
      height: 20px;
      color: white;
      margin: 5px;
  }
  .price-button > button:hover{
      background-color: red;
  }

  .hilight-meunu-boxes>img{
      width: 550px;
      height: 70%;
      border-radius: 20px 20px 0 0;
      object-fit:cover;
  }
</style>