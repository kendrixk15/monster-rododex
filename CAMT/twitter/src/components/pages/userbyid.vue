<template>
  <div>
      <!-- {{this.$root.state.getUserId}}-->
      <!-- {{userList}} -->
      <div v-for="user in userList" :key="user._id">
           <div v-if="user.avatar!=='/avatars/undefined'">
               <div class="user-box">
                    <img :src="'https://camt-twitterapi.pair-co.com'+user.avatar" class="avatar">
                    <div class="user-info-box">
                        <div class="user-info">
                            @{{user.username}}
                        </div>
                        <div class="user-info">
                            {{user.firstname}}
                        </div>
                        <div class="user-info">
                            {{user.lastname}}
                        </div>
                        <div class="user-info">
                            Phone: {{user.phoneNumber}}
                        </div>
                        <div class="user-info">
                            Email: {{user.email}}
                        </div>
                        <div class="user-info">
                            Followings: {{user.followings.length}}
                        </div>
                        <div class="user-info">
                            Followers: {{user.followers.length}}
                        </div>
                    </div>
                </div>
           </div>
        </div>
        <div>
            <!-- {{userTweets}} -->
            <div v-for="tweet in userTweets" :key="tweet._id" class="tweet-containers">
               <div>
                   <div class="tweet-info-container">
                   <img :src="'https://camt-twitterapi.pair-co.com'+tweet.author.avatar" class="avatar" @click="getUser(tweet.author._id, tweet.author.username)"/>
                    <div class="author-name">@{{tweet.author.username}}</div>
                    <div class="author-date">Tweeted at: {{tweet.createdAt}}</div>
               </div>
             <div class="tweet-text">
                Says:
                {{tweet.text}}
             </div>
             <div class="tweet-likes">
                 <!-- เดี๋ยวเปลี่ยนคำว่า Likes เป็น icon ได้แล้วเวลา active ทำเป็นอีกสี -->
                 <button class="likes-button" @click="likeTweets(tweet._id)">Likes</button> {{tweet.likes.length}}
                 <button class="likes-button" @click="unlikeTweets(tweet._id)">Unlikes</button> 
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
            userTweets:[]
        }
    },
    mounted(){
        this.getUserProfile()
        this.getTweet()
    },
methods:{
    getUserProfile(){
        fetch(`https://camt-twitterapi.pair-co.com/users/${this.$root.state.getUserId}`,{
                method: "GET"
            }).then(Response=>Response.json())
            .then(data=>{
                console.log(data)
                this.userList.push(data)
            })
    },

    getTweet(){
        fetch(`https://camt-twitterapi.pair-co.com/tweets/${this.$root.state.getUserId}?offset=0&limit=20`)
        .then(Response=>{
            return Response.json()
        }).then(data=>{
            console.log(data)
            this.userTweets = data.data
        })
    }
}
}
</script>

<style>
.user-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 16px;
}
.user-box>img{
    margin-top: 8px;
    width: 250px;
    height: 250px;
    border-radius: 15%;
}
.user-info-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    margin: 16px;
    border-radius: 25px;
    padding: 16px;
    box-shadow: 0px 0px 3px #9147ff;

}
.user-info{
    margin: 8px 0;
}
</style>