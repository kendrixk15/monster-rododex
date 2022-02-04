<template>
  <div>
    <p>My Name: {{name}} </p> <button @click="setName">Set Name</button>
    <p> Popcat: {{score}}</p> <button @click="popCat">Pop</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
        name: '',
        score: 0,
      }
  },
  methods: {
    setName(){
      this.name = prompt('Give us name')
    },
    // changeName(names){
    //   this.name = 'names'
    // },
    popCat(){
      this.score += 1
    }
  }
}
</script>