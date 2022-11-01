<template>
    <PersonalNavbar></PersonalNavbar>
    <div class="container">
    <div class="row mt-4 mb-3">
        <div class="col-md-6 col-sm-12"></div>
        <div class="col-md-6 col-sm-12 px-auto d-flex justify-content-end">
            <button type="button" class="btn btn-dark  px-3  py-1 me-3" data-bs-toggle="modal" data-bs-target="#addingList">
                <font-awesome-icon icon="plus" /> &nbsp; Add New List
            </button>
            <button type="button" class="btn btn-dark  px-3  py-1" data-bs-toggle="modal" data-bs-target="#addingCard">
                <font-awesome-icon icon="plus" /> &nbsp; Add New Card
            </button>
        </div>
        
    </div>
        
       

        <div class="row">
            <ListCard  v-for="(key,img) in images" :key="key" :image="img" />
        </div>

    </div>
    <!-- ----------------------------------------------------------------------------------------------------------- -->
    <!-- Modal for the Adding Card -->
    <div class="modal fade " id="addingCard" tabindex="-1" aria-labelledby="addingCard" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addingCard">Add New Card</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card">
                       
                        <div class="card-body">
                            
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-dark">Submit</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                    <!-- <button type="button" class="btn btn-danger">Save changes</button> -->
                </div>
            </div>
        </div>
    </div>

    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- Modal for the Adding List -->
    <div class="modal fade " id="addingList" tabindex="-1" aria-labelledby="addingList" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addingList">Add New List</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card">
    
                        <div class="card-body">
    
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp">
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-dark">Submit</button>
                            </form>
                        </div>
                    </div>
    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                    <!-- <button type="button" class="btn btn-danger">Save changes</button> -->
                </div>
            </div>
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
