<template>
  <div id='main-box'>
    <div id='header'>
      <img src='./assets/vue-logo.png'>
      <div id='nav'>
        <a href='#'>Home</a>
        <a href='#'>List</a>
      </div>
    </div>
    <div id='body'>
        <div id='section1'>
          {{foodName}}
        </div>
        <div id='section2'>
          {{address.storeName}}
        </div>
      </div>
  </div>
    
</template>

<script>
  export default{
    data(){
      return {
        foodName: 'Chicken Wings',
        address: {
          storeName: 'KFC'
        }
      }
    }
  }

</script>

<style>
  *{
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    color: gray;
  }
  #header{
    background-color: rgb(199, 241, 195);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px;
    align-content: center;
  }
  #nav {
    margin-right: 50px ;
  }
  #nav a {
    margin-top: 100px;
    text-decoration: none;
    margin-left: 30px;
    font-weight: 600;
  }
  img {
   width: 50px
  }

  #body{
   display: flex;
   justify-content: center;
   margin-top: 25px;
  }

  #section1{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-right: 15px;
    width: 650px;
    height: 300px;
    /*border: solid 1px black;*/
    border-radius: 20px;
    box-shadow: 0px 0px 8px lightgray;
  }

  #section2{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-left: 15px;
    width: 450px;
    height: 300px;
    /* border: solid 1px black; */
    border-radius: 20px;
    box-shadow: 0px 0px 8px lightgray;
  }
</style>
