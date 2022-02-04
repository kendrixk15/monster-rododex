<template>
  <div>
    <!-- <div>
      <h1> Select </h1>
      <select v-model="province">
        <option value='' disabled>Choose your origin</option>
        <option value="KK">KK</option>
        <option value="BKK">BKK</option>
        <option value="CNX">CNX</option>
      </select>
      <button @click="submit('province')">Go</button>
    </div>
    <div>
      <h1> Choose your country</h1>
      <select v-model="contries">
        <option value='' disabled> Choose your origin</option>
        <option value='UK'>United Kingdom</option>
        <option value='USA'> United State</option>
        <option vale='Japan'> Japan</option>
      </select>
      <button @click="submit('contries')">submit</button>
    </div> -->
    <div>
      <input type='date' v-model="date">
      <button @click="submit('date')">submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      province:'',
      contries:'',
      date:''
    }
  },
  methods: {
      submit(input){
        console.log(input,this[input])
        alert('you are from ' + this[input])
        if (input === 'date'){
          console.log('date object', new Date(this.date).getMonth)
        }
      }
    }
}
</script>

<style>

</style>