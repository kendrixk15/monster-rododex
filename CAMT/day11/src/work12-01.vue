<template>
  <div>
    <div>Do you love croissant?</div>
    <div v-if='show===1'>Well {{waitingText}}</div>
    <div v-if='show===2'>{{answerText}}</div>
    <div>
      <button @click="answer('yes')">Yes</button>
      <button @click="answer('No')">No</button>
      <button @click="reset">Again</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:1,
      isClicked: false,
      answerText:'',
      waitingText:'.',

    }
  },
  methods:{
    answer(a){
      if(this.isClicked){
        return 
      } else{
      this.answerText = a
      this.isClicked = true
      this.show=2
       }
    },
    reset(){
      this.answerText = ''
      this.isClicked = false
      this.show=1
    },

  },
  mounted(){
    this.id = setInterval(()=>{
      if(this.waitingText.length>2){
        this.waitingText = ''
      } else 
      this.waitingText += '.'
    }, 1000)},
  unmounted(){
    clearInterval(this.id)
  }
}
</script>

<style>

</style>