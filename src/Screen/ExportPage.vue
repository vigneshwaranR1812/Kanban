<template>
    <!-- navbar to navigate -->
    <PersonalNavbar/>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Export Data</h5>
                        <p class="card-text">Export The Data In required Format. You can download them as CSV as Well as PDF. Choose the format that u need</p>
                        <div class="d-flex justify-content-between">
                        <a href="#"  @click="updateFlag(1)" class="btn btn-primary">Export as PDF</a>
                        <a href="#" @click="updateFlag(0)" class="btn btn-primary">Export as CSV</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4"></div>
        </div>
        <div v-if="(flag===1)" id="divToPrint" class="mt-5">
            
            <!-- table to display card data -->
            <h4>Card Details</h4>
            <div class="table-responsive">
            <table class="table table-bordered" @click="printDocument()">
                
                <thead>
                    <tr>
                        <th>Card Id</th>
                        <th>Card Name</th>
                        <th>Card Description</th>
                        <th>Card Created Date</th>
                        <th>Card Completed Date</th>
                        <th>Card DeadLine Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="card in getAllCardData" :key="card.cardId">
                        <td>{{card.cardId}}</td>
                        <td>{{card.cardName}}</td>
                        <td>{{card.cardDescription}}</td>
                        <td>{{ card.cardCreatedDate }}</td>
                        <td>{{ card.cardCompletedDate !== "0000-00-00" ? cardCompletedDate:"Not Completed" }}</td>
                        <td>{{ card.deadLineDate }}</td>
                        <td>{{ card.status === "false" ? "Not Completed":"Completed" }}</td>
                       
                    </tr>
                    
                </tbody>
            </table>
            </div>
        </div>
        <div v-if="(flag===0)"  id="app" class="mt-5 text-center">
            <h2>Export data to CSV</h2>
            <button class="btn btn-primary" @click="exportData">Download CSV file</button>
        </div>
       
    </div>
</template>
<script>
import { excelParser } from "../excel-parser";
import PersonalNavbar from '../components/PersonnalNavbar.vue'
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
import store from '@/Store';
import { router } from '@/main';

export default {
    components:{
        PersonalNavbar
    },
    data:()=>{
        return {
            flag:-1
        }
    },
    computed:{
        getAllCardData:()=>{
            console.log(store.state.getAllCard)
            return store.state.getAllCard;
        },
        getList: () => {
            console.log(store.state.getList)
            return store.state.getList;
        },
        listId:()=>{
            return router.currentRoute._value.params.listId
        }
    },
    methods: {
        updateFlag(data){
            this.flag=data
        },
        printDocument() {


            //get table html
            const pdfTable = document.getElementById('divToPrint');
            //html to pdf format
            var html = htmlToPdfmake(pdfTable.innerHTML);

            const documentDefinition = { content: html };
            pdfMake.vfs = pdfFonts.pdfMake.vfs;
            pdfMake.createPdf(documentDefinition).open();

        },
        exportData() {
            excelParser().exportDataFromJSON(this.getAllCardData, null, null);
        },
    },
    created: async () => {

        

        store.dispatch('getAllCardById', router.currentRoute._value.params.listId);
        store.dispatch('getList', router.currentRoute._value.params.listId);

    }
}
</script>
