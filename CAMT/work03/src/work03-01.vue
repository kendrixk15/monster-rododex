<template>
  <div>
    <p id='p1'>Full Name : <span>{{firstName}} {{lastName}}</span></p>
    <p id="p2">Age: <span>{{age}}</span></p>
  </div>
</template>

<script>
export default {
  data() {
    return{
      firstName: 'Sasiwong',
      lastName: 'Kasantia',
      age: 24
    }
  }
}
</script>

<style>
  *{
    margin: 0;
  }
  div{
    display: flex;
    padding: 10px;
  }

  #p1{
    flex: 2;
    background-color: blue;
    color: white;
  }

  #p2{
    flex: 1;
    background-color: yellow;
    font-weight: 500;
  }

  span{
    font-weight: 700;
  }
</style>