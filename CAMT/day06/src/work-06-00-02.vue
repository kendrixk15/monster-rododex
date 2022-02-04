<template>
  <div>
    <!-- <h1>รับวัคซีนยังจ้ะ</h1>
    <input id='vaccined' type="checkbox" v-model="isVaccined">
    <label for="vaccined">Vaccined</label>
    <button @click="submit('isVaccined')">submit</button> -->

    <div>
        <h1>Married?</h1>
        <input type="checkbox" v-model="isMarried" id='married'>
        <label for="married"> Married </label>
        <button @click="submit('isMarried')">Submit</button>
    </div>

    <div>
      <h1> Radio </h1>
      <!-- <div>
        <h1>Gender</h1>
        <input type="radio" v-model="gender" value='Male' id='Male'>
        <label for="Male"> Male </label>
        <input type="radio" v-model="gender" value='Female' id='Female'>
        <label for="Female"> Female </label>
        <button @click="submit('gender')">Submit</button>
      </div> -->
      <div>
        <h1> My Favorite Pet</h1>
        <input type="radio" v-model="favPet" value='Dog' id='dog'>
        <label for='dog'> Dog </label>
        <input type="radio" v-model="favPet" value='Cat' id='cat'>
        <label for='cat'> Cat </label>
        <input type="radio" v-model="favPet" value='Bird' id='bird'>
        <label for='bird'> Bird </label>
        <button @click="submit('favPet')">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isVaccined: false,
      isMarried: false,
      gender: '',
      favPet: '',
      age: 0,
      des: null
    }
  },
  methods: {
    submit(input){
      console.log(input,this[input])
    }
  }
}
</script>

<style>

</style>