<template>
  <div>
    <div v-show='!show'>
      Name: {{me.name}}
      Age: {{me.age}}
      show: {{num}}
    </div>
    <div v-show ='show'>
      Name: xxxx
      Age: xxxx 
      show: {{num}}
    </div>
    show: {{show}}
    <button @click="plus">Show Detials</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      me: {  name: 'OPEC',
        age: 24,
        show: true,
        },
      num: 0,
    }
  },
  methods: {

    plus(){
      this.num++
      this.show = this.num%2 !== 1
      // if (this.num === 0)
      //   this.show = true
      // else
      //   this.show = false
    },
    // showHide(){
    //   if (this.num === 5) {
    //     this.show = true
    //   } else if (this.num === 6) {
    //     this.show = false
    //   }
    //}
  }
}
</script>