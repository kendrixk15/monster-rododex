<template>
  <div>
    <label id='idSearch'>Give us the student id: </label>
    <input type="number" v-model="idSearch" placeholder="Give ID Number: ">
    {{findID()}}
    {{searchStatus}}
    <!-- {{callStudent()}} -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      idSearch: null,
      searchStatus: null ,
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
    // callStudent(){
    //   let i = 0
    //   //let avgScore = 0
    //   while (i < this.students.length){
    //     let j = 0
    //     let sumScore = 0
    //     let avgScore = 0
    //     while ( j < this.students[i].scores.length){
    //       sumScore += this.students[i].scores[j]
          
    //       j++
    //     }
    //     //console.log(`total score is ${this.students[i].name} ${sumScore/this.students[i].scores.length}`)
    //     avgScore = sumScore/this.students[i].scores.length
    //     i++
    //     return avgScore
    //   }
      
    // },
    findID(id){
     let i = 0 
        while ( i < this.students.length){
                const student = this.students[i]
            if (student.id === id){
                  return student 
             }
           i++
         } 
          return null
     }
  },
  watch:{
    //watch จะเริ่มทำเมื่อค่าของ idSearch เปลี่ยนเองทันที
    idSearch(value){
      // student คือ ตัวแปรที่เป็น function findID(id)
      const student = this.findID(value)
         if (student) {
           //เขียนลูปซ้ำอีกรอบเพื่อให้มันทำซ้ำ array ของ score
           let i = 0
           let sum = 0 
           while ( i < student.scores.length){
             sum += student.scores[i]
             i++
           }
           this.searchStatus = sum / student.scores.length
         }else {
           this.searchStatus = "not found"
         }
    }
  }
}
</script>

<style>

</style>