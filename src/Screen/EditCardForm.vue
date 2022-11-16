<template>
    <PersonalNavbar></PersonalNavbar>

    <div class="container">
        <div class="row mt-4 mb-3">
            <div class="col-md-6 col-sm-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/dashboard">DashBoard</a></li>
                        <li class="breadcrumb-item"><a :href="'/list/'+listId">List</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Edit List</li>
                    </ol>
                </nav>
            </div>
            <div class="col-md-6 col-sm-12 px-auto d-flex justify-content-end">

            </div>
        </div>
        <div class="row">
            <div class="col-md-2 col-lg-3"></div>
            <div class="col-sm-12 col-md-8 col-lg-6">
                <div class="card" style="width: 100%;">

                    <div class="card-body">
                        <h5 class="card-title">Edit Card Details</h5>
                        <form @submit.prevent="updateCardData" >
                            <!-- Editing card Name -->
                            <div class="mb-3">
                                <label for="cardName" class="form-label">Card Name</label>
                                <input type="text" class="form-control" id="cardName" v-model="cardName">
                            </div>
                            <!-- Editing card Description -->
                            <div class="mb-3">
                                <label for="cardDesc" class="form-label">Card Description</label>
                                <textarea class="form-control" id="cardDesc" rows="3" v-model="cardDescription"></textarea>
                            </div>
                            <!-- Editing List Name -->
                            <div class="mb-3">
                                <label for="listType" class="form-label">List Name</label>
                                <select class="form-select" id="listType" aria-label="Default select example" v-model="selectData">
                                    <option v-for="list in allList" :key="list.listId" v-bind:value="list.listId">{{list.listName}}</option>
                                </select>
                            </div>
                            <!-- Editing card Deadline Date -->
                            <div class="mb-3">
                                <label for="deadLine" class="form-label">DeadLine Date</label>
                                <input type="date" class="form-control" id="deadLine" v-bind:min="datePickerId" v-model="deadLineDate">
                            </div>
                            <!-- Editing card completion flag-->
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="completeCheck" v-model="status">
                                <label class="form-check-label" for="completeCheck">Completed</label>
                            </div>
                            <div class="mb-3">
                                <a type="button" class="btn btn-dark" href="/dashboard">Go Back</a>
                                <button type="submit" class=" ms-3 btn btn-danger">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-2 col-lg-3"></div>
        </div>
    </div>
</template>
<script>

import store from '@/Store';

import PersonalNavbar from '../components/PersonnalNavbar.vue'
import { router } from '../main.js';
export default {
    components: {
        PersonalNavbar,
    },
    data: () => {
        return {
            datePickerId: new Date().toISOString().split("T")[0],
            listId:router.currentRoute._value.params.listId

        }
    },
    computed: {
        cardName: {
            get() {
                return this.$store.state.getCard.cardName
            },
            set(value) {
                this.$store.commit('setCardName', value)
            }
        },
        cardDescription: {
            get() {
                return this.$store.state.getCard.cardDescription
            },
            set(value) {
                this.$store.commit('setCardDescription', value)
            }
        },
        selectData: {
            get() {
                return this.$store.state.getCard.listId
            },
            set(value) {
                this.$store.commit('setCardListId', value)
            }
        },
        deadLineDate: {
            get() {
                return this.$store.state.getCard.deadLineDate
            },
            set(value) {
                this.$store.commit('setCardDeadLineDate', value)
            }
        },
        status: {
            get() {
                return this.$store.state.getCard.status
            },
            set(value) {
                this.$store.commit('setCardStatus', value)
            }
        },
        allList:()=>{
            return store.state.allList;
        }
       

    },
    methods: {
        updateCardData: () => {
            const formData = new FormData();
            console.log(store.state.getList.listName);
            console.log(store.state.getList.listDescription);

            formData.append("cardName", store.state.getCard.cardName);
            formData.append("cardDescription", store.state.getCard.cardDescription);
            formData.append("deadLineDate", store.state.getCard.deadLineDate);
            formData.append("listName", store.state.getCard.listId);
            // formData.append("", store.state.getList.listName);
            // formData.append("cardDescription", store.state.getCard.cardDescription);
            // store.dispatch('updateListById', formData)
            
            const promt=window.prompt("Are you sure you v=want to edit the Card Details? Confirm By typing `Edit Card`");
            if(promt==='Edit Card')
            store.dispatch('updateCard', { listId: router.currentRoute._value.params.listId, cardId: router.currentRoute._value.params.cardId,formData:formData })
            else{
                window.location.href = "/list/" + router.currentRoute._value.params.listId;
            }
        }
    },
    created: async () => {
        store.dispatch('getAllList', store.state.userData.token)
        store.dispatch('getCard', { listId: router.currentRoute._value.params.listId, cardId: router.currentRoute._value.params.cardId})
    }

}

</script>