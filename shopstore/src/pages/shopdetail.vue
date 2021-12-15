<template>
  <div class="profile-main-body">
    <!-- shop profile -->
    <div  class="my-profile-container">
      <!-- {{myShop}}
          {{myProducts}} -->
      <!-- {{shopID}} -->
      <div><span class="profile-title">Profile</span></div>
      <div class="my-profile-box">
        <div v-for="me in myShop" :key="me._id" class="my-profile-detail">
          <img :src="'https://camt-shopapi.pair-co.com' + me.photo" />
          <span class="profile-details-name">{{ me.name }}</span>
          <span class="profile-details" >Category: {{ me.category }}</span>
          <span class="profile-details">About shop: {{ me.description }}</span>
          <span class="profile-details">Contact: {{ me.email }}</span>
        </div>
        <div>
          <button class="pro-but" @click="editPage">Edit Shop</button>
          <button class="pro-but" @click="logOut">Sign Out</button>
          <button class="pro-but" @click="deleteShop">Delete Shop</button>
          
        </div>
      </div>
    </div>
    <hr />
    <!-- all products list -->
    <div class="my-product-container">
        <span class="product-title"> Products </span>
        <div class="my-product-box">
            <div class="addmore-box">
                <button class="addmore-but" @click="newProduct"> Add more items</button>
            </div>
            <div v-for="product in myProducts" :key="product.id" class="my-products">
                <img :src="'https://camt-shopapi.pair-co.com' + product.photo" @click="goToProduct(product.id, product.shop)" />
                <span class="name" @click="goToProduct(product.id, product.shop)">{{ product.name }}</span>
                <span class="des">{{ product.description }}</span>
                <span class="price">{{ product.price }} Baht</span>
                <!-- <button v-if="product.shop===shopID"> Del </button>
                <button v-if="product.shop===shopID"> Edit Details </button> -->
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myShop: [],
      shopID:'',
      myProducts: [],
      productLimit: 5,
      productPage: 1,
    };
  },
  methods: {
    getMyShop() {
      fetch("https://camt-shopapi.pair-co.com/myshop", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.$root.state.token}`,
        },
      })
        .then((Response) => Response.json())
        .then((data) => {
          console.log(data);
          this.myShop.push(data);
          this.shopID = data._id
        })
        .catch((err) => console.log(err));
    },
    getMyProducts() {
      const host = "https://camt-shopapi.pair-co.com";
      fetch(
        `${host}/shops/${this.$root.state.shopIds}/products/?limit=${this.productLimit}&page=${this.productPage}`
      )
        .then((Response) => Response.json())
        .then((data) => {
          console.log(data.data);
          this.myProducts = data.data;
          // data.forEach(product=>{
          //     this.products.push(product)
          // })
        })
        .catch((error) => console.log(error));
    },
    logOut(){
        this.$router.push('/main')
        fetch('https://camt-shopapi.pair-co.com/logout', {
            method: 'POST',
                headers:{
                    Authorization : `Bearer ${this.$root.state.token}`,
                    'content-type':'application/json'
                } 
            }).then(Response=>{
                console.log(Response)
                this.$root.state.token = null
                this.$root.state.shopIds = null
            })
            alert('You are logged out')
            
    },
    newProduct(){
      this.$router.push('/newproduct')
    },
    goToProduct(productId, shopId){
        if(shopId!==this.$root.state.shopIds){
        this.$router.push(`/products/${productId}`)
        } else {
            this.$router.push(`/myproducts/${productId}`)
        }
    },
    editPage(){
      this.$router.push('/editshop')
    },
    deleteShop(){
      alert('Coming Soon')
    }
  },
  mounted() {
    this.getMyShop();
    this.getMyProducts();
  },
};
</script>

<style>
.profile-title, .product-title{
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  align-self: center;
  margin: 4px 0;
}
.profile-main-body {
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-height: 100vh;
  z-index: 10;
}
.my-profile-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.my-profile-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    margin: 32px 16px;
    background-color: lightgray;
    padding: 8px;
    border-radius: 16px;
}
.my-profile-detail{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.my-profile-detail>img{
  width: 360px;
  height: 360px;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 32px;
}
.my-products {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  align-items: center;
  margin: 0 8px;
  /* flex: 1; */
  margin: 4px 8px;
  line-height: 28px;
}
.my-products> img{
    width: 128px;
    height: 128px;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 32px;
}
.my-product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 4;
}
.my-product-box{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 95%;
    padding: 8px;
    margin-top: 32px;
    border-radius: 16px;
    background-color: lightgray;
}
.profile-details{
  color:#000 ;
  margin: 8px 0;
  font-size: 18px;
}
.profile-details-name{
  font-weight: 700;
  font-size: 24px;
}
.pro-but{
  height: 100%;
}
.addmore-box{
  /* margin-left: 138px; */
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 88px;
  
}
.addmore-but{
  width: 128px;
  height: 128px;
  border-radius: 32px;
  object-position: 50% 50%;
}
.addmore-but:hover, .my-products>img:hover{
  box-shadow: 0px 0px 5px gray;
}
</style>