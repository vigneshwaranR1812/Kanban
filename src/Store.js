import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  //state of the website
  state: {
    userData:
      localStorage.getItem("userDetails") !== null
        ? JSON.parse(localStorage.getItem("userDetails"))
        : {},
    allList: [],
    getList: {},
    getAllCard: [],
    getCard: {},
    allCardCount: [],
  },
  //changing data in state
  mutations: {
    addUserData: (state, data) => {
      state.userData = data;
    },
    logOut: (state) => {
      localStorage.removeItem("userDetails");
      state.userData = null;
      state.allList = null;
    },
    getAllList: (state, data) => {
      state.allList = data;
    },
    getList: (state, data) => {
      state.getList = data;
    },
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
    setListName: (state, data) => {
      state.getList.listName = data;
    },
    setListDescription: (state, data) => {
      state.getList.listDescription = data;
    },
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
    getAllCardById: (state, data) => {
      state.getAllCard = data;
    },
    getCard: (state, data) => {
      state.getCard = data;
    },
  },
  //to perform an action in which mutations are called
  actions: {
    loginUser: (context, data) => {
      context.commit("addUserData", data);
    },
    logOutUser: (context) => {
      context.commit("logOut");
    },
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
        context.dispatch("getAllCardCount", data.Lists);
      } catch (err) {
        context.commit("logOut");
        window.location.href = "/login";
      }
    },
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
