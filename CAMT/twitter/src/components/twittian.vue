<template>
  <div>
      <div>
        <button @click="toggle" class="user-button">Hide No Avatar</button>
        <!-- {{userList}} -->
        <div v-for="user in userList" :key="user._id">
           <div v-if="user.avatar">
               <div class="twittian-box">
                    <img :src="'https://camt-twitterapi.pair-co.com'+user.avatar" class="avatar" @click="getUser(user._id, user.username)">
                    <div class="twittian-info-box" @click="getUser(user._id, user.username)">
                        {{user.firstname}}
                        @{{user.username}}
                    </div>
                    <button class="user-button" @click="follow(user._id, user.username)">Follow</button>
                    <button class="user-button" @click="unfollow(user._id, user.username)">Unfollow</button>
                </div>
           </div>
        </div>
        <div v-show="noAvatar===true">
            <div v-for="user in userList" :key="user._id">
           <div v-if="!user.avatar">
               <div class="twittian-box">
                    <img :src="'https://camt-twitterapi.pair-co.com'+user.avatar" class="avatar" @click="getUser(user._id, user.username)">
                    <div class="twittian-info-box" @click="getUser(user._id, user.username)">
                        {{user.firstname}}
                        @{{user.username}}
                    </div>
                    <button class="user-button" @click="follow(user._id, user.username)">Follow</button>
                    <button class="user-button" @click="unfollow(user._id, user.username)">Unfollow</button>
                </div>
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
            userList:[],
            id:this.$root.state.currentUserId,
            userId:'',
            noAvatar: false
        }
    },
    methods:{
        getUserList(){
            fetch('https://camt-twitterapi.pair-co.com/users',{
                method: "GET"
            }).then(Response=>Response.json())
            .then(data=>{
                console.log(data)
                this.userList = data
            })
        },

        follow(id, name){
            const URL = 'https://camt-twitterapi.pair-co.com'
            fetch(`${URL}/users/${id}/follows`,{
                method: "POST",
                headers:{
                    Authorization : `Bearer ${this.$root.state.token}`
                }
            }).then(Response=>{
                if(Response !== 400){
                    alert('Followed '+name)
                }
            })
        },

        unfollow(id, name){
            const URL = 'https://camt-twitterapi.pair-co.com'
            fetch(`${URL}/users/${id}/unfollows`,{
                method: "POST",
                headers:{
                    Authorization : `Bearer ${this.$root.state.token}`
                }
            }).then(Response=>{
                if(Response !== 400){
                    alert('Unfollowed '+name)
                }
            })
        },

        getUser(id, username){
            const URL = 'https://camt-twitterapi.pair-co.com'
            fetch(`${URL}/users/${id}`,{
                method: "GET"
            }).then(Response=> Response.json())
            .then(data=>{
                alert(username)
                this.$root.state.getUserId = data._id
                console.log(this.$root.state.getUserId)
                this.$router.push('/userbyid')
            })
        },

        toggle(){
            if(this.noAvatar==false){
                this.noAvatar = true
                } else {
                    this.noAvatar = false
                }
        }
    },
    mounted(){
        this.getUserList()
    }

}
</script>

<style>
.twittian-box{
    display: flex;
    margin: 32px 16px;
    color: black;
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.twittian-info-box{
    border-radius: 16px;
    width: 88px;
    padding: 8px;
    margin-left: 8px;
    color: white;
}

.user-button{
  background-color: #9147ff ;
  height: 32px;
  width: 24%;
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
  margin: 8px 4px;
}
.user-button:hover{
    box-shadow: 0px 0px 4px whitesmoke;
    cursor: pointer;
}
</style>