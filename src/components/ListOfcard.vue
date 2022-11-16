<template>
    
    <div class="col-lg-4 col-md-6 col-sm-12 p-3">
        <div :class="[deadLineConvert <currDate && status==='false' ? `card border-danger p-4` : `card p-4`] ">
            <div class="card-body">
                <h5 class=" card-title">{{cardName}} &nbsp;&nbsp;&nbsp;&nbsp;<span v-if="deadLineConvert < currDate && status === 'false'" class="badge rounded-pill bg-danger">
                    {{"Not Completed Yet".toLowerCase()}}</span></h5> 
                <p class="card-text">{{cardDescription.substring(0,100)}} &nbsp;<a href="/listId/" class="text-danger" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Show More
                    </a></p>
                <p>DeadLine On:&nbsp;&nbsp;{{deadLineDate}}</p>
                <p>Current Status:&nbsp;&nbsp;<span v-if="status === 'false'" class="badge rounded-pill bg-success">
                    {{"Active".toLowerCase()}}</span><span v-if=" status === 'true'" class="badge rounded-pill bg-info">
                        {{"Not-Active".toLowerCase()}}</span></p>
                
                
                <div class="d-flex justify-content-around">

                    <!-- <div class="col-3">
                        <a href="#" class="btn btn-danger px-3  py-1">Go</a>
                    </div> -->
                   
                    <div>
                        <a type="button" class="btn btn-danger  px-3  py-1" :href="'/cardDetail/'+listId+'/'+cardId">
                            <font-awesome-icon data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"
                                icon="pen" />&nbsp;&nbsp;Edit
                        </a>
                    </div>
                    <div >
                        <button v-if="status==='false'" type="button" class="btn btn-danger  px-3  py-1" @click="deleteCard(listId,cardId)">
                            <span data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
                                <font-awesome-icon data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"
                                    icon="trash" />&nbsp;&nbsp;Delete
                            </span>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
    <!-- Button trigger modal -->

    <!-- -------------------------------------------------------------------------------------------------------------- -->
    
</template>
<script>
import store from '@/Store';


export default {
    props: ['cardId', 'cardName', 'cardDescription', 'status', 'deadLineDate','listId'],
    data() {
        return {
           currDate:new Date(),
           deadLineConvert:new Date(this.deadLineDate)
        }
    },

    methods: {
        deleteCard:(listId,cardId)=>{
            console.log(listId);
            const prompt = window.prompt("Dou you Want to Delete it? Type `Delete Card`");
            if (prompt === "Delete Card") {
                console.log(listId,cardId);
                store.dispatch('deleteCard', { data: store.state.userData.token, listId,cardId });
            }
            else
                // alert("Card is Not Deleted Try Again!!");
                
                console.log("Hello")
        }
    },



}

</script>
<style>
/*
      Enter and leave animations can use different
      durations and timing functions.
    */
       
</style>