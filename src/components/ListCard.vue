<template>
    <div class="col-lg-6 col-md-6 col-sm-12 p-3">
        
        <div class="card">
            <div class="row">
                <div class="col-12">
                    <div class="card-body">
                        <h5 class="card-title">{{listName}} &nbsp; &nbsp; <span class="badge bg-info">5-Cards</span></h5>
                        <p class="card-text">{{listDescription.substring(0,100)}} &nbsp;<a href="" class="text-danger" data-bs-toggle="modal"
                                :data-bs-target="'#'+listId">Show More {{listId}}
                            </a>
                        </p>
                        <div class="d-flex flex-row justify-content-around">
                            
                            <div >
                                <a type="button" class="btn btn-danger  px-3  py-1" :href="'/editList/'+listId">
                                    <!-- <font-awesome-icon data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" icon="pen" /> Edit -->
                                    Edit
                                </a>
                            </div>
                            <div >
                                <button type="button" class="btn btn-danger   px-3  py-1"  @click="deleteList(listId)" >
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
                                <a :href="'/list/'+listId" class="btn btn-danger px-3 py-1">
                                    <font-awesome-icon data-bs-toggle="tooltip" data-bs-placement="top" title="Open"
                                        icon="right-to-bracket" />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    <div class="progress">
                        <div class="progress-bar  bg-success" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                            aria-valuemax="100"></div>
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
                                    <input type="text" class="form-control" id="cardName"  v-model="editListName">
                                </div>
                                <!-- Editing List Description -->
                                <div class="mb-3">
                                    <label for="cardDesc" class="form-label">List Description</label>
                                    <textarea class="form-control" id="cardDesc" rows="3"  v-model="editListDescription"></textarea>
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
    <div class="modal fade" :id="listId" tabindex="-1" aria-labelledby="displayDesc" aria-hidden="true">
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
                            <h1>{{displayName}}</h1>
                            <p>{{displayDescription}}</p>
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
import store from '@/Store'
// import store from '@/Store'


    export default {
            props: ['listId','listName','listDescription','listImage'],
            data(){
                return {
                    listIdFromProps:this.listId,
                    displayName:this.listName,
                    displayDescription:this.listDescription,
                    editListName:this.listName,
                    editListDescription:this.listDescription
                }
            },
            
            methods:{
                reduceLength:()=>{
                    this.listDescription
                },
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

                },
                deleteList:(listId)=>{
                    console.log(listId);
                    const prompt=window.prompt("Dou you Want to Delete it? Type `Delete List`");
                    if (prompt === "Delete List"){
                        console.log(listId);
                        store.dispatch('deleteList',{data:store.state.userData.token,id:listId});
                    }
                    else
                        // alert("List is Not Deleted Try Again!!");
                        // window.location.reload();
                        console.log("Hello")
                }
            },

            
            
    }

</script>
<style></style>

//     {
//         "listId": 5,
//         "listName": "abcd",
//         "listDescription": "abcdefgh",
//         "imageName": "dummyName"
//     },
//     {
//         "listId": 6,
//         "listName": "abcdweret",
//         "listDescription": "abcdefgh",
//         "imageName": "dummyName"
//     },
//     {
//         "listId": 7,
//         "listName": "abcdweretytu",
//         "listDescription": "abcdefgh",
//         "imageName": "dummyName"
//     },
//     {
//         "listId": 8,
//         "listName": "querty",
//         "listDescription": "fucku",
//         "imageName": "dummyName"
//     }
// ]