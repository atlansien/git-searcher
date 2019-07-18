import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { CHANGE_KEYWORD, SEARCH } from "./store/mutation-types";

function getGIFs(query) {
  const params = encodeURIComponent(query).replace(/%20/g, `+`);
  return fetch(
    "http://api.giphy.com/v1/gifs/search?q=" + params + "&api_key=dc6zaTOxFJmzC"
  ).then(res => res.json());
}

export default new Vuex.Store({
  state: {
    keyword: "",
    gifs: []
  },
  mutations: {
    [CHANGE_KEYWORD](state, keyword) {
      state.keyword = keyword;
    },
    [SEARCH](state, gifs) {
      state.gifs = gifs.data;
    }
  },
  actions: {
    [CHANGE_KEYWORD]({ commit }, keyword) {
      commit(CHANGE_KEYWORD, keyword);
    },
    [SEARCH]({ commit }, state) {
      getGIFs(state.keyword).then(data => {
        commit(SEARCH, data);
      });
    }
  }
});
