<template>
  <div>
      <section class="cover-photo">
          Chirstmas is coming!
        </section>  
      <div class="main-body">
        <div class="upper-body">
            <!-- Nav-bar-->
            <div class="nav-bar">
                <div class="name-box">
                    <span>Lazadee!</span> 
                </div>
                <div class="nav-shop">
                    <span @click="toMyShop">My Shop</span>
                </div>
                <div class="nav-data" @click="comingSoon('Data insight')">
                    <span>Data Insignht</span>
                </div>
                <div class="nav-ads" @click="comingSoon('Ads center')">
                    <span>Ads center</span>
                </div>
                <div class='search-box'>
                    <label for="searchInput">Search:</label>
                    <br/>
                    <input type="text">
                </div>
            </div>  
                <!-- all product list  by shop-->
            <div class="hilight-product-list">
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
        <div class="lower-body">
            <span class="profile-title">Stores</span>
                <!-- all shop list -->
            <div class="all-shoplist-box">
                
                <!-- {{shopList}} -->
                <div v-for="shop in shopList" :key="shop._id" class="shoplist-box"> 
                    <img v-if="shop.photo" :src="'https://camt-shopapi.pair-co.com'+shop.photo" @click="goToShop(shop.id)">
                    <img v-else :src="'https://cdn.icon-icons.com/icons2/1706/PNG/512/3986701-online-shop-store-store-icon_112278.png'" @click="goToShop(shop.id)">
                    <span class="name" @click="goToShop(shop.id)">{{shop.name}}</span>
                    <span class="cate">Category: {{shop.category}}</span>
                    <span class="des">{{shop.description}}</span>
                </div>
            </div>
            <button @click="loadMoreShop">Load More</button>
        </div>
        <footer>
            <div class="footer-box">
                Lazadee 2021. All rights reserved
            </div>
            <div class="footer-box">
                <div class="footer-text">
                    Career
                </div>
                <div class="footer-text">
                    Contact Us
                </div>
            </div>
        </footer>
      </div>
  </div>
</template>

<script>
export default {

data(){
    return{
        products:[],
        productPage:1,
        productLimit:5,
        shopPage:1,
        shopList:[],
        shopId: this.$root.state.shopIds,
        totalProducts:null,
        avatar:'https://www.kindpng.com/picc/m/235-2350524_store-vector-icon-retail-store-icon-png-transparent.png'
    }
},
methods:{
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
    getAllShop(){
        const host = 'https://camt-shopapi.pair-co.com'
        fetch(`${host}/shops/?limit=15&page=${this.shopPage}`)
        .then(Response=>Response.json())
        .then(data=>{
            console.log(data)
            // this.shopList = data.data
            data.data.forEach(shop=>{
                this.shopList.push(shop)
            })
        }).catch(error=>console.log(error))
    },
    goToShop(shopId){
        if(shopId!==this.$root.state.shopIds){
        this.$router.push(`/shopdetail/${shopId}`)
        } else {
            this.$router.push('/shopdetail')
        }
    },
    goToProduct(productId, shopId){
        if(shopId!==this.$root.state.shopIds){
        this.$router.push(`/products/${productId}`)
        } else {
            this.$router.push(`/myproducts/${productId}`)
        }
    },
    comingSoon(feature){
        alert(`Sorry we are working on ${feature} feature! Hold on tighty!`)
    },
    toMyShop(){
        if (this.$root.state.token){
        this.$router.push('/shopdetail')
    } else{
        alert('Please log in to enter your shop')
    }
    },
},
mounted(){
    this.getAllProducts()
    this.getAllShop()
}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;700&display=swap');
@import url('https://css.gg/chevron-right.css');
@import url('https://css.gg/chevron-left.css');
.main-body{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    max-width: 100%;
    margin-top: 320px;
    z-index: 10;
}
/* img{
    max-width: 120px;
    max-height: 120px;
    object-fit: cover;
} */
.upper-body{
    display: flex;
    /* min-width: 70%;
    max-width: 100%; */
    width: 70%;
    flex-direction: row;
    justify-content: space-between;
    /* border: 1px solid #000; */
    height: 20rem;
    z-index: 10;
    /* margin-bottom: 56px ; */
}
.replace-pic{
    background-color: #fff;
}

.nav-bar{
    flex: 1;
    /* border: 1px solid #000; */
}
.hilight-product-list{
    flex: 3;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100px;
    /* flex-wrap: wrap; */
    overflow: hidden;
    /* margin-top: 8px; */
    padding: 4px;
    background: linear-gradient(180deg, #0050A0 20%, #12A8e0 100%);
    color: #fff ;
}
.hilight-products{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;
    align-items: center;
    margin: 0 8px;
    flex:1;
    margin: 2px 4px 2px 4px;
    padding-bottom: 4px;
    line-height: 28px;
    border-radius: 24px;
}
.hilight-products:hover{
    box-shadow: 0px 0px 5px lightgray;
    border-radius: 24px;
}
.hilight-products > img{
    width: 152px;
    height: 152px;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 16px;
}

.lower-body{
    /* border: 1px solid #000; */
    width: 70%;
    min-height: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgray;
    z-index: 10;
    margin-bottom: 16px;
    padding-bottom: 16px;
}
.all-shoplist-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 90%;
}
.shoplist-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* align-self: center; */
    width: 15%;
    max-height: 250px;
    margin: 8px 16px;
}
.shoplist-box:hover{
    box-shadow: 0px 0px 10px gray;
    border-radius: 25px;
}
.shoplist-box > img{
    width: 128px;
    height: 128px;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 32px;
}

/* button */
button{
    border: none;
    border-radius: 16px;
    padding: 4px;
    color: #0050A0;
    height: 20%;
    align-self: center;
}
button:hover{
    box-shadow: 0px 0px 5px lightgray;
}


/* ตกแต่งตัวอักษร */
.name{
    font-size: 24px;
    margin-top: 8px;
    color: #e5002b;
}
.des{
    color: #fff;
}
.cate{
    color: #fff;
    font-weight: 500;
}
.price{
    font-size: 18px;
    font-weight: 500;
}
.nav-shop{
    width: 100%;
    background-color:#e5002b ;
    color: #fff;
    font-size: 36px;
}
.nav-shop>span{
    font-size: 36px;
}
.nav-data{
    width: 100%;
    background-color: #0050a0;
    color: #fff;
    font-size: 36px;
}
.nav-data>span{
    font-size: 36px;
}
.nav-ads{
    width: 100%;
    background-color: #12a8e0;
    color: #fff;
    font-size: 36px;
}
.nav-ads>span{
    font-size: 36px;
}
.name-box{
    width: 100%;
    /* background-color: #fff; */
    color: #fff;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.name-box>span{
    font-size: 42px;
}
.search-box{
    width: 100%;
    /* background-color: #fff; */
    color: #000;
    font-size: 24px;
}
.nav-shop:hover, .nav-data:hover, .nav-ads:hover{
    box-shadow: 0px 0px 1px lightgray;
    cursor: pointer;
}
footer{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    background-color: #fff;
}

.footer-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #0050A0;
    align-items: flex-start;
}
.footer-text{
    margin-right: 16px;
}
</style>