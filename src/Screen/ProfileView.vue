<template>
    <PersonalNavbar></PersonalNavbar>
    <div class="container">
        <div class="row mt-4">
            <div class="col-md-4">
                <div class="card" style="width: 100%;">
                    <div class="d-flex justify-content-center">
                        <img src="../assets/images/profile.jpg" class="card-img-top rounded-circle w-50"  alt="...">
                    </div>
                <div class="card-body">
                        <h5 class="card-title text-center mt-3">{{ firstName +"  "+lastName }}</h5>
                        <p class="card-text"><strong>Username</strong>:&nbsp;&nbsp;{{userName}}</p>
                        <p class="card-text"><strong>Email Id</strong>:&nbsp;&nbsp;{{gmail}}</p>
                        <p class="card-text"><strong>Phone Number</strong>:&nbsp;&nbsp;{{phoneNumber}}</p>
                        <div class="text-center">
                            <a href="/dashboard " class="btn btn-dark mx-auto">Go DashBoard</a>
                        </div>                       
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">Overall Summary</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                            content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import store from '@/Store';
import PersonalNavbar from '../components/PersonnalNavbar.vue';

    export default {
        mounted(){
            console.log(store.state.userData)
            if (store.state.userData){
                console.log("Hello")
            }
            else{
                store.dispatch("logOutUser");
            }
        },
        data() {
            return {
                firstName:store.state.userData.firstName,
                lastName: store.state.userData.lastName,
                userName:store.state.userData.userName,
                gmail:store.state.userData.gmail,
                phoneNumber:store.state.userData.phoneNumber
            }
        },
        components:{
            PersonalNavbar
        }
    }
</script>