<template>
  <div>
    {{callStudent()}}
  </div>
</template>

<script>
export default {
  data(){
    return{
      students: [
    {
        id: "111",
        name: "มานะ",
        scores: [96, 91, 25, 72, 64, 56, 11, 50, 68, 92],
    },
    {
        id: "222",
        name: "มานี",
        scores: [81, 15, 49, 16, 13, 97, 26, 47, 78, 45],
    },
    {
        id: "333",
        name: "ปิติ",
        scores: [97, 15, 53, 47, 88, 69, 79, 12, 46, 18],
    },
    {
        id: "444",
        name: "ชูใจ",
        scores: [59, 24, 62, 85, 95, 45, 69, 55, 57, 8],
    },
      ]
    }
  },
  methods: {
    callStudent(){
      let i = 0
      //let avgScore = 0
      while (i < this.students.length){
        let j = 0
        let sumScore = 0
        while ( j < this.students[i].scores.length){
          sumScore += this.students[i].scores[j]
          
          j++
        }
        console.log(`total score is ${this.students[i].name} ${sumScore/this.students[i].scores.length}`)
        i++
        
      }
    }
  }
}
</script>

<style>

</style>