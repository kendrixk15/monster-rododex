<template>
  <div>
      <!-- ใส่ vfor เพิ่มตรงนี้เพื่อ loop ข้อมูล -->
      <div v-for="(item,i) in 4" :key='i'>
          <div class="tweet-containers">
              <div class="tweet-profile-box">
                avatar
                <div>
                    Name:
                    </div>
                </div>
                <div>Tweet:</div>
                <div>Likes</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>