import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  //state of the website
  state: {
    //data about the user
    userData:
      localStorage.getItem("userDetails") !== null
        ? JSON.parse(localStorage.getItem("userDetails"))
        : {},
    //data about the all the list
    allList: [],
    //data about the list based on id
    getList: {},
    //data about the all card
    getAllCard: [],
    //data about the card by id
    getCard: {},
    //data about the all the card count
    allCardCount: [],
  },
  //changing data in state
  mutations: {
    //updates the user data
    addUserData: (state, data) => {
      state.userData = data;
    },
    //remove the users data on logout
    logOut: (state) => {
      localStorage.removeItem("userDetails");
      state.userData = null;
      state.allList = null;
    },
    //updates the all list data
    getAllList: (state, data) => {
      state.allList = data;
    },
    //updates the list by id
    getList: (state, data) => {
      state.getList = data;
    },
    //updates the card count
    getAllCardCount: (state, data) => {
      var boolean = true;
      state.allCardCount.map((arr) => {
        if (arr.listId === data.listId) {
          boolean = false;
        }
        return;
      });
      if (boolean) state.allCardCount.push(data);
    },
    //updates the data from the forms
    setListName: (state, data) => {
      state.getList.listName = data;
    },
    setListDescription: (state, data) => {
      state.getList.listDescription = data;
    },
    //updates the data from the forms
    setCardName: (state, data) => {
      state.getCard.cardName = data;
    },
    setCardDescription: (state, data) => {
      state.getCard.cardDescription = data;
    },
    setCardDeadLineDate: (state, data) => {
      state.getCard.deadLineDate = data;
    },
    setCardListId: (state, data) => {
      state.getCard.listId = data;
    },
    setCardStatus: (state, data) => {
      state.getCard.status = data;
    },
    //updates the card by list id
    getAllCardById: (state, data) => {
      state.getAllCard = data;
    },
    //updates the card by card id and list id
    getCard: (state, data) => {
      state.getCard = data;
    },
  },
  //to perform an action in which mutations are called
  actions: {
    //Implement the user login action
    loginUser: (context, data) => {
      context.commit("addUserData", data);
    },
    //Implement the user logout action
    logOutUser: (context) => {
      context.commit("logOut");
    },
    //Implement the all card count action
    getAllCardCount: async (context, list) => {
      console.log(typeof list);
      console.log(store.state.userData.token);

      const config = {
        headers: {
          "x-access-token": store.state.userData.token,
        },
      };
      await list.map(async (ls) => {
        try {
          const { data } = await axios.get(
            "/getCardCount/" + ls.listId,
            config
          );
          console.log(data);
          var val = {
            tc: data.total_cards,
            cc: data.completed_card,
            ic: data.incomplete_card,
            listId: ls.listId,
          };
          context.commit("getAllCardCount", val);
          console.log(store.state.allCardCount);
        } catch (err) {
          // context.commit("logOut");
          // window.location.href = "/login";
        }
      });
    },
    //Implement the get all list action
    getAllList: async (context, token) => {
      const config = {
        headers: {
          "x-access-token": token,
        },
      };
      console.log(token);
      try {
        const { data } = await axios.get("/getAllList", config);
        context.commit("getAllList", data.Lists);
        console.log(data);
        context.dispatch("getAllCardCount", data.Lists);
      } catch (err) {
        context.commit("logOut");
        window.location.href = "/login";
      }
    },
    //Implement the get list by id
    getList: async (context, id) => {
      const config = {
        headers: {
          "x-access-token": store.state.userData.token,
        },
      };
      console.log(store.state.userData.token);
      console.log(id);
      try {
        const { data } = await axios.get("/getList/" + id, config);
        console.log(data.message);
        context.commit("getList", data.message);
      } catch (err) {
        context.commit("logOut");
        window.location.href = "/login";
      }
    },
    //Implement the updating list by id
    updateListById: async (context, formData) => {
      const config = {
        headers: {
          "Content-Type": "multipart/form-date",
          "x-access-token": store.state.userData.token,
        },
      };
      try {
        const { data } = await axios.post(
          "/updatelisttitle/" + store.state.getList.listId,
          formData,
          config
        );
        console.log(data.message);
        context.dispatch("getAllList", store.state.userData.token);
        console.log("dispatched");
        setTimeout(alert("SuccessFully Updated!"), 2000);
        window.location.href = "/dashboard";
      } catch (err) {
        context.commit("logOut");
        window.location.href = "/login";
      }
    },
    //Implement the deleting list by id
    deleteList: async (context, { data, id }) => {
      console.log(data);
      // const config = {
      //   headers: {
      //     "x-access-token": data,
      //   },
      // };
      try {
        const { datas } = await axios.post(
          "/deleteList/" + id,
          {},
          {
            headers: {
              "x-access-token": data,
            },
          }
        );
        console.log(datas);
        console.log(store.state.userData.token);
        context.dispatch("getAllList", store.state.userData.token);
        console.log("dispatched");
        setTimeout(alert("SuccessFully Deleted!"), 2000);
      } catch (err) {
        console.log(err);
        context.commit("logOut");
        window.location.href = "/login";
      }
    },
    //Implement the get all card by list id
    getAllCardById: async (context, id) => {
      const config = {
        headers: {
          "x-access-token": store.state.userData.token,
        },
      };
      console.log(id);
      try {
        const { data } = await axios.get("/getAllCard/" + id, config);
        console.log(data.message);
        if (data.message === "Cannot display all card") {
          // window.location.href = "/dashboard";
          console.log(data);
        } else {
          store.commit("getAllCardById", data.message);
        }
      } catch (err) {
        context.commit("logOut");
        window.location.href = "/login";
      }
    },
    //Implement the get all card by list id anc card id
    getCard: async (context, { listId, cardId }) => {
      const config = {
        headers: {
          "x-access-token": store.state.userData.token,
        },
      };
      console.log(listId, cardId);
      try {
        const { data } = await axios.get(
          "/getCard/" + listId + "/" + cardId,
          config
        );

        if (data.message && data.message === "There is no such List.") {
          window.location.href = "/list/" + listId;
        } else {
          console.log(data.card);
          store.commit("getCard", data.card);
        }
      } catch (err) {
        context.commit("logOut");
        window.location.href = "/login";
      }
    },
    //Implement the update card by list id  and card id
    updateCard: async (context, { listId, cardId, formData }) => {
      const config = {
        headers: {
          "Content-Type": "multipart/form-date",
          "x-access-token": store.state.userData.token,
        },
      };
      console.log(listId, cardId);
      try {
        const { data } = await axios.post(
          "/updateCard/" + listId + "/" + cardId,
          formData,
          config
        );

        if (data.message && data.message === "There is no such List.") {
          window.location.href = "/list/" + listId;
        } else {
          window.location.href = "/list/" + listId;
        }
      } catch (err) {
        // context.commit("logOut");
        // window.location.href = "/login";
      }
    },
    //Implement the delete card by list id and card id
    deleteCard: async (context, { data, listId, cardId }) => {
      console.log(data);
      const config = {
        headers: {
          "x-access-token": data,
        },
      };
      try {
        const { datas } = await axios.post(
          "/deleteCard/" + listId + "/" + cardId,
          {},
          config
        );
        console.log(data);
        console.log(datas);
        console.log(store.state.userData.token);
        context.dispatch("getAllCardById", listId);
        console.log("dispatched");
        setTimeout(alert("SuccessFully Deleted!"), 2000);
      } catch (err) {
        console.log(err);
        context.commit("logOut");
        window.location.href = "/login";
      }
    },
    //Implement the create Card
    createCard: async (context, { formData, listId }) => {
      const config = {
        headers: {
          "x-access-token": store.state.userData.token,
          "Content-Type": "multipart/form-date",
        },
      };
      try {
        const { datas } = await axios.post(
          "/createCard/" + listId,
          formData,
          config
        );

        console.log(datas);
        console.log(store.state.userData.token);
        window.location.reload();
        context.dispatch("getAllCardById", listId);
        console.log("dispatched");
      } catch (err) {
        console.log(err);
        context.commit("logOut");
        window.location.href = "/login";
      }
    },
  },
});

export default store;
