<template>
  <div class="profile-body">
      <div class="profile-container">
          Profile
          <div>
            <div class="profile-box">
                <img :src="'https://camt-twitterapi.pair-co.com'+profile.avatar" class="profile-avatar" @click="getUser(profile.id)"/>
                <div class="profile-details">
                    @{{profile.username}}
                    <br/>
                    {{profile.firstname}}
                    <!-- {{profile.id}} -->
                </div>
                <div class="follower-box">
                   <!-- Followings: เอา id ไป get list user by id เพื่อเอา no. of following มา -->
                    <!-- <div v-for="item in meList" :key="item._id">
                       Followers {{item.followers}}
                    </div> -->
                    Followers: {{meList.followers.length}}
                    Followings: {{meList.followings.length}}
                </div>
            </div>
          </div>
          <div class="but-container">
            <router-link to="/editprofile" class="but-pro">Edit Profile</router-link>
            <button class="but-pro" @click="logout">Log Out</button>
            <button class="but-pro" @click="deleteAcc">Delete</button>
          </div>
      </div>
  </div>
</template>

<script>
// import store from '../store'
export default {
data(){
    return{
        profile:{
            firstname:'',
            lastname: '',
            id:'',
            email:'',
            phone:'',
            avatar:'',
            followers: null,
            followings:null
        },
        id:null,
        meList:[]
    }
},
methods:{
    getProfile(){
        fetch('https://camt-twitterapi.pair-co.com/me',{
            method: "GET",
            headers:{
                Authorization: `Bearer ${this.$root.state.token}`,
                'content-type':'application/json'
            },
        }).then(Response => Response.json())
            .then(data =>{
                if(data.deleted === false){
                console.log(data)
                this.profile.id = data._id
                this.profile.username = data.username
                this.profile.firstname = data.firstname
                this.profile.lastname = data.lastname
                this.profile.email = data.email
                this.profile.phone = data.phoneNumber
                this.profile.avatar = data.avatar
                } else {
                    alert('User not found')
                    return 
                }
            })
            .catch(error=>{console.log(error)})
    },
    logout(){
        fetch('https://camt-twitterapi.pair-co.com/logout', {
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
             this.$router.push('/login')
    },

    deleteAcc(){
        fetch('https://camt-twitterapi.pair-co.com/me', {
            method: 'DELETE',
                headers:{
                    Authorization : `Bearer ${this.$root.state.token}`,
                } 
            }).then(Response=>{
                console.log(Response)
            })
            alert('User Deleted')
            this.$root.state.token = null
             this.$router.push('/login')
    },

    getMe(){
            const URL = 'https://camt-twitterapi.pair-co.com'
        fetch(URL+'/users/61ab58f5ced7e5ab19b26e85',{
            method: "GET",
    }).then(Response=>Response.json())
            .then(data=>{
                console.log(data)
                this.meList =data
                console.log(this.meList)
            }).catch(error=>console.log(error))
    },
    getUser(id){
            const URL = 'https://camt-twitterapi.pair-co.com'
            fetch(`${URL}/users/${id}`,{
                method: "GET"
            }).then(Response=> Response.json())
            .then(data=>{
                this.$root.state.getUserId = data._id
                console.log(this.$root.state.getUserId)
                this.$router.push('/userbyid')
            })
        },
},
mounted(){
    this.getProfile()
    this.getMe()
}
}
</script>

<style>
*{
    color: white;
}
.profile-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px 0;
    padding: 0 16px;
}
.profile-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px 0;
}

.profile-avatar{
    width: 160px;
    border-radius: 50%;
}
.profile-details{
    display: flex;
    margin: 16px 0;
    
}
.but-pro{
    background-color: #9147ff ;
  height: 40px;
  width: 132%;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  border-radius: 12px;
  border: none;
  box-shadow: 0px 0px 2px whitesmoke;
  margin: 0 4px;
  padding: 16px;
}
.but-pro:hover{
    cursor: pointer;
    box-shadow: 0px 0px 4px whitesmoke;
}
.but-container{
    display: flex;
    width: 80%;
    justify-content: space-between;
}
.follower-box{
    margin: 16px 0;
    font-size: 14px;
}
</style>