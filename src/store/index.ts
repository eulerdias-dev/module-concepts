import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export class RootState { }

const store = new Vuex.Store<{}>({
  modules: {
  },
});

Object.assign(window, { $store: store });

export default store;