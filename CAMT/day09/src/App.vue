<template>
  <div class='body'>
    <header>
      <img :src='image.logo'>
        <ul>
          <button :class="show === 1 ? 'activeBut' : 'defaultBut'" @click="showMember(1)">อาหาร</button>
          <button :class="show === 2 ? 'activeBut' : 'defaultBut'" @click="showMember(2)">สมาชิก</button>
          <button :class="show === 3 ? 'activeBut' : 'defaultBut'" @click="showMember(3)">รายการที่สั่ง</button>
          <button v-show='currentItem' @click="showMember(3)">{{cart.length}}</button>
        </ul>
    </header>
    <div v-if="show === 1" class='menus'>
      <div class='menus-high-contain'>
        <!-- Food1 -->
        <div v-for="(item, i) in foodList.recommend" :key='i'>
          <div class="hilight-meunu-boxes">
            <img :src='food[i].image' />
            <div class="menu-name-boxes">
                <div class="menu-name">
                    <h3>{{food[i].title}}</h3>
                    <p>{{food[i].des}}</p>
                </div>
                <div class="price-button">
                    <h4> {{food[i].price}} Baht</h4>
                    <button @click="addToCart(food[i])"> + </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- other menus -->
    <div v-if="show === 1" class="other-menus">
        <div class="normal-meunu-boxes" v-for="(item, i) in foodList.other" :key='i'>
            <img :src='food[i].image' />
            <div class="normal-menu-details">
                <div class='normal-food-name'>
                    <h3>{{food[i].title}}</h3>
                    <p>{{food[i].des}}</p>
                    <h4>{{food[i].price}} Baht</h4>
                </div>
                <div>
                    <button @click="addToCart(food[i])"> + เพิ่ม </button>
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
      <div v-for="(item) in cart" :key="item.id">
        <div v-if='item'>
          <img :src='item.food.image' /> 
          <h4>{{item.food.title}}</h4>
          <p>{{item.food.des}}</p>
          <h4> {{item.food.price}} ฿</h4>
          {{item.id}}
          <button @click="del(item)"> ลบรายการ </button>
        </div>
      </div>
        <!-- total -->
        <div>
          <h3> รวมเป็นเงิน </h3>
          <!-- <h3 v-if='currentItem'> {{totalPrice()}}฿ </h3> -->
          <h3 v-if='currentItem'> {{totalComPrice}}฿ </h3>
          <button> สั่งอาหาร </button>
          {{cart}}
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
      id: 1,
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
        },
        {
        image: 'https://www.khaosod.co.th/wpapp/uploads/2017/12/Jay-Fai_preview.jpeg',
        title: 'ไข่เจียวปูสุดอู้ฟู่',
        des: 'ไข่เจียวปูสูตรต้นตำหรับ ขนาดเจ๊ไฝแกยังมาเรียนจับปูจากเรา',
        price: 200
        },
        {
        image: 'https://www.khaosod.co.th/wpapp/uploads/2017/12/Jay-Fai_preview.jpeg',
        title: 'ไข่เจียวปูสุดอู้ฟู่',
        des: 'ไข่เจียวปูสูตรต้นตำหรับ ขนาดเจ๊ไฝแกยังมาเรียนจับปูจากเรา',
        price: 200
        },
        {
        image: 'https://www.khaosod.co.th/wpapp/uploads/2017/12/Jay-Fai_preview.jpeg',
        title: 'ไข่เจียวปูสุดอู้ฟู่',
        des: 'ไข่เจียวปูสูตรต้นตำหรับ ขนาดเจ๊ไฝแกยังมาเรียนจับปูจากเรา',
        price: 200
        },
        {
        image: 'https://www.khaosod.co.th/wpapp/uploads/2017/12/Jay-Fai_preview.jpeg',
        title: 'ไข่เจียวปูสุดอู้ฟู่',
        des: 'ไข่เจียวปูสูตรต้นตำหรับ ขนาดเจ๊ไฝแกยังมาเรียนจับปูจากเรา',
        price: 200
        },
        {
        image: 'https://www.khaosod.co.th/wpapp/uploads/2017/12/Jay-Fai_preview.jpeg',
        title: 'ไข่เจียวปูสุดอู้ฟู่',
        des: 'ไข่เจียวปูสูตรต้นตำหรับ ขนาดเจ๊ไฝแกยังมาเรียนจับปูจากเรา',
        price: 200
        }
      ]
    }
  },
  methods: {
    showMember(a){
      this.show = a
    },
    addToCart(a){
      this.currentItem++
      this.cart.push(
        {
        food: a,
        id: this.id
      }
      )
      this.id++
    },
    totalPrice(){
      let total = 0
      let i = 0
      // while loop to calculate total prices
      while (i < this.cart.length){
        total += this.cart[i].food.price
        i++
      }
      return total
    },
    del(item){
      const stay = []
      for(let i=0 ;i<this.cart.length;i++){
        const current = this.cart[i]
        if (current.id !== item.id){
          stay.push(current)
        }
      } this.cart = stay
    } 
  },
  computed:{
    totalComPrice(){
      let total = 0
      let i = 0
      // while loop to calculate total prices
      while (i < this.cart.length){
        total += this.cart[i].food.price
        i++
      }
      return total
    },
    foodList(){
      const recommend = []
      const other =[]
      for (let i=0; i<this.food.length;i++){
        if(i<=1){
          recommend.push(this.food[i])
        } else {
          other.push(this.food[i])
        }
      }
      return {
        recommend: recommend,
        other: other
      }
    }
  },
  watch:{
    // totalComPrice(newValue){
    //   if (newValue === 200){
    //     alert('20')
    //   } else if(newValue === 400) {
    //     alert('50')
    //   } else if (newValue === 1000){
    //     alert('1000')
    //   }
    // }
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
    margin: 10px;
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
/* Highlight Menus */
  .menus{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
  }
  .menus-high-contain{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .hilight-meunu-boxes{
      display:flex;
      flex-direction: column;
      width: 550px;
      margin: 10px;
      height: 250px;
  }

  .hilight-meunu-boxes:hover{
      border-radius: 20px 0 ;
      box-shadow: 1px 1px 15px lightgray;
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
      height: 100%;
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

  /* Member */
  #member {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-content: center;
    align-items: center;
  }

  .other-menus{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 1200px;
}
.normal-meunu-boxes{
    display:flex;
    flex-direction: column;
    width: 250px;
    margin: 10px 15px;
}

.normal-menu-details{
    box-shadow: 1px 1px 5px lightgray;
    height: 60px;
    display: flex;
    flex-direction: column;
    height:150px;
    justify-content: space-between;
}

.normal-food-name{
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 150px;
}

.normal-food-name p{
    width: 90%;
    font-size: 10px;
    color: gray;
}

.normal-food-name h4{
    color: rgb( 205 131 131)
}

.normal-meunu-boxes img{
    width: 250px;
    height: 230px;
    border-radius: 20px 20px 0 0;
    object-fit:cover;
}

.normal-menu-details button{
    display: flex;
    justify-content: center;
    border: 1.5px solid crimson;
    height: 30px;
    width: 100%;
    background-color: white;
    align-items: center;
    font-weight: 900;
    color: crimson;
}

.normal-menu-details button:hover{
    border: 1px solid crimson;
    background-color: lightgray;
}
</style>