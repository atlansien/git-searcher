import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { CHANGE_KEYWORD, SEARCH } from "./store/mutation-types";
export default new Vuex.Store({
  state: {
    keyword: "",
    gifs: []
  },
  mutations: {},
  actions: {}
});
