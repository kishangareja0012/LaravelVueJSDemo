import { createApp } from 'vue'
import { createStore } from 'vuex'
import { AUTH_SUCCESS } from './mutation_types'
import { AUTH_ERROR } from './mutation_types'
import { LOGOUT } from './mutation_types'

// Create a new store instance.
const state = {
  token: '',
  isLogout: false
}

const mutations = {
  [AUTH_SUCCESS] (state, response) {
    state.user = response;
  },
  [AUTH_ERROR] (state) {
    state.user = '';
  },
  [LOGOUT] (state, response) {
    state.isLogout = true;
  },
}

const actions = {
  loginAction ({ commit }, user) {
    axios({ url: 'api/login', data: user, method: 'POST' })
    .then(resp => {
      const response = resp.data.data
      commit('AUTH_SUCCESS', response)
    })
    .catch(err => {
      commit('AUTH_ERROR')
    })
  },
  logout ({ commit }, user) {
    axios({ url: 'api/logout', data: user, method: 'POST' })
    .then(resp => {
      commit('LOGOUT', resp)
    })
    .catch(err => {
      commit('AUTH_ERROR')
    })
  },
}

export default {
  state,
  mutations,
  actions
};
