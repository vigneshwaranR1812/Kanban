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
<!-- Modal for the Adding Card-->
<div class="modal fade " id="addingCard" tabindex="-1" aria-labelledby="addingCard" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
            <!-- Header Title -->
            <div class="modal-header">
                <h5 class="modal-title" id="addingCard">Add New Card</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- Modal Body -->
            <div class="modal-body">
                
                        <form id="addNewCard" @submit.prevent="submitNewCard">
                            <!-- Adding card Name -->
                            <div class="mb-3">
                                <label for="cardName" class="form-label">Card Name</label>
                                <input type="text" class="form-control" id="cardName" v-model="card.cardName">
                            </div>
                            <!-- Adding card Description -->
                            <div class="mb-3">
                                <label for="cardDesc" class="form-label">Card Description</label>
                                <textarea class="form-control" id="cardDesc" rows="3" v-model="card.cardDescription"></textarea>
                            </div>
                            <!-- Adding List Name -->
                            <div class="mb-3">
                                <label for="listType" class="form-label">List Name</label>
                                <select class="form-select" id="listType" aria-label="Default select example" v-model="card.selectData">
                                    <option selected>Select Any List</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <!-- Adding card Deadline Date -->
                            <div class="mb-3">
                                <label for="deadLine" class="form-label">DeadLine Date</label>
                                <input type="date" class="form-control" id="deadLine" v-bind:min="datePickerId" v-model="card.cardDeadline">
                            </div>
                        </form>
                   
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-danger" form="addNewCard">Add Card</button>
            </div>
        </div>
    </div>
</div>
    <!-- ---------------------------------------------------------------------------------------------------------------- -->
    <!-- Modal for the Adding List -->
    <div class="modal fade " id="addingList" tabindex="-1" aria-labelledby="addingList" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <!-- Header Title -->
                <div class="modal-header">
                    <h5 class="modal-title" id="addingList">Add New List</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <!-- Modal Body -->
                <div class="modal-body">
                   
                            <form id="addNewList" @submit.prevent="submitNewList" autocomplete="off">
                                <!-- Adding List Name -->
                                <div class="mb-3">
                                    <label for="cardName" class="form-label">List Name</label>
                                    <input type="text" class="form-control" id="cardName" v-model="list.listName">
                                </div>
                                <!-- Adding List Description -->
                                <div class="mb-3">
                                    <label for="cardDesc" class="form-label">List Description</label>
                                    <textarea class="form-control" id="cardDesc" rows="3" v-model="list.listDescription"></textarea>
                                </div>
                            </form>
                     
    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-danger" form="addNewList">Add List</button>
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
            images: ['pic1.jpg', 'pic2.jpg', 'pic2.jpg'],
            card:{
                datePickerId: new Date().toISOString().split("T")[0],
                cardDescription: "",
                cardName: "",
                // cardStatus: false,
                selectData: -1,
                cardDeadline: ""
            },
            list:{
                listDescription: "",
                listName: "",
            }
        }},
        methods: {
            submitNewCard(){
                var cardName = /^[a-zA-Z]+$/
                var cardDescription = /^[a-zA-Z][a-zA-Z0-9]*$/
                var flag = true;
                if (cardName.test(this.card.cardName) === false) {
                    flag = false;
                }
                if (cardDescription.test(this.card.cardDescription) === false) {
                    flag = false;
                }
                if (flag == false) {
                    console.log("Error");
                }
                else {
                    //update card details
                    console.log("post data");
                    console.log(this.card)
                }

            },
            
                submitNewList() {

                    console.log("Hello")
                    var listName = /^[a-zA-Z]+$/
                    var listDescription = /^[a-zA-Z][a-zA-Z0-9]*$/
                    var flag = true;
                    if (listName.test(this.list.listName) === false) {
                        flag = false;
                    }
                    if (listDescription.test(this.list.listDescription) === false) {
                        flag = false;
                    }
                    if (flag == false) {
                        console.log("Error");
                    }
                    else {
                        //update card details
                        console.log("post data");
                        console.log(this.list);
                    }

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
