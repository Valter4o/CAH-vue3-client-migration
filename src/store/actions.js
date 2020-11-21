import Vue from "vue";

export default {
  fetchItem({ commit, state }, { endpoint }) {
    return new Promise((resolve, reject) => {
      Vue.axios
        .get(endpoint)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          //TODO
        });
    });
  },

  fetchItems({ dispatch }, { endpoints }) {
    return Promise.all(
      endpoints.map((endpoint) => dispatch("fetchItem", { endpoint }))
    );
  },
};
