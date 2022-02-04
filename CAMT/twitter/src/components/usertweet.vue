<template>
  <div>
      <div>
          <!-- {{tweets}} -->
          <div v-for="tweet in tweets" :key="tweet._id" class="tweet-containers">
               <div class="tweet-info-container">
                   <img :src="'https://camt-twitterapi.pair-co.com'+tweet.author.avatar" class="avatar" @click="getUser(tweet.author._id, tweet.author.username)"/>
                    <div v-if="!tweet.author.deleted" class="author-name">@{{tweet.author.username}}</div>
                    <div v-else class="author-name">Deleted Account</div>
                    <!-- {{tweet.author.deleted}} -->
                    <div class="author-date">Tweeted at: {{tweet.createdAt}}</div>
               </div>
             <div class="tweet-text">
                Says:
                {{tweet.text}}
                <button v-if="tweet.author.id" class="button">Delete</button>
             </div>
             <div class="tweet-likes">
                 <!-- เดี๋ยวเปลี่ยนคำว่า Likes เป็น icon ได้แล้วเวลา active ทำเป็นอีกสี -->
                 <button class="likes-button" @click="likeTweets(tweet._id)">Likes</button> {{tweet.likes.length}}
                 <button class="likes-button" @click="unlikeTweets(tweet._id)">Unlikes</button> 
             </div>
          </div>
          <button class="button" @click="loadMore">Load More</button>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        tweets:[],
        pageNum:0,
        limit:5
    }
},
methods:{
    loadMore(){
        this.pageNum++
        this.getAllTweet()
    }
    ,
    getAllTweet(){
        fetch(`https://camt-twitterapi.pair-co.com/tweets?offset=${this.pageNum}&limit=${this.limit}`)
        .then(Response=>{
            return Response.json()
        }).then(data=>{
            console.log(data)
            data.data.forEach(tweet=>{
                this.tweets.push(tweet)
            })
            // this.tweets.push.apply(data.data)
        })
    },
    likeTweets(id){
        const URL = 'https://camt-twitterapi.pair-co.com'
        fetch(`${URL}/tweets/${id}/likes`,{
            method: "POST",
                headers:{
                    Authorization : `Bearer ${this.$root.state.token}`
                }
        }).then(Response=>{
                if(Response !== 400){
                    alert('Liked')
                }
            })
    },
    unlikeTweets(id){
        const URL = 'https://camt-twitterapi.pair-co.com'
        fetch(`${URL}/tweets/${id}/unlikes`,{
            method: "POST",
                headers:{
                    Authorization : `Bearer ${this.$root.state.token}`
                }
        }).then(Response=>{
                if(Response !== 400){
                    alert('Unliked')
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
        } 
},
mounted(){
    this.getAllTweet()
    if(!this.$root.state.token){
      this.$router.push('/login')
    } else {
      this.$router.push('/main')
    }
}
}
</script>

<style>
.tweet-info-container{
    display: flex;
    align-items: flex-start;
}
.author-name{
    font-size: 18px;
    font-weight: 900;
    margin-right: 16px;
    margin-left: 8px;
}
.author-date{
    font-size: 14px;
    font-weight: 500;
    margin-right: 16px;
    margin-left: 8px;
    margin-top: 2.5px;
}
 .tweet-likes{
     margin-left: 88px;
     margin-top: 8px;
     font-size: 14px;
     display: flex;
 }
.tweet-info-container>img{
     vertical-align: middle;
  width: 80px;
  height: 80px;
  border-radius: 30%;
}
.tweets-box{
    border: white 1px solid;
    height: 56px;
    margin: 16px 0;
}

.tweet-text{
    margin-left: 88px;
    margin-top: -40px;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
}

.avatar{
  vertical-align: middle;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: inline-flex;
  object-fit: cover;
}
.avatar:hover{
    cursor: pointer;
}

.likes-button{
  background-color: #9147ff ;
  height:16px;
  width: 6%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 12px;
  border: none;
  /* box-shadow: 0px 0px 2px whitesmoke; */
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 8px;
  margin-left: 4px;
  margin-right: 4px;
}
.likes-button:hover{
    box-shadow: 0px 0px 8x whitesmoke;
    cursor: pointer;
}



</style>