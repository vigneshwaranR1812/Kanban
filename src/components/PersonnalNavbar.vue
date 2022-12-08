<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-danger">
        <div class="container-fluid">
            <a class="navbar-brand ms-5" style="color:white" href="#">Welcome   {{returnName()}}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" style="color:white">

                </span>
            </button>
            <div class="collapse navbar-collapse ms-auto" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" style="color:white" href="/dashboard">DashBoard</a>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" style="color:white" aria-current="page" href="/profile">profile</a>
                    </li> -->
                    <li class="nav-item">
                        <a class="nav-link" style="color:white" href="/" @click="logoutdata">Logout</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import store from '@/Store';

export default {
   
    methods:{
        returnName:()=>{
            return store.state.userData.firstName;
    },
        logoutdata:()=>{
            if(store.state.userData!=null){
                console.log("Hey")
                
                store.dispatch('logOutUser');
                console.log(store.state.userData);
            }
            else{
                console.log("Hello")
            }
        }
    }
}
</script>
<style scoped>
nav {
    background: transparent;
    font-size: 16px;
}
</style>

