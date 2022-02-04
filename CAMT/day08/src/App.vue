<template>
  <div>
    <div id='header'>
      <button @click="show(1)">Register</button>
      <button @click="show(2)">Menu</button>
      <button @click="show(3)">Cart</button>
    </div>
    <hr>
    <div v-if='showTab===1' id='register'>
      <form @submit.prevent="register()">
        <label id="cusId">ID</label>
        <input type="text" id='cusId' v-model="form.id" required> 
        <br>
        <label id="pass">Name</label>
        <input type="text" id='name' v-model="form.name" required> 
        <br>
        <button type="submit">Register</button>
      </form>
      {{id}}
      {{name}}
      {{customer}}
    </div>
    <div  v-if='showTab === 2' id=menus>
      <div>
        Customer No.: <input type="text" v-model="customerID">
        {{customerID}}
        <div class="hilight-meunu-boxes">
            <img :src='food[0].image' />
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form: {
          id:null,
          name: null,
          },
      customer:[],
      customerID:[],
      showTab: 1,
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
      ]
    }
  },
  methods:{
    show(a){
      this.showTab = a
    },
    register(){
      const customer = {
        id:this.form.id,
        name:this.form.name,
        cart: []
      }
      this.customer.push(customer)
      alert('Now you can buy')
      this.form = {
        id: null,
        name: null,
      }
    },
    addToCart(food){
      const customer = this.find()
      if(customer){
        customer.cart.push(food)
        alert(`${food.title} added to cart`)
      } else {
        alert('User not found...')
      }

    },
    find(){
      for(let i=0;i<this.customer.length;i++){
        const customer = this.customer[i]
        if(customer.id === this.customerID){
          return customer
        } 
      }
      return null
    }
  }
}
</script>

<style>
  img{
    width: 150px;
  }
</style>