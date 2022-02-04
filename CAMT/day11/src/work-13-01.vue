<template>
  <div>
    <h4>The Post</h4>
    {{getPost()}}
    <div v-for="item in postData" :key="item.id" class="boxes">
      {{item.title}}
      {{item.body}}
      <br>
      <button @click="getComment(item.id)">View Comment</button>
      <!-- <div>
        <div v-for="comment in postComment" :key="comment.id">
          <h4>{{comment.name}}</h4>
        </div>
      </div> -->
        <!-- The Modal -->
      <div id="myModal" class="modal" :style="{ 'display': isShow ? 'block' : 'none'}">
        <!-- Modal content -->
        <div class="modal-content">
          <span class="close" @click="hide()" >&times;</span>
          <div v-for="comment in postComment" :key="comment.id">
            <div class="title">{{comment.name}}</div>
            <div>{{comment.title}}</div>
            <div>{{comment.body}}</div>
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
      postData:[],
      postComment:[],
      show: false,
      isShow: false
    }
  }
  ,
  methods:{
    getPost(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((Response)=>{
        return Response.json()
      }) .then((data) =>{
        this.postData = data
      })
    },
    hide(){
      this.isShow = false
    }
    ,
    getComment(postID){
      console.log(postID)
      fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)
      .then((Response)=>{
        return Response.json()
      }) .then ((data)=>{
        this.postComment = data
      })
      this.isShow = true
    
    }
  }

}
</script>

<style>
.title{
  font-weight: 900;
}
.boxes{
  margin: 20px 0;
  width: 600px;
  padding: 5px;
  border: black solid 1px;
  border-radius: 10px;
}
button{
  margin: 10px 0;
}
/* The Modal (background) */
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}


</style>