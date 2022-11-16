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
    <div class="row">
      <CardCard
        v-for="card in allCard"
        :key="card.cardId"
        :cardId="card.cardId"
        :cardName="card.cardName"
        :cardDescription="card.cardDescription"
        :deadLineDate="card.deadLineDate"
        :status="card.status"
        :listId="listId"
      />
    </div>
  </div>
  <!-- ----------------------------------------------------------------------------------------------------------- -->
  <!-- Modal for the Adding Card-->
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
    };
  },
  computed: {
    allCard: () => {
      return store.state.getAllCard;
    },
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
