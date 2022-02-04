<template>
  <div class="register-body">
      <div class="register-container">
          <form @submit.prevent="editProduct()" class="regist-form">
              <span class="product-title">Update Product Details</span>
              <div class='input-box-regist'>
                  <label>New Name:</label>
                  <input type="text" v-model="update.name">
              </div>
              <div class='input-box-regist'>
                  <label>New Description:</label>
                  <input type="text" v-model="update.des">
              </div>
              <div class='input-box-regist'>
                  <label>New Price:</label>
                  <input type="text" v-model="update.price">
              </div>
              <div class='input-box-regist'>
                  <label>New Product Photo:</label>
                  <input type="file" @change="getPic">
              </div>
              <button class="regist-button" type="submit">Update Product</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            update:{
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
            this.photo = event.target.files[0]
        },
    editProduct(){
          const formData = new FormData()
            formData.append('name', this.update.name)
            formData.append('description', this.update.des)
            formData.append('price', this.update.price)
            formData.append('photo', this.update.photo)
          fetch(`https://camt-shopapi.pair-co.com/products/${this.$route.params.productId}`, {
              method: 'PUT',
              headers:{
                  Authorization: `Bearer ${this.$root.state.token}`
              },
              body: formData
          }).then(Response=>{
              console.log(Response)
              alert('Done!')
              this.$router.push('/shopdetail')
          }).catch(error=>{alert(error)})
      },
    }

}
</script>

<style>

</style>