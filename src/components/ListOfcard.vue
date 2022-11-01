<template>
    <div class="col-lg-4 col-md-6 col-sm-12 p-3">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Card Name</h5>
                <p class="card-text">Descriptions about list Lorem ipsum dolor Descriptions about list Lorem ipsum dolor
                    Descriptions about &nbsp;<a href="/listId/" class="text-danger" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Show More
                    </a></p>
                <p>Created on--DeadLine</p>
                
                
                <div class="row d-flex justify-content-around">

                    <!-- <div class="col-3">
                        <a href="#" class="btn btn-danger px-3  py-1">Go</a>
                    </div> -->
                   
                    <div class="col-4">
                        <button type="button" class="btn btn-danger  px-3  py-1" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            <font-awesome-icon data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"
                                icon="pen" />&nbsp;&nbsp;Edit
                        </button>
                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-danger  px-3  py-1" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            <span data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                <font-awesome-icon data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"
                                    icon="trash" />&nbsp;&nbsp;Delete
                            </span>
                        </button>
                    </div>
                    <div class="col-4">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Button trigger modal -->


    <!-- Modal -->
    <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp">
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
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: ['image'],
    data() {
        return {

        }
    },

    methods: {
        updateImage: () => {
            console.log(this.$props)
            return "../assests/images/";
        }
    },



}

</script>
<style>

</style>