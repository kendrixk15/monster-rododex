<template>
  <div class="main-product-body">
      <span class="profile-title">Product</span>
      <div class="single-product-container">
          <!-- Product -->
          <!-- {{this.$route.params.productId}} -->
          <!-- {{theProducts}} -->
          <div v-for="product in theProducts" :key="product._id" class="the-products">
                    <img v-if="product.photo" :src="'https://camt-shopapi.pair-co.com'+product.photo">
                    <img v-else :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z3J4hLLYAA_wn5-Z7WeQDEF9WPIDH5LVLxCAR96hTBSHyNAECRcl6oVQFuZsvpB37PQ&usqp=CAU'" class="replace-pic">
                    <div class="the-product-detail">
                        <span class="the-name">{{product.name}}</span>
                        <span class="the-des">Description: {{product.description}}</span>
                        <span class="the-price">{{product.price}} Baht</span>
                        <span class="the-store" @click="goToShop(product.shop.id)">store: <span class="the-store-name">{{product.shop.name}}</span></span>
                    </div>
          </div>
      </div>
      <span class="profile-title">Discovery neibor's product</span>
      <div class="inproduct-hilight-product-list">
                <!-- product list by shop -->
                <!-- {{products}} -->
                <button @click="backPage"><i class="gg-chevron-left"/></button>
                <div v-for="product in products" :key="product._id" class="hilight-products">
                    <img v-if="product.photo" :src="'https://camt-shopapi.pair-co.com'+product.photo" @click="goToProduct(product.id, product.shop)">
                    <img v-else :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z3J4hLLYAA_wn5-Z7WeQDEF9WPIDH5LVLxCAR96hTBSHyNAECRcl6oVQFuZsvpB37PQ&usqp=CAU'" @click="goToProduct(product.id, product.shop)" class="replace-pic">
                    <span class="name" @click="goToProduct(product.id, product.shop)">{{product.name}}</span>
                    <span class="des">{{product.description}}</span>
                    <span class="price">{{product.price}} Baht</span>
                </div>
                <button @click="nextPage"><i class="gg-chevron-right"/></button>
            </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            theProducts:[],
            products:[],
            productPage:1,
            productLimit:5,
            shopId: this.$root.state.shopIds,
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
        loadMoreShop(){
        this.shopPage++
        this.getAllShop()
    },
    nextPage(){
        //แก้ต่อเพื่อทำให้ถ้ามันหมดแล้วจะ กด next ต่อไปไม่ได้
        this.productPage++
        this.getAllProducts()
    }
    ,
    backPage(){
        if(this.productPage>1){
        this.productPage--
        this.getAllProducts()
        } else {
            return
        }
    },
    getAllProducts(){
        const host = 'https://camt-shopapi.pair-co.com'
        fetch(`${host}/products/?limit=${this.productLimit}&page=${this.productPage}`)
        .then(Response=>Response.json())
        .then(data=>{
            // console.log(data)
            this.products = data.data
            this.totalProducts = data.total
            // data.forEach(product=>{
            //     this.products.push(product)
            // })
        }).catch(error=>console.log(error))
    },
    },
    mounted(){
        this.getProduct()
        this.getAllProducts()
    }

}
</script>

<style>
.main-product-body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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
    /* border: 1px solid black; */
    width: 90%;
    margin-top: 16px;
    padding: 16px;
    background-color: lightgray;
    border-radius: 25px;
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

.inproduct-hilight-product-list{
    flex: 3;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 90%;
    /* flex-wrap: wrap; */
    overflow: hidden;
    /* margin-top: 8px; */
    border-radius: 16px;
    padding: 4px;
    background: linear-gradient(180deg, #0050A0 20%, #12A8e0 100%);
    color: #fff ;
    margin-top: 40px;
}
</style>