<template>
  <div class="register-body">
      <div class="register-container">
          <form @submit.prevent="editShop()" class="regist-form">
              <span class="profile-title">Update Shop Details</span>
               <div class='input-box-regist'>
                  <label>New Shop Photo:</label>
                  <input type="file" @change="getPic">
              </div>
              <div class='input-box-regist'>
                  <label>New Shop Name:</label>
                  <input type="text" v-model="newName">
              </div>
              <div class='input-box-regist'>
                  <label>Description:</label>
                  <input type="text" v-model="newDes">
              </div>
              <div class='input-box-regist'>
              <!-- <label for="regis-cate">Email: </label>
              <input id="regis-cate" type="drop" v-model="regis.shopeDes"> -->
              <label for="regis-cate">Choose your shop category:</label>
                <select id="regis-cate" v-model="newCate">
                    <option>Cosmetic/Beauty</option>
                    <option>Toys</option>
                    <option>F/B</option>
                    <option>Home Applicances </option>
                    <option>Fashion/Clothes</option>
                    <option>Electric Devices</option>
                    <option>Sports</option>
                    <option>Travel</option>
                </select>                   
          </div>
              <button class="regist-button" type="submit">Update Shop</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
                newName:'',
                newDes:'',
                newCate:'',
                photo:null
        }
    },
methods:{
    getPic(event){
            console.log(event.target.files[0])
            this.photo = event.target.files[0]
        },
    editShop(){
          const formData = new FormData()
            formData.append('description', this.newDes)
            formData.append('photo', this.photo)
          fetch('https://camt-shopapi.pair-co.com/myshop', {
              method: 'PUT',
              headers:{
                  Authorization: `Bearer ${this.$root.state.token}`
              },
              body: formData
          }).then(Response=>{
              console.log(Response)
          }).catch(error=>{alert(error)})
      },
}
}
</script>

<style>

</style>