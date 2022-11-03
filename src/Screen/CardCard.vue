<template>
    <PersonalNavbar></PersonalNavbar>
    <div class="container">

       
        <div class="row mt-4 mb-3">
            <div class="col-md-6 col-sm-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/dashboard">DashBoard</a></li>
                
                        <li class="breadcrumb-item active" aria-current="page">Cards</li>
                    </ol>
                </nav>
            </div>
            <div class="col-md-6 col-sm-12 px-auto d-flex justify-content-end">
                <button type="button" class="btn btn-dark  px-3  py-1" data-bs-toggle="modal"
                    data-bs-target="#addingCard">
                    <font-awesome-icon icon="plus" /> &nbsp; Add New Card
                </button>
            </div>
        </div>
        <div class="row">
            <CardCard v-for="(key, img) in images" :key="key" :image="img" />
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
                <div class="modal-body">
                    <div class="card">
                        <div class="card-body">
                            <form>
                                <!-- Adding card Name -->
                                <div class="mb-3">
                                    <label for="cardName" class="form-label">Card Name</label>
                                    <input type="text" class="form-control" id="cardName">
                                </div>
                                <!-- Adding card Description -->
                                <div class="mb-3">
                                    <label for="cardDesc" class="form-label">Card Description</label>
                                    <textarea class="form-control" id="cardDesc" rows="3"></textarea>
                                </div>
                                <!-- Adding List Name -->
                                <div class="mb-3">
                                    <label for="listType" class="form-label">List Name</label>
                                    <select class="form-select" id="listType" aria-label="Default select example">
                                        <option selected>Select Any List</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <!-- Adding card Deadline Date -->
                                <div class="mb-3">
                                    <label for="deadLine" class="form-label">DeadLine Date</label>
                                    <input type="date" class="form-control" id="deadLine" >
                                </div>
                                
                                <!-- Adding card completion flag-->
                                <!-- <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="completeCheck">
                                    <label class="form-check-label" for="completeCheck">Completed</label>
                                </div> -->
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-danger">Add Card</button>
                </div>
            </div>
        </div>
    </div>

    
</template>

<script>
import PersonalNavbar from '../components/PersonnalNavbar.vue'
import CardCard from '../components/ListOfcard.vue'
export default {
    data() {
        return {
            images: ['pic1.jpg', 'pic2.jpg', 'pic2.jpg']
        }
    },
    components: {
        PersonalNavbar,
        CardCard
    }
}
</script>
<style>

</style>
