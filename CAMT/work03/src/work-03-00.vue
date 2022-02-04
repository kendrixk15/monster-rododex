<template>
  <div>
      <section>
        {{name}}
        <button v-on:click="changeName">
          Change Name
        </button>
      </section>
  </div>
</template>

<script>
export default {
  data() {
    return{
      name: 'ละกัน'
    }
  },
  methods: {
    changeName(){
      this.name = 'OPEC'
    }
  }
}
</script>
