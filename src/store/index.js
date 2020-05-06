/*jshint esversion: 6 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    units: [],
    dispLines: [],
    specBuildings: [],
    specUtilities: [],

  },
  getters: {
    getUnits(state) {
      return state.units;  //can implement to get the data by id or matching 
    },

    getDispLines(state) {
      return state.dispLines;
    },

    getSpecBuildings(state) {
      return state.specBuildings;
    }

  },
  mutations: {   //synchronous 
    setUnits(state, payload){
      state.units = payload;
    },
    setDispLines(state, payload){
      state.dispLines = payload;
    },
    setSpecBuildings(state, payload){
      state.specBuildings = payload;
    },
    setSpecUtilities(state, payload){
      state.specUtilities = payload;
    }
  },
  actions: {    //asynchronous
    setUnits(context, payload){
      context.commit('setUnits', payload);
    },
    setDispLines(context, payload){
      context.commit('setDispLines', payload);
    },
    setSpecBuildings(context, payload){
      context.commit('setSpecBuildings', payload);
    },
    setSpecUtilities(context, payload){
      context.commit('setSpecUtilities', payload);
    }
  },
  modules: {
  }
});
