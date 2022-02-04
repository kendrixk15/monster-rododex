<template>
  <div class="profile-main-body">
    <!-- shop profile -->
    <div  class="my-profile-container">
      <!-- {{myShop}}
          {{myProducts}} -->
      <!-- {{shopID}} -->
      <div class="my-profile-box">
        <div v-for="me in myShop" :key="me._id" class="my-profile-detail">
          <img :src="'https://camt-shopapi.pair-co.com' + me.photo" />
          <br />
          <span>{{ me.name }}</span>
          <br />
          <span>Category: {{ me.category }}</span>
          <br />
          <span>{{ me.description }}</span>
          <br />
          <span>Contact: {{ me.email }}</span>
        </div>
        <button>Edit Shop</button>
        <button>Sign Out</button>
      </div>
    </div>
    <hr />
    <!-- all products list -->
    <div class="my-product-container">
        <span> Products </span>
        <div class="my-product-box">
            <div>
                <button> Add more items</button>
            </div>
            <div v-for="product in myProducts" :key="product.id" class="my-products">
                <img :src="'https://camt-shopapi.pair-co.com' + product.photo" />
                <span class="name">{{ product.name }}</span>
                <span class="des">{{ product.description }}</span>
                <span class="price">{{ product.price }} Baht</span>
                <button v-if="product.shop===shopID"> Del </button>
                <button v-if="product.shop===shopID"> Edit Details </button>
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
          console.log(data);
          this.myProducts = data;
          // data.forEach(product=>{
          //     this.products.push(product)
          // })
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getMyShop();
    this.getMyProducts();
  },
};
</script>

<style>
.profile-main-body {
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-height: 100vh;
}
.my-profile-container {
    flex: 1;
}
.my-profile-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    margin: 8px 0;
}
.my-profile-detail>img{
  width: 360px;
  height: 360px;
  object-fit: cover;
  object-position: 50% 0;
  border-radius: 32px;
}
.my-products {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  align-items: center;
  margin: 0 8px;
  flex: 1;
  margin: 4px 8px;
  line-height: 28px;
}
.my-products> img{
    width: 128px;
    height: 128px;
    object-fit: cover;
    object-position: 70% 0;
    border-radius: 32px;
}
.my-product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 4;
}
.my-product-box{
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 32px;
}
</style>