<template>
  <div>
    <div>
      <h4> </h4>
      <button @click="add(10)"> +10 </button>
      <button @click="add(20)">+20 </button>
      <button @click="reset"> ล้างตะกร้า </button>
      <h4>ราคารวม: {{price.totalPrice}} </h4>
      จำนวน {{this.price.items}}
    </div>
    <div>
      <p v-if="show.show1">ยินดีด้วยคุณช้อปครบ 50บาท!และครบ 5ชิ้น ได้รับส่วนลด 5 บาท </p>
      <p v-if="show.show2">ยินดีด้วยคุณช้อปครบ 150บาท! ได้รับส่วนลด 25 บาท </p>
      <p v-if="show.show3">ยินดีด้วยคุณช้อปครบ 250บาท! ได้รับส่วนลด 50 บาท </p>
      <p v-if="show.show4">ยินดีด้วยคุณช้อปครบ 750บาท! และครบ 25 ชิ้นได้รับส่วนลด 50 บาท </p>
      
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      price: {items: 0,
      totalPrice: 0,},
      show: {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
      },

    }
  },
  methods: {
    
    add(price){
      this.price.totalPrice += price
      this.price.items++
      this.show.show1 = this.price.totalPrice >= 50 && this.price.items >= 5 
      this.show.show2 = this.price.totalPrice >= 150 && this.price.items >= 10 
      this.show.show3 = this.price.totalPrice >= 250 && this.price.items >= 15
      this.show.show4 = this.price.totalPrice >= 750 || this.price.items >= 25
    },

    reset(){
      this.price.totalPrice = 0
      this.price.items = 0
      this.show.show1 = false
      this.show.show2 = false
      this.show.show3 = false
    }

  }
}
</script>

<style>

</style>