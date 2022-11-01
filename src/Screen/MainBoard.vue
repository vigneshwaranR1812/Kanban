<template>
    <PersonalNavbar></PersonalNavbar>
    <div class="container">
       

        <div class="row">
            <ListCard  v-for="(key,img) in images" :key="key" :image="img" />
        </div>

    </div>
</template>

<script>
import PersonalNavbar from '../components/PersonnalNavbar.vue'
import ListCard from '../components/ListCard.vue'
export default{
    data(){
        return {
            images: ['pic1.jpg', 'pic2.jpg', 'pic2.jpg']
        }
    },
    components:{
        PersonalNavbar,
        ListCard
    }
}
</script>
<style>

</style>
