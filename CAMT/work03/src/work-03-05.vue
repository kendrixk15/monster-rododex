<template>
  <div id='main-body'>
      <div id='board'>
        <div id="first-row">
          <div class="boxes">
            {{row1.showItem1}}
          </div>
          <div class="boxes">
            <p>{{row1.showItem2}}</p>
          </div>
          <div class="boxes">
            <p>{{row1.showItem3}}</p>
          </div>
        </div>
        <div id="second-row">
          <div class="boxes">
            <p>{{row2.showItem1}}</p>
          </div>
          <div class="boxes">
            <p>{{row2.showItem2}}</p>
          </div>
          <div class="boxes">
            <p>{{row2.showItem3}}</p>
          </div>
        </div>
        <div id="third-row">
          <div class="boxes" id='03-01'>
            <p>{{row3.showItem1}}</p>
          </div>
          <div class="boxes" id='03-02'>
            <p>{{row3.showItem2}}</p>
          </div>
          <div class="boxes" id='03-03'>
            <p>{{row3.showItem3}}</p>
          </div>
        </div>
      </div>
      <div id='control'>
        <div id="first-row">
          <div class="boxes">
            <button @click="changeXa1()">X</button>
            <button @click="changeOa1()">O</button>
            <button @click="changeNonea1()"></button>
          </div>
          <div class="boxes">
            <button @click="changeXa2()">X</button>
            <button @click="changeOa2()">O</button>
            <button @click="changeNonea2()"></button>
          </div>
          <div class="boxes">
            <button @click="changeXa3()">X</button>
            <button @click="changeOa3()">O</button>
            <button @click="changeNonea3()"></button>
          </div>
        </div>
        <div id="second-row">
          <div class="boxes">
            <button @click="changeXB1()">X</button>
            <button @click="changeOB1()">O</button>
            <button @click="changeNoneB1()"></button>
          </div>
          <div class="boxes">
            <button @click="changeXB2()">X</button>
            <button @click="changeOB2()">O</button>
            <button @click="changeNoneB2()"></button>
          </div>
          <div class="boxes">
            <button @click="changeXB3()">X</button>
            <button @click="changeOB3()">O</button>
            <button @click="changeNoneB3()"></button>
          </div>
        </div>
        <div id="third-row">
          <div class="boxes">
            <button @click="changeXC1()">X</button>
            <button @click="changeOC1()">O</button>
            <button @click="changeNoneC1()"></button>
          </div>
          <div class="boxes">
            <button @click="changeXC2()">X</button>
            <button @click="changeOC2()">O</button>
            <button @click="changeNoneC2()"></button>
          </div>
          <div class="boxes">
            <button @click="changeXC3()">X</button>
            <button @click="changeOC3()">O</button>
            <button @click="changeNoneC3()"></button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        row1: {  
          showItem1: 'O',
          showItem2: 'O',
          showItem3: 'O'
          },
        row2: {
          showItem1: 'O',
          showItem2: 'O',
          showItem3: 'O'
        },
        row3: {
          showItem1: 'O',
          showItem2: 'O',
          showItem3: 'O'
        }
      }
  },
  methods: {
    changeXa1() {
      this.row1.showItem1 = 'X'
    },
    changeOa1() {
      this.row1.showItem1 = 'O'
    },
    changeNonea1(){
      this.row1.showItem1 = ''
    },
    changeXa2() {
      this.row1.showItem2 = 'X'
    },
    changeOa2() {
      this.row1.showItem2 = 'O'
    },
    changeNonea2(){
      this.row1.showItem2 = ''
    },
    changeXa3() {
      this.row1.showItem3 = 'X'
    },
    changeOa3() {
      this.row1.showItem3 = 'O'
    },
    changeNonea3(){
      this.row1.showItem3 = ''
    },
    changeXB1() {
      this.row2.showItem1 = 'X'
    },
    changeOB1() {
      this.row2.showItem1 = 'O'
    },
    changeNoneB1(){
      this.row2.showItem1 = ''
    },
    changeXB2() {
      this.row2.showItem2 = 'X'
    },
    changeOB2() {
      this.row2.showItem2 = 'O'
    },
    changeNoneB2(){
      this.row2.showItem2 = ''
    },
    changeXB3() {
      this.row2.showItem3 = 'X'
    },
    changeOB3() {
      this.row2.showItem3 = 'O'
    },
    changeNoneB3(){
      this.row2.showItem3 = ''
    },
    changeXC1() {
      this.row3.showItem1 = 'X'
    },
    changeOC1() {
      this.row3.showItem1 = 'O'
    },
    changeNoneC1(){
      this.row3.showItem1 = ''
    },
    changeXC2() {
      this.row3.showItem2 = 'X'
    },
    changeOC2() {
      this.row3.showItem2 = 'O'
    },
    changeNoneC2(){
      this.row3.showItem2 = ''
    },
    changeXC3() {
      this.row3.showItem3 = 'X'
    },
    changeOC3() {
      this.row3.showItem3 = 'O'
    },
    changeNoneC3(){
      this.row3.showItem3 = ''
    }
  }
}
</script>

<style>
  *{
    margin: 0;
  }
  #board, #control{
    display: flex;
    margin: 30px 0;
  }

  .boxes{
    width: 150px;
    height: 150px;
    border: 1px black solid;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button{
    width: 25px;
    height: 25px;
  }


</style>