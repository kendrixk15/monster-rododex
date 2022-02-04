<template>
  <div>
    <div id='button'>
      <button @click="hideCard">ปิดบัตร</button>
      <button @click="swapPage">พลิกบัตร</button>
      <button @click="hideInfo">ซ่อน/แสดงข้อมูล</button>
    </div>
    <div v-if='cardShow' id='main-box'>
      <div v-if='side === "front"' class='first-page'>
        <div class="information">
          <h3>ชื่อตัว: {{info.nameTH}} ชื่อสกุล: {{info.lastTH}} </h3>
          <h3>First Name: {{info.nameEng}} </h3>
          <h3>Last Name: {{info.lastEng}} </h3>
          <h4>เกิดวันที่: {{info.birthTH}} </h4>
          <h4>Date Of Birth: {{info.birthEn}} </h4>
          <h4>ที่อยู่: {{info.location}} </h4>
        </div>
        <div id='foot'>
          <div>
            <h5>{{cardInfo.dateIssue}}</h5>
            <h5>วันออกบัตร</h5>
          </div>
          <div>
            <h5>{{cardInfo.dateExpire}} </h5>
            <h5>วันบัตรหมดอายุ</h5>
          </div>
        </div>
      </div>
      <div v-if='showHide' class='first-page'>
        <div class="information">
          <h3>ชื่อตัว: ******* ชื่อสกุล: ******* </h3>
          <h3>First Name: ******* </h3>
          <h3>Last Name: ******* </h3>
          <h4>เกิดวันที่: ******* </h4>
          <h4>Date Of Birth: ******** </h4>
          <h4>ที่อยู่: ******* </h4>
        </div>
        <div id='foot'>
          <h5>********</h5>
          <h5>วันออกบัตร</h5>
          <h5>********</h5>
          <h5>วันบัตรหมดอายุ</h5>
        </div>
      </div>
      <div v-if='side === "back"' id='second-page'>
        <h4> JT0-080-0987 </h4>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      side: 'front',
      cardShow: true,
      showHide: false,
      info: {
        nameTH: 'ศศิวงศ์',
        lastTH: 'แคสันเทียะ',
        nameEng: 'Sasiwong',
        lastEng: 'Kansantia',
        birthTH: '31 กรกฎาคม 2540',
        birthEn: '31 July 1997',
        location: 'KKU'
      },
      cardInfo: {
        dateIssue: '1 July 2021',
        dateExpire: '31 July 2200'
      }
    }
  },
  methods: {
    swapPage(){
      this.side = this.side === 'front' ? 'back' : 'front'
    },
    hideCard(){
      if (this.cardShow === false){
        this.cardShow = true
      } else 
      this.cardShow = false
    },
    hideInfo(){
      
    }
  }
}
</script>

<style>
  *{
   margin: 0;
   padding: 0;
   line-height: 25px;
  }
  button{
    margin: 20px 0;
  }
  #main-box{
    display: flex;
    flex-direction: row;
    width: 450px;
    margin-left: 10px;
    background-color: azure ;
    padding: 5px;
  }

  #foot{
    display: flex;
    width: 300px;
    justify-content: space-between;
    margin: 10px 0;
  }
</style>