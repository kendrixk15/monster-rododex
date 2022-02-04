<template>
  <div class="register-body">
      <div class="register-container">
          <!-- {{product}} -->
          <form @submit.prevent="createProduct()" class="regist-form">
              <div >
                <div class='input-box-regist'>
                    <label>Product Name:</label>
                    <input type="text" v-model="product.name">
                </div>
                <div class='input-box-regist'>
                    <label>Product Description:</label>
                    <input type="text" v-model="product.des">
                </div>
                <div class='input-box-regist'>
                    <label>Price:</label>
                    <input type="number" v-model="product.price">
                </div>
                <div class='input-box-regist'>
                    <label>Photo: (Optional) </label>
                    <input type="file" @change="getPic">
                </div>
                <button class="regist-button" type="submit">Create new product</button>
              </div>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            product:{
                name:'',
                des:'',
                price:null,
                photo:null
            }
        }
    },
methods:{
    getPic(event){
            console.log(event.target.files[0])
            this.product.photo = event.target.files[0]
        },
        createProduct(){
          const formData = new FormData()
            formData.append('name', this.product.name)
            formData.append('description', this.product.des)
            formData.append('price', this.product.price)
            formData.append('photo', this.product.photo)
          fetch('https://camt-shopapi.pair-co.com/products', {
              method: 'POST',
              headers:{
                  Authorization: `Bearer ${this.$root.state.token}`
              },
              body: formData
          }).then(Response=>{
              console.log(Response)
                  alert('Product Created!')
                  this.$router.push('/shopdetail')
          }).catch(error=>{alert(error)})
      },
}
}
</script>

<style>

</style>