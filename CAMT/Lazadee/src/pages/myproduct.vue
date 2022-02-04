<template>
  <div class="main-product-body">
      <div class="single-product-container">
          <!-- Product -->
          <!-- {{this.$route.params.productId}} -->
          <!-- {{theProducts}} -->
          <div v-for="product in theProducts" :key="product._id" class="the-products">
                    <img :src="'https://camt-shopapi.pair-co.com'+product.photo">
                    <div class="the-product-detail">
                        <span class="the-name">{{product.name}}</span>
                        <span class="the-des">Description: {{product.description}}</span>
                        <span class="the-price">{{product.price}} Baht</span>
                        <span class="the-store" @click="goToShop(product.shop.id)">store: <span class="the-store-name">{{product.shop.name}}</span></span>
                        <div class="product-but-box">
                            <button class="product-button-delete" @click="deleteProduct">Delete</button>
                            <button class="product-button" @click="editProduct(product.id)">Edit</button>
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
            theProducts:[]
        }
    },
    methods:{
        getProduct(){
            const host = 'https://camt-shopapi.pair-co.com'
            fetch(`${host}/products/${this.$route.params.productId}`)
            .then(Response=>Response.json())
            .then(data=>{
                // console.log(data)
                this.theProducts.push(data)
                // data.forEach(product=>{
                //     this.products.push(product)
                // })
            }).catch(error=>console.log(error))
        },
        deleteProduct(){
            fetch(`https://camt-shopapi.pair-co.com/products/${this.$route.params.productId}`,{
                method:"DELETE",
                headers:{
                    Authorization:`Bearer ${this.$root.state.token}`
                }
            }).then(Response=>{
              console.log(Response)
              alert('Product Deleted')
              this.$router.push('/shopdetail')
          }).catch(error=>{alert(error)})
        },
        editProduct(productId){
            this.$router.push(`/editproduct/${productId}`)
        }
    },
    mounted(){
        this.getProduct()
    }

}
</script>

<style>
.main-product-body{
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 10;
}
.the-products{
    display: flex;
    justify-content: space-around;
    width: 100%;
}
.the-product-detail{
    display: flex;
    width: 500px;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 32px;
}
.the-products>img{
    width: 512px;
    height: 512px;
    object-fit: cover;
    border-radius: 56px;
}
.single-product-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid black;
    width: 90%;
    margin-top: 16px;
    padding: 16px;
}
.product-button{
    width: 100%;
    height: 100%;
    margin: 2px 4px;
}
.product-button:hover, .product-button-delete:hover{
    box-shadow: 0px 0px 5px lightgray;
}
.product-button-delete{
    color: crimson;
    width: 80%;
    height: 100%;
    margin: 2px 4px;
}
.product-but-box{
    display: flex;
}
.the-name{
    font-size: 64px;
    font-weight: 700;
}
.the-des{
    font-size: 24px;
    color: gray;
}
.the-price{
    font-size: 24px;
    font-weight: 700;
    color: red;
}
.the-store{
    font-size: 24px;
}
.the-store-name{
    font-size: 24px;
    color: red;
}

@media screen and (max-width: 767px) {
    .the-products>img{
    width: 256px;
    height: 256px;
    object-fit: cover;
    border-radius: 56px;
}
}
</style>