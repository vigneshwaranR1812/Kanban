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
                            data-bs-target="#editCardModal">
                            <font-awesome-icon data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"
                                icon="pen" />&nbsp;&nbsp;Edit
                        </button>
                    </div>
                    <div class="col-4">
                        <button type="button" class="btn btn-danger  px-3  py-1" data-bs-toggle="modal"
                            data-bs-target="#deleteCard">
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

    <!-- -------------------------------------------------------------------------------------------------------------- -->
    <!-- Modal for Editing the card Details -->
    <div class="modal fade " id="editCardModal" tabindex="-1" aria-labelledby="editCardModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <!-- Header Title -->
                <div class="modal-header">
                    <h5 class="modal-title" id="editCardModal">Edit Card Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <!-- Editing card Name -->
                        <div class="mb-3">
                            <label for="cardName" class="form-label">Card Name</label>
                            <input type="text" class="form-control" id="cardName">
                        </div>
                        <!-- Editing card Description -->
                        <div class="mb-3">
                            <label for="cardDesc" class="form-label">Card Description</label>
                            <textarea class="form-control" id="cardDesc" rows="3"></textarea>
                        </div>
                        <!-- Editing List Name -->
                        <div class="mb-3">
                            <label for="listType" class="form-label">List Name</label>
                            <select class="form-select" id="listType" aria-label="Default select example">
                                <option selected>Select Any List</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <!-- Editing card Deadline Date -->
                        <div class="mb-3">
                            <label for="deadLine" class="form-label">DeadLine Date</label>
                            <input type="date" class="form-control" id="deadLine">
                        </div>
                        <!-- Editing card completion flag-->
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="completeCheck">
                            <label class="form-check-label" for="completeCheck">Completed</label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <!-- -------------------------------------------------------------------------------------------------------------- -->
    <!-- Modal for Confirm Modal Deletion -->
    <div class="modal fade" id="deleteCard" tabindex="-1" aria-labelledby="deleteCard" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Header Title -->
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="deleteCard">Delete Card</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <!-- Modal Body -->
                <div class="modal-body">
                   <div class="row">
                    <div class="text-center"><p> Are You Sure You Want To delete?</p>
                        <div><font-awesome-icon data-bs-toggle="tooltip" class="text-warning" style="font-size:60px" data-bs-placement="top" title="Delete" icon="circle-check" /></div>
                    </div>

                   </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger">Delete Card</button>
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