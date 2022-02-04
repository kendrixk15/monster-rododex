<template>
  <div>
    {{data}}
    <button @click="changeX()"> X </button>
    <button @click="changeO()"> O </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: 'None'
    }
  },
  methods: {
    changeX() {
      this.data = 'X'
    },
    changeO() {
      this.data = 'O'
    }
  }
}
</script>