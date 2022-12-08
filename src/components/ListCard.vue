<template>
    <div class="col-lg-6 col-md-6 col-sm-12 p-3">
        
        <div class="card">
            <div class="row">
                <div class="col-12">
                    <div class="card-body">
                        <h5 class="card-title">{{listName}} &nbsp; &nbsp; <span class="badge bg-info">{{ totalCard }} cards</span></h5>
                        <p class="card-text">{{listDescription.substring(0,100)}} &nbsp;
                           
                            
                            
                            <!-- <button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title"
                                data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button> -->
                            <a href="#" class="text-danger" @click="alertDisplay(listDescription);">Show More</a>
                        </p>
                        <div class="d-flex flex-row justify-content-around">
                            
                            <div >
                                <a type="button" class="btn btn-danger  px-3  py-1" :href="'/editList/'+listId">
                                    <!-- <font-awesome-icon data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" icon="pen" /> Edit -->
                                    Edit
                                </a>
                            </div>
                            <!-- <div>
                                <a type="button" class="btn btn-danger  px-3  py-1" @click="download">
                                    <font-awesome-icon data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" icon="pen" /> 
                                    Export
                                </a>
                            </div>  -->
                            <div >
                                <button type="button" class="btn btn-danger   px-3  py-1"  @click="deleteList(listId)" >
                                    <span data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                        <!-- <font-awesome-icon data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" icon="trash" /> Delete -->
                                        Delete
                                    </span>
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
                        <div class="progress-bar  bg-success" role="progressbar" :style="{ width: completedPercent+'%'}" aria-valuenow="50" aria-valuemin="0"
                            aria-valuemax="100">{{completedPercent+'%'}}</div>
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
    <!-- <div ref="content">
       <h1>Hello Da otha</h1>
       <input type="text" ref="hey">
    </div> -->
</template>
<script>
import store from '@/Store'
// import jspdf from 'jspdf';

// import store from '@/Store'


    export default {
            props: ['listId','listName','listDescription','listImage'],
            
            data(){
                return {
                    listIdFromProps:this.listId,
                    displayName:this.listName,
                    displayDescription:this.listDescription,
                    editListName:this.listName,
                    editListDescription:this.listDescription,
                    count:0,
                    totalCard:0,
                    completedPercent:0

                }
            },
            async created() {
                setTimeout(()=>{
                    
                    for (const key in store.state.allCardCount) {
                        if (store.state.allCardCount[key].listId===this.listId){
                            this.totalCard = store.state.allCardCount[key].tc;
                            this.completedPercent = (store.state.allCardCount[key].cc /store.state.allCardCount[key].tc)*100;
                        }
                       
                    }
                    console.log(this.totalCard);
                    console.log(this.completedPercent)
                
                },4000)
            },
            
            computed: {
               
                    allTotalCard: () => {
                   
                       

                    }, 
                    // console.log(store.state.allCardCount)
                //     const data = store.state.allCardCount.filter((count) => count.listId === listId);
                //     return data.total_cards
                
                
            },
            methods:{
                
                alertDisplay: (listDescription) => {
                    alert(listDescription);
                },
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
                },
                // download:()=>{
                //     console.log(this.$ref.content);
                //     const doc=new jspdf();
                //     const html=this.$ref.content.innerHTML;
                //     doc.fromHTML(html,15,15,{
                //         width:150
                //     })
                // }
                
            },
           
            

        
            
    }

</script>
<style></style>