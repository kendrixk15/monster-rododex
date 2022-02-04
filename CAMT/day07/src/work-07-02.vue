<template>
  <div>
    <header>
      <img :src='image.logo'>
        <ul>
          <button :class="show === 1 ? 'activeBut' : 'defaultBut'" @click="showMember(1)">อาหาร</button>
          <button :class="show === 2 ? 'activeBut' : 'defaultBut'" @click="showMember(2)">สมาชิก</button>
          <button :class="show === 3 ? 'activeBut' : 'defaultBut'" @click="showMember(3)">รายการที่สั่ง</button>
          <button @click="showMember(3)">{{currentItem}}</button>
        </ul>
    </header>
    <div v-if="show === 1" id='menus'>
      <div>
        <div id="hilight-meunu-boxes">
            <img :src='image.kapao' />
            <div id="menu-name-boxes">
                <div id="menu-name">
                    <h3>{{food[0].title}}</h3>
                    <p>{{food[0].des}}</p>
                </div>
                <div class="price-button">
                    <h4> {{food[0].price}} Baht</h4>
                    <button @click="addToCart(food[0])"> + </button>
                </div>
            </div>
        </div>
        <div id="hilight-meunu-boxes">
            <img :src='image.kaijeaw' />
            <div id="menu-name-boxes">
                <div id="menu-name">
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
    <div v-if='show === 3' id='cart'>
      <p> คุณมีรายการคำสั่งซื้อในตระกร้าทั้งหมด</p>
      <h2> {{currentItem}} รายการ </h2>
      <br>
      <div v-if='cart'>
        <img :src='cart.image' /> 
        <h4>{{cart.title}}</h4>
        <p>{{cart.des}}</p>
        <h4> {{cart.price}} ฿</h4>
        <h3> รวมเป็นเงิน </h3>
        <h3 v-show='currentItem'> {{cart.price*currentItem}}฿</h3>
      </div>
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
      currentItem: 0 ,
      show: 1,
      cart: [],
      food: [
        {
        image: 'https://krua.co/wp-content/uploads/2020/06/RT1493_ImageBanner_1140x507.jpg',
        title: 'กะเพราทะเลไข่ดาว',
        des: 'ข้าวหอมมะลิคัดพิเศษ ราดด้วยผัดกะเพราทะเล ที่วัตถุดิบส่งตรงจากเรือประมงส่วนตัวของร้าน',
        price: 100
        },
        {
        image: 'https://www.khaosod.co.th/wpapp/uploads/2017/12/Jay-Fai_preview.jpeg',
        title: 'ไข่เจียวปูสุดอู้ฟู่',
        des: 'ไข่เจียวปูสูตรต้นตำหรับ ขนาดเจ๊ไฝแกยังมาเรียนจับปูจากเรา',
        price: 200
        },
      ]
    }
  },
  methods: {
    showMember(a){
      this.show = a
    },
    addToCart(a){
      this.currentItem++
      this.cart = a
    },
    sumPrice(a){
    a * this.currentItem
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
  
  .activeBut{
    background-color: crimson;
    color: wheat;
  }

  .defaultBut{
    background-color: lightgray;
    color: black;
  }
</style>