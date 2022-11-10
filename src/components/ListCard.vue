<template>
    <div class="col-lg-6 col-md-6 col-sm-12 p-3">
        <div class="card">
            <div class="row">
                <div class="col-4">
                    <img src="../assets/images/pic2.jpg" class="card-img-top" alt="..."
                        style="height:200px;width:100%;background-position:cover;background-size:cover;padding:5px">
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">List Name</h5>
                        <p class="card-text">Descriptions about list Lorem ipsum dolor Descriptions about list Lorem ipsum dolor
                            Descriptions about &nbsp;<a href="/listId/" class="text-danger" data-bs-toggle="modal"
                                data-bs-target="#displayDesc">Show More
                            </a>
                        </p>
                        <div class="d-flex flex-row justify-content-around">
                            
                            <div >
                                <button type="button" class="btn btn-danger  px-3  py-1" data-bs-toggle="modal"
                                    data-bs-target="#editList">
                                    <!-- <font-awesome-icon data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" icon="pen" /> Edit -->
                                    Edit
                                </button>
                            </div>
                            <div >
                                <button type="button" class="btn btn-danger  px-3  py-1" data-bs-toggle="modal"
                                    data-bs-target="#deleteList">
                                    <span data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                        <!-- <font-awesome-icon data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" icon="trash" /> Delete -->
                                        Delete
                                    </span>
                                </button>
                            </div>
                            <div>
                                <button type="button" class="btn btn-danger  px-3  py-1"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <!-- <font-awesome-icon data-bs-toggle="tooltip" data-bs-placement="top" title="Add" icon="chart-simple" />  -->
                                    Summary
                                </button>
                            </div>
                            <div>
                                <a href="/list" class="btn btn-danger px-3 py-1">
                                    <font-awesome-icon data-bs-toggle="tooltip" data-bs-placement="top" title="Open"
                                        icon="right-to-bracket" />
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </div>
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- Modal for the Editing List -->
    <div class="modal fade " id="editList" tabindex="-1" aria-labelledby="editList" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <!-- Header Title -->
                <div class="modal-header">
                    <h5 class="modal-title" id="editList">Edit Existing List</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <!-- Modal Body -->
                <div class="modal-body">
                    
                            <form @submit.prevent="submitEditList" id="changeList" autocomplete="off">
                                <!-- Editing List Name -->
                                <div class="mb-3">
                                    <label for="cardName" class="form-label">List Name</label>
                                    <input type="text" class="form-control" id="cardName" v-model="listName">
                                </div>
                                <!-- Editing List Description -->
                                <div class="mb-3">
                                    <label for="cardDesc" class="form-label">List Description</label>
                                    <textarea class="form-control" id="cardDesc" rows="3" v-model="listDescription"></textarea>
                                </div>
                            </form>
    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-danger" form="changeList">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <!-- -------------------------------------------------------------------------------------------------------------- -->
    <!-- Modal for Confirm Modal Deletion -->
    <div class="modal fade" id="deleteList" tabindex="-1" aria-labelledby="deleteList" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Header Title -->
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="deleteList">Delete List</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <!-- Modal Body -->
                <div class="modal-body">
                    <div class="row">
                        <div class="text-center">
                            <p> Are You Sure You Want To delete?</p>
                            <div>
                                <font-awesome-icon data-bs-toggle="tooltip" class="text-warning" style="font-size:60px"
                                    data-bs-placement="top" title="Delete" icon="circle-check" />
                            </div>
                        </div>
    
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger">Delete List</button>
                </div>
            </div>
        </div>
    </div>
    <!-- -------------------------------------------------------------------------------------------------------------- -->
    <!-- Modal for Displaying List Description -->
    <div class="modal fade" id="displayDesc" tabindex="-1" aria-labelledby="displayDesc" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Header Title -->
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="displayDesc">List Details</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <!-- Modal Body -->
                <div class="modal-body">
                    <div class="row">
                        <div class="text-center">
                            <h1>List Name</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, minima? Nam asperiores ullam dolores doloremque dolorum accusamus, delectus officia consectetur, nemo, dolorem magnam molestiae officiis soluta iste sunt! Tempora, ipsum.</p>
                        </div>
    
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
            props: ['image'],
            data(){
                return {
                    listDescription: "",
                    listName: "",
                }
            },
            
            methods:{
                submitEditList() {

                    console.log("Hello")
                    var listName = /^[a-zA-Z]+$/
                    var listDescription = /^[a-zA-Z][a-zA-Z0-9]*$/
                    var flag = true;
                    if (listName.test(this.listName) === false) {
                        flag = false;
                    }
                    if (listDescription.test(this.listDescription) === false) {
                        flag = false;
                    }
                    if (flag == false) {
                        console.log("Error");
                    }
                    else {
                        //update card details
                        console.log("post data");
                        console.log(this.listDescription, this.listName)
                    }

                }
            },

            
            
    }

</script>
<style></style>