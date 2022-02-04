<template>
  <div>
    <div v-show='show'>
      Name: {{name}}
      Age: {{age}}
    </div>
    <button @click="showHide">Toggle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'OPEC',
      age: 24,
      show: true
    }
  },
  methods: {
    showHide(){
      if (this.show === false) {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
}
</script>