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
    
    <ul class="nav nav-tabs mt-4" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab"
          aria-controls="home" aria-selected="true">Active Task</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab"
          aria-controls="profile" aria-selected="false">Completed Task</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#summary" type="button" role="tab"
          aria-controls="profile" aria-selected="false">Summary</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <div class="row">
          <CardCard v-for="card in allActiveCard"  :key="card.cardId" :cardId="card.cardId" :cardName="card.cardName"
            :cardDescription="card.cardDescription" :deadLineDate="card.deadLineDate" :status="card.status" :listId="listId" />
        </div>
    </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div class="row">
          <CardCard v-for="card in allCompletedCard" :key="card.cardId" :cardId="card.cardId" :cardName="card.cardName"
            :cardDescription="card.cardDescription" :deadLineDate="card.deadLineDate" :status="card.status" :listId="listId" :cardCompletedDate="card.cardCompletedDate" />
        </div>
      </div>
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
import { Chart, registerables } from 'chart.js';

import PersonalNavbar from "../components/PersonnalNavbar.vue";
import CardCard from "../components/ListOfcard.vue";
import { router } from "@/main";
import store from "@/Store";
// import axios from 'axios'
export default {
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
  async mounted(){
    setTimeout(()=>{
      console.log(store.state.getAllCard)
      
      console.log(this.completedForMonth);
      console.log(this.notCompletedForMonth);
      console.log(this.allCardForMonth);
      Chart.register(...registerables);
      const ctx = document.getElementById('myChart');
      const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      const data = {
        labels: labels,
        datasets: [{
          label: 'Task Accomplished',
          data: this.completedForMonth,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
        {
          label: 'Task Created',
          data: this.allCardForMonth,
          fill: false,
          borderColor: 'rgb(255, 192, 192)',
          tension: 0.1
        },
          {
            label: 'Task Not Yet Completed',
            data: this.notCompletedForMonth,
            fill: false,
            borderColor: 'rgb(45, 192, 30)',
            tension: 0.1
          }
      ]
      };
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
            y1: {
              type: 'linear',
              display: true,
              position: 'right',

              // grid line settings
              grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
              },
            },
          }
        },
      };
      new Chart(ctx, config);
      this.loading=false
    },5000)
    
  },
  computed: {
    allActiveCard: () => {
      return store.state.getAllCard.filter((arr)=>{
        return arr.status==='false'
      });

    },
    allCompletedCard: () => {
      return store.state.getAllCard.filter((arr) => {
        return arr.status === 'true'
      });

    },
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
    allCardForMonth:()=>{
      var dataArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      const year = new Date().getFullYear();
      const data = store.state.getAllCard.filter((arr)=>{
        return new Date(arr.cardCreatedDate).getFullYear()===year;
      });
      data.map((maps) => {
        var data = maps.cardCreatedDate;
        data = new Date(data).getMonth();
        dataArr[data]++;
      })
      return dataArr;

    },
    cardCount:()=>{
      return store.state.getAllCard.length;
    },
    countActiveCard:()=>{
      return store.state.getAllCard.filter((arr) => {
        return arr.status === 'false'
      }).length;
    },
    countCompletedCard: () => {
      return store.state.getAllCard.filter((arr) => {
        return arr.status === 'true'
      }).length;
    },
    countDeadLineCard: () => {
      return store.state.getAllCard.filter((arr) => {
        return new Date(arr.deadLineDate) < new Date()
      }).length;
    }


  },

  methods: {
    async submitNewCard() {
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
        //update card details
        console.log("post data");
        const formData = new FormData();
        // const config = {
        //     headers: {
        //         'Content-Type': 'multipart/form-date',
        //         'x-access-token': store.state.userData.token
        //     },
        // }
        formData.append("cardName", this.cardName);
        formData.append("cardDescription", this.cardDescription);
        formData.append("deadLineDate", this.cardDeadline);
        var listId = router.currentRoute._value.params.id;
        store.dispatch("createCard", { formData: formData, listId: listId });
        // const { data } = await axios.post("createCard/" + listId, formData, config);
        // console.log(data);

        // setTimeout(
        //     window.location.reload()
        //     , 2000);
      }
    },
  },
  components: {
    PersonalNavbar,
    CardCard,
  },
  created: async () => {
    console.log(router.currentRoute._value.params.id);
    store.dispatch("getAllCardById", router.currentRoute._value.params.id);
  },
};
</script>
<style></style>
