<template>
  <div>
      <div class="edit-avatar-container">
          Change Avatar
          <form @submit.prevent="upNewAvatar()">
             <div class="edit-avatar-box">
                  <input type="file" @change="editAvatar"/>
              <button class="avatar-button">Save change</button>
             </div>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            newAvatar:null
        }
    },
    methods:{
        upNewAvatar(){
            const formData = new FormData()
            formData.append('avatar', this.newAvatar)
            fetch('https://camt-twitterapi.pair-co.com/me/avatar',{
                method: "PUT",
                headers:{
                    Authorization: `Bearer ${this.$root.state.token}`
                },
                body: formData
            }).then(Response=>{
                if(Response <300){
                    alert('Avatar Updated')
                }
            }).catch(error=>{
                alert(error)
            })
        },
        editAvatar(event){
            this.newAvatar = event.target.files[0]
        }
    }

}
</script>

<style>
.edit-avatar-container{
    display: flex;
    height: 160px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.edit-avatar-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}
.avatar-button{
    background-color: #9147ff ;
  height: 32px;
  width: 44%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 12px;
  border: none;
  /* box-shadow: 0px 0px 2px whitesmoke; */
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 16px;
}

</style>