<template>
  <div class="feed-body">
      <div class="feed-box">
          <div class="post-container">
              <post/>
          </div>
          <br/>
          What's going on
          <div class="feed-tweet-container">
              <!-- <tweets/> -->
              <usertweet/>
          </div>
      </div>
  </div>
</template>

<script>
import post from './sub-com/post.vue'
// import Tweets from './sub-com/tweets.vue'
import Usertweet from './usertweet.vue'
export default {
  components: { post, Usertweet },

}
</script>

<style>
.feed-body{
    display: flex;
    width: 100%;
    height: 800px;
    padding: 8px;
}

.feed-box{
    width: 100%;
    /* border:  1px white; */
    /* box-shadow: 0px 0px 4px lightgrey; */
    display: flex;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.feed-tweet-container{
    margin: 10px 0;
}

.tweet-containers{
    display: flex;
    flex-direction: column;
    /* border: white 1px solid; */
    box-shadow: 0px 0px 2px #9147ff;
    height: 118px;
    border-radius: 16px;
    margin: 32px;
    padding: 8px;
}
.tweet-containers:hover{
    /* border: white 1px solid; */
    box-shadow: 0px 0px 5px #9147ff;
}
.tweet-profile-box{
    border-radius: 16px;
}

.post-container{
    display: flex;
    justify-content: center;
}

</style>