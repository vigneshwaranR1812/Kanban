<template>
    <div class="container-fluid img">
        <div class="row">
            <div class="col-md-4 ps-4 pe-4" style=" height:100vh">
                <div class="row d-flex align-items-center ms-2 me-2 mt-5" style="margin: auto auto">
                    
                    <div class="card" style="margin:  auto">
                      <div class="card-body">
                        <h5 class="card-title mb-3" style="font-size:30px">Sign Up</h5>
                        <form  v-on:submit.prevent="submitData" autocomplete="off">
                            <div class="mb-3">
                                <label for="exampleInputFN" class="labels" style="text-align:left">First Name</label>
                                <input type="text" class="form-control" id="exampleInputFN" aria-describedby="emailHelp" v-model="firstName" required>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputLN" class="labels" style="text-align:left">Last Name</label>
                                <input type="text" class="form-control" id="exampleInputLN" aria-describedby="emailHelp" v-model="lastName" required>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputUN" class="labels" style="text-align:left">Username</label>
                                <input type="text" class="form-control" id="exampleInputUN" aria-describedby="emailHelp" v-model="username" required>
                            
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="labels" style="text-align:left">Email Address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPass" class="labels" style="text-align:left">Password</label>
                                <input type="password" class="form-control" id="exampleInputPass" aria-describedby="emailHelp" v-model="password" required>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPhone" class="labels" style="text-align:left">Phone Number</label>
                                <input type="text" class="form-control" id="exampleInputPhone" aria-describedby="emailHelp" v-model="phoneNumber" required>
                            </div>
                           
                            <button type="submit" class="btn btn-danger">Sign Up</button>
                        </form>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div class="col-md-8 d-none d-sm-none d-md-block mx-0 px-0">
                <!-- <img class="img" src="../assets/images/signup.jpg"   alt=""> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            firstName:"",
            lastName:"",
            username:"",
            phoneNumber:"",
            email:"",
            password:"",
        }
    },
    methods:{
        submitData(){
            console.log(this.firstName,this,this.lastName,this.password,this.username,this.email,this.phoneNumber)
        }
    }
}
</script>
<style scoped>
.img{
        background:  linear-gradient(45deg,rgba(0,0,0,0.7),rgba(0, 0, 0, 0.4)),url("../assets/images/SignUp.jpg");
        width:100%;
        height: 100vh;
        background-position: center;
        background-size: cover;
    }
</style>