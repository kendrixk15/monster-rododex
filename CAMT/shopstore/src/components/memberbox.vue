<template>
  <div class="member-container">
      <!-- Member! -->
      <!-- {{myShop}} -->
      <div v-for="me in myShop" :key="me._id" class="member-box">
      <img :src="'https://camt-shopapi.pair-co.com/'+me.photo" class="avatar" @click="goToProfile">
      <span>{{me.name}}</span>
      </div>
      <button @click="logOut" class="log-button">Log out</button>
  </div>
</template>

<script>
export default {
data(){
    return{
        myShop:[]
    }
},
methods:{
    getMyShop(){
        fetch('https://camt-shopapi.pair-co.com/myshop',{
            method: "GET",
            headers:{
                Authorization: `Bearer ${this.$root.state.token}`
            }
        }).then(Response=>Response.json())
        .then(data=>{
            console.log(data)
            this.myShop.push(data)
            this.$root.state.shopIds = data._id
        }).catch(err=>(console.log(err)))
    },
    goToProfile(){
        this.$router.push('/shopdetail')
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
            })
            alert('You are logged out')
            this.$root.state.token = null
            this.$root.state.shopIds = null
    }
},
mounted(){
    this.getMyShop()
}
}
</script>

<style>
.member-container{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.member-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-right: 16px; */
    margin-top: 4px;
    margin-bottom: 4px;
    width: 120px;
}
.member-box>img{
    width: 56px;
    height: 56px;
    object-fit: cover;
    object-position: 50% 0;
    border-radius: 40%;
}
.log-button{
    height: 50%;
    margin-bottom: 16px;

}

</style>