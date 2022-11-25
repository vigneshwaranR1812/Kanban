<template>
    <PersonalNavbar></PersonalNavbar>
    
    <div class="container">
        <div class="row mt-4 mb-3">
            <div class="col-md-6 col-sm-12">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/dashboard">DashBoard</a></li>
        
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
                        <h5 class="card-title">Edit List Details</h5>
                        <form @submit.prevent="fetchListData" autocomplete="off">
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
import {router} from '../main.js';
export default {
    components:{
        PersonalNavbar,
    },
    data:()=>{
        return {
           

        }
    },
    computed:{
        listName:{
            get() {
                return this.$store.state.getList.listName
            },
            set(value) {
                this.$store.commit('setListName', value)
            }
        },
        listDescription: {
            get() {
                return this.$store.state.getList.listDescription
            },
            set(value) {
                this.$store.commit('setListDescription', value)
            }
        }

    },
    methods:{
        fetchListData:()=>{
            const formData=new FormData();
            console.log(store.state.getList.listName);
            console.log(store.state.getList.listDescription);

            formData.append("listName",store.state.getList.listName);
            formData.append("listDescription", store.state.getList.listDescription);
            formData.append("imageName", "imageName");
            console.log(formData)
            store.dispatch('updateListById',formData)

        }
    }
    ,
    created:async ()=>{
        
        console.log(router.currentRoute._value.params.id);
        store.dispatch('getList', router.currentRoute._value.params.id)
    }
    
}

</script>