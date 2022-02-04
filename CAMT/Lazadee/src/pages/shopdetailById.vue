<template>
  <div class="profile-main-body">
    <!-- shop profile -->
    <div  class="my-profile-container">
      <!-- {{myShop}} -->
          <!-- {{myProducts}} -->
      <!-- {{shopID}} -->
      <!-- {{this.$route.params.shopId}} -->
      <div><span class="profile-title">Profile</span></div>
      <div class="my-profile-box">
        <div v-for="me in myShop" :key="me._id" class="my-profile-detail">
          <img v-if="me.photo" :src="'https://camt-shopapi.pair-co.com' + me.photo" />
          <img v-else :src="'https://cdn.icon-icons.com/icons2/1706/PNG/512/3986701-online-shop-store-store-icon_112278.png'">
          <span class="profile-details-name">{{ me.name }}</span>
          <span class="profile-details">Category: {{ me.category }}</span>
          <span class="profile-details">{{ me.description }}</span>
          <span class="profile-details">Contact: {{ me.email }}</span>
        </div>
      </div>
    </div>
    <hr />
    <!-- all products list -->
    <div class="my-product-container">
        <span class="product-title"> Products </span>
        <div class="my-product-box" v-if="myProducts.length>0">
            <div v-for="product in myProducts" :key="product.id" class="my-products">
                <img v-if="product.photo" :src="'https://camt-shopapi.pair-co.com' + product.photo" @click="goToProduct(product.id, product.shop)" />
                <img v-else :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z3J4hLLYAA_wn5-Z7WeQDEF9WPIDH5LVLxCAR96hTBSHyNAECRcl6oVQFuZsvpB37PQ&usqp=CAU'" class="replace-pic">
                <span class="name" @click="goToProduct(product.id, product.shop)">{{ product.name }}</span>
                <span class="des">{{ product.description }}</span>
                <span class="price">{{ product.price }} Baht</span>
                <!-- <button v-if="product.shop===shopID"> Del </button>
                <button v-if="product.shop===shopID"> Edit Details </button> -->
            </div>
        </div>
        <div class="my-product-box-empty" v-else>
            This shop is empty. Please come back later
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
    getShopByIds() {
      fetch(`https://camt-shopapi.pair-co.com/shops/${this.$route.params.shopId}`)
        .then((Response) => Response.json())
        .then((data) => {
          console.log(data);
          this.myShop.push(data);
        })
        .catch((err) => console.log(err));
    },

    getMyProducts() {
      const host = "https://camt-shopapi.pair-co.com";
      fetch(
        `${host}/shops/${this.$route.params.shopId}/products`
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
    goToProduct(productId, shopId){
        if(shopId!==this.$root.state.shopIds){
        this.$router.push(`/products/${productId}`)
        } else {
            this.$router.push(`/myproducts/${productId}`)
        }
    }
  },
  mounted() {
    this.getShopByIds();
    this.getMyProducts();
  },
};
</script>

<style>
.my-product-box-empty{
  display: grid;
    justify-content: center;
    flex-wrap: wrap;
    width: 95%;
    font-size: 48px;
    padding: 8px;
    margin-top: 26px;
    border-radius: 16px;
    color: gray;
    background-color: lightgray;
}
</style>