<template>
  <!-- Navigation Bar at the top -->
  <PersonalNavbar></PersonalNavbar>

  <div class="container">

    
    <div class="row mt-4 mb-3">
      <!-- BreadCrumbs Link to navigate different Pages -->
      <div class="col-md-6 col-sm-12">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/dashboard">DashBoard</a></li>

            <li class="breadcrumb-item active" aria-current="page">Cards</li>
          </ol>
        </nav>
      </div>
      <!--Button to add the new card for the list -->
      <div class="col-md-6 col-sm-12 px-auto d-flex justify-content-end">
        <button
          type="button"
          class="btn btn-dark px-3 py-1"
          data-bs-toggle="modal"
          data-bs-target="#addingCard"
        >
          <font-awesome-icon icon="plus" /> &nbsp; Add New Card
        </button>
      </div>
    </div>
    <!-- Three different Tabs to view the Task in categorized way  -->
    <ul class="nav nav-tabs mt-4" id="myTab" role="tablist">
      <!-- Active Task -->
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab"
          aria-controls="home" aria-selected="true">Active Task</button>
      </li>
      <!-- Completed Task -->
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab"
          aria-controls="profile" aria-selected="false">Completed Task</button>
      </li>
      <!-- Summary page -->
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#summary" type="button" role="tab"
          aria-controls="profile" aria-selected="false">Summary</button>
      </li>
    </ul>
    <!-- Content for the above mentioned tabs  -->
    <!-- Active Tabs -->
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div class="row">
          <CardCard v-for="card in allActiveCard"  :key="card.cardId" :cardId="card.cardId" :cardName="card.cardName"
            :cardDescription="card.cardDescription" :deadLineDate="card.deadLineDate" :status="card.status" :listId="listId" />
        </div>
    </div>
    <!-- Completed Tabs -->
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div class="row">
          <CardCard v-for="card in allCompletedCard" :key="card.cardId" :cardId="card.cardId" :cardName="card.cardName"
            :cardDescription="card.cardDescription" :deadLineDate="card.deadLineDate" :status="card.status" :listId="listId" :cardCompletedDate="card.cardCompletedDate" />
        </div>
      </div>
      <!-- Summary Tabs -->
      <div class="tab-pane fade mt-4" id="summary" role="tabpanel" aria-labelledby="profile-tab">
        <div class="row">
          <div class="col-sm-6 col-md-3">
            <div class="card text-dark bg-secondary mb-3">
              <div class="card-body">
                <h5 class="card-title text-center">Total Task</h5>
                <h5 class="card-text text-center">{{cardCount}}
                </h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="card text-white bg-success mb-3">
              <div class="card-body">
                <h5 class="card-title text-center">Completed Task</h5>
                <h5 class="card-text text-center">{{ countCompletedCard }}
                </h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="card text-white bg-warning mb-3">
              <div class="card-body">
                <h5 class="card-title text-center">Not Completed Task</h5>
                <h5 class="card-text text-center">{{countActiveCard}}
                </h5>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="card text-white bg-danger mb-3">
              <div class="card-body">
                <h5 class="card-title text-center">Deadline Task</h5>
                <h5 class="card-text text-center">{{ countDeadLineCard }}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="row mx-auto mb-5">
          <canvas width="90%" id="myChart"></canvas>
        </div>
      </div>
      
    </div>
    
    
  </div>
  <!-- Modal window for Creating new Card -->
  <div
    class="modal fade"
    id="addingCard"
    tabindex="-1"
    aria-labelledby="addingCard"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <!-- Header Title -->
        <div class="modal-header">
          <h5 class="modal-title" id="addingCard">Add New Card</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form id="addCardList" @submit.prevent="submitNewCard">
            <!-- Adding card Name -->
            <div class="mb-3">
              <label for="cardName" class="form-label">Card Name</label>
              <input type="text" class="form-control" id="cardName" v-model="cardName" />
            </div>
            <!-- Adding card Description -->
            <div class="mb-3">
              <label for="cardDesc" class="form-label">Card Description</label>
              <textarea
                class="form-control"
                id="cardDesc"
                rows="3"
                v-model="cardDescription"
              ></textarea>
            </div>
            <!-- Adding card Deadline Date -->
            <div class="mb-3">
              <label for="deadLine" class="form-label">DeadLine Date</label>
              <input
                type="date"
                class="form-control"
                id="deadLine"
                v-bind:min="datePickerId"
                v-model="cardDeadline"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark" data-bs-dismiss="modal">
            Close
          </button>
          <button type="submit" class="btn btn-danger" form="addCardList">
            Add Card
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// importing graph requirements
import { Chart, registerables } from 'chart.js';
// importing componenets
import PersonalNavbar from "../components/PersonnalNavbar.vue";
import CardCard from "../components/ListOfcard.vue";
//importing services
import { router } from "@/main";
import store from "@/Store";
export default {

  // Data I used in the above template
  data() {
    return {
      datePickerId: new Date().toISOString().split("T")[0],
      cardDescription: "",
      cardName: "",
      cardDeadline: "",
      listId: router.currentRoute._value.params.id,
      loading:true
    };
  },
  //This will be triggered when mounting the website
  async mounted(){
    setTimeout(()=>{
      //initializing the chart packages
      Chart.register(...registerables);
      const ctx = document.getElementById('myChart');
      //labeling the x-axis
      const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      //giving the data to the chart from computed feature given below 
      const data = {
        labels: labels,
        datasets: [
        //Task Accomplished by this month for this year  
        {
          label: 'Task Accomplished',
          data: this.completedForMonth,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
        //Task Created by this month for this year
        {
          label: 'Task Created',
          data: this.allCardForMonth,
          fill: false,
          borderColor: 'rgb(255, 192, 192)',
          tension: 0.1
        },
        //Task is on Deadline for this month for this year
          {
            label: 'Task Not Yet Completed',
            data: this.notCompletedForMonth,
            fill: false,
            borderColor: 'rgb(45, 192, 30)',
            tension: 0.1
          }
      ]
      };

      //Basic Configuration of chart js
      const config = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          stacked: false,
          plugins: {
            title: {
              display: true,
              text: 'Chart.js Line Chart - Multi Axis'
            }
          },
          scales: {
            y: {
              type: 'linear',
              display: true,
              position: 'left',
            },
            
          }
        },
      };
      new Chart(ctx, config);
      this.loading=false
    },5000)
    
  },
  computed: {

    //To get All cards/Task that are not completed
    allActiveCard: () => {
      return store.state.getAllCard.filter((arr)=>{
        return arr.status==='false'
      });

    },
    //To get All cards/Task that are  completed
    allCompletedCard: () => {
      console.log(store.state.getAllCard)
      return store.state.getAllCard.filter((arr) => {
        return arr.status === 'true'
      });

    },
    //To get count of task per month that are not completed
    notCompletedForMonth:()=>{
      var countArr=[0,0,0,0,0,0,0,0,0,0,0,0];
      // var year=new Date().getFullYear();
      // && new Date(arr.cardCreatedDate).getFullYear() === year
      console.log(store.state.getAllCard);
      var notCompleted=store.state.getAllCard.filter((arr) => {        
        return arr.status === 'false' && new Date(arr.deadLineDate) < new Date() 
      });
      
      notCompleted.map((maps) => {
        var data = maps.deadLineDate;
        data = new Date(data).getMonth();
        countArr[data]++;
      })
      console.log(countArr)
      return countArr
    },
    //To get count of task per month that are completed
    completedForMonth:()=>{
      var completedArr=[0,0,0,0,0,0,0,0,0,0,0,0];
      const year=new Date().getFullYear();
      const completed = store.state.getAllCard.filter((arr) => {
        return arr.status === 'true' && new Date(arr.cardCompletedDate).getFullYear() === year
      });
      completed.map((maps)=>{
        var data = maps.cardCompletedDate;
        data=new Date(data).getMonth();
        completedArr[data]++;
      })
      return completedArr;
    },
    //To get count of task per month that are created
    allCardForMonth:()=>{
      var dataArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      const year = new Date().getFullYear();
      const data = store.state.getAllCard.filter((arr)=>{
        return new Date(arr.cardCreatedDate).getFullYear()===year;
      });
      console.log(data)
      data.map((maps) => {
        var data = maps.cardCreatedDate;
        data = new Date(data).getMonth();
        dataArr[data]++;
        console.log("Hello")
      })
      return dataArr;

    },
    //To get count of total task 
    cardCount:()=>{
      return store.state.getAllCard.length;
    },
    //To get count of Active task 
    countActiveCard:()=>{
      return store.state.getAllCard.filter((arr) => {
        return arr.status === 'false'
      }).length;
    },
    //To get count of Completed task 
    countCompletedCard: () => {
      return store.state.getAllCard.filter((arr) => {
        return arr.status === 'true'
      }).length;
    },
    //To get count of Not Completed task 
    countDeadLineCard: () => {
      return store.state.getAllCard.filter((arr) => {
        return new Date(arr.deadLineDate) < new Date()
      }).length;
    }


  },

  methods: {

    //Creating New Task For the List
    async submitNewCard() {

      //Validation. Checking the regex
      var cardName = /^[a-zA-Z ]+$/;
      var cardDescription = /^[a-zA-Z ][a-zA-Z0-9 ]*$/;
      var flag = true;
      if (cardName.test(this.cardName) === false) {
        flag = false;
      }
      if (cardDescription.test(this.cardDescription) === false) {
        flag = false;
      }
      console.log(this.cardName);
      if (flag == false) {
        console.log("Error");
      } else {
        //Not Errors update card details
        console.log("post data");
        const formData = new FormData();
        formData.append("cardName", this.cardName);
        formData.append("cardDescription", this.cardDescription);
        formData.append("deadLineDate", this.cardDeadline);
        var listId = router.currentRoute._value.params.id;
        store.dispatch("createCard", { formData: formData, listId: listId });
       
      }
    },
  },
  //Imported Component
  components: {
    PersonalNavbar,
    CardCard,
  },

  //This method will be triggered when the component created
  created: async () => {
    console.log(router.currentRoute._value.params.id);
    store.dispatch("getAllCardById", router.currentRoute._value.params.id);
  },
};
</script>
<style></style>
