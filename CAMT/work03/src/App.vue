<template>
  <div id='main-box'>
    <div id='image'>
      <img :src='phoneImg'>
    </div>
    <div id='details'>
        <div class='details-boxes'>  
          <h1>{{showPrice}} Baht</h1>
          <h3>Choose Color: </h3>
          <button @click="toBlue()">Blue</button>
          <button @click="toBlack()">Black</button>
          <button @click="toPink()">Pink</button>
        </div>
        <div class='details-boxes'>
          <h3>Choose Model: </h3>
          <button @click="toMini()">iPhone 13 Mini</button>
          <button @click="toNormal()">iPhone 13 </button>
          <button @click="toPro()">iPhone 13 Pro</button>
          <button @click="toProMax()">iPhone 13 Pro Max</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phoneImg: 'https://cf.shopee.co.th/file/11477dbf91bffaac2f8070e8fab169e1' ,
      showPrice: 'Price',
      images: {
          blue: 'https://cf.shopee.co.th/file/ffd4c8e1f508d728831734c3fe47c1d4',
          pink: 'https://cf.shopee.co.th/file/4a745a1c651cecaeeb1c3aa9ff0771da',
          black: 'https://cf.shopee.co.th/file/9cca107f9632c1f0bfb244c746150350',
            },
      prices: {
          normal: 500,
          mini: 450,
          pro: 750,
          proMax: 900,
            }
    }
  },
  methods:{
    toBlue(){
      this.phoneImg = this.images.blue
    },
    toBlack(){
      this.phoneImg = this.images.black
    },
    toPink(){
      this.phoneImg = this.images.pink
    },

    toMini(){
      this.showPrice = this.prices.mini
    },
    toNormal(){
      this.showPrice = this.prices.normal
    },
    toPro(){
      this.showPrice = this.prices.pro
    },
     toProMax(){
      this.showPrice = this.prices.proMax
    }
  }
}
</script>

<style>
  button{
    border-radius: 5px;
    margin: 5px 3px;
  }
  #image img{
    width: 450px;
    margin-right: 20px;
  }
  #main-box{
    display: flex;
    justify-content: center;
  }

  .details-boxes {
    width: 300px;
  }
</style>