<template>
    <div class="container-fluid img">
        <div class="row">
            <div class="col-md-8 d-none d-sm-none d-md-block mx-0 px-0">
                <!-- <img class="img" src="../assets/images/signup.jpg"   alt=""> -->
            </div>
            <div class="col-md-4 ps-4 pe-4" style=" height:100vh">
                <div class="row d-flex align-items-center ms-2 me-2 mt-5" style="margin: auto auto">

                    <div class="card" style="margin: 30% auto">
                        <div class="card-body">
                            <h5 class="card-title mb-3" style="font-size:30px">Login</h5>
                            <form v-on:submit.prevent="submitData" autocomplete="Off">
                                
                                <div class="mb-3">
                                    <label for="exampleInputUN" class="labels" style="text-align:left">Username</label>
                                    <input type="text" class="form-control" id="exampleInputUN"
                                        aria-describedby="emailHelp" v-model="username" required>

                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="labels" style="text-align:left">Email
                                        Address</label>
                                    <input type="email" class="form-control" id="ex\
                                    ampleInputEmail1"
                                        aria-describedby="emailHelp" v-model="email" required>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPass" class="labels"
                                        style="text-align:left">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPass"
                                        aria-describedby="emailHelp" v-model="password" required>
                                </div>
                                

                                <button type="submit" class="btn btn-danger">Login</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: "",
            email: "",
            password: "",
        }
    },
    methods: {
        submitData() {
            console.log(this.password, this.username, this.email)
        }
    }
}
</script>
<style scoped>
.img {
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url("../assets/images/Login.jpg");
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
}
</style>