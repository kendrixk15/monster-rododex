
<template>
    <a v-bind:href='imageFile'> go to google</a>
    <img v-bind:src='imageFile'>
</template>

<script>
export default {
    data() {
        return{
            imageFile: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg'
        }
    },
}
</script>
