<template>
  <div>
      <div class="tweet-container">
          <label>Tweet your thoughts:</label>
          <br/>
          <form @submit.prevent="postTweet()">
            <input type="text" v-model="tweetText.text" placeholder="Say something" class="input-post">
            <!-- <input type="file"> -->
            <button type="submit" class="post-tweet">Tweet</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        tweetText:{
            text:''
        }
    }
},
methods:{
    postTweet(){
        fetch('https://camt-twitterapi.pair-co.com/tweets',{
            method:"POST",
            headers:{
                Authorization: `Bearer ${this.$root.state.token}`,
                'content-type':'application/json'
            },
            body: JSON.stringify(this.tweetText)
        }).then(Response=>Response.json())
        .then(data=>{
            console.log(data)
            alert('Tweeted')
        })
        .catch(error=>console.log(error))
        this.tweetText.text = ''
    }
}
}
</script>

<style>
.input-post{
    height: 56px ;
    width: 495px;
    border-radius: 24px;
    background-color: white;
    color: #191414;
}
.post-tweet{
    height: 56px ;
    width: 72px;
    border-radius: 100px;
    background-color: #9147ff;
    margin-left: 10px;
    border: 0px;
}
.post-tweet:hover{
    cursor: pointer;
    box-shadow: 0px 0px 4px whitesmoke;
}

.tweet-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

label{
    margin-top: 16px;
}
</style>