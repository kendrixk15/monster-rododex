<template>
  <div>
    <div>
      <h1>คะแนน: {{exam.score}}</h1>
      <h1>เกรด: {{grading()}} </h1>
      <div>
        <p v-if="exam.score >= 80"  >A</p>
        <p v-if="exam.score >= 70 && exam.score < 80">B</p>
        <p v-if="exam.score >= 60 && exam.score <  70">C</p>
        <p v-if="exam.score >= 50 && exam.score <  60">D</p>
      </div>
      <button @click="add(10)" v-if="exam.score + 10 <= 100">+10</button><button @click="minus(10)" v-if="exam.score - 10 >= 0">-10</button>
      <br>
      <button @click="add(20)" v-if="exam.score + 20 <= 100">+20</button><button @click="minus(20)" v-if="exam.score - 20 >= 0">-20</button>
      <br>
      <button @click="add(50)" v-if="exam.score + 50 <= 100">+50</button><button @click="minus(50)" v-if="exam.score - 50 >= 0">-50</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      exam: {score: 0,
      },
    }
  },
  methods: {
    add(a){
      this.exam.score += a
    },
    minus(a){
      this.exam.score -= a
    },
    grading(){
      let grade = ''
      if (this.exam.score >= 50 && this.exam.score < 60){
        return grade = 'D'
      } else if (this.exam.score < 70){
        return grade = 'C'
      } else if (this.exam.score < 80){
        return grade = 'B' 
      } else if (this.exam.score >= 80) {
        return grade = 'A'
      }

    }
  }
}
</script>

<style>

</style>