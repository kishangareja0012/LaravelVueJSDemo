import { createStore } from 'vuex'
import { GET_SUBJECT } from './mutation_types'
import { GET_USER_SUBJECT } from './mutation_types'
import { AUTH_ERROR } from './mutation_types'

// Create a new store instance.
const state = {
    subjects: [],
    userSubjects:[],
}

const getters = {
  userSubject: (state) => state.userSubjects
};

const mutations = {
    [GET_SUBJECT] (state, response) {
        state.subjects = response;
    },
    [GET_USER_SUBJECT] (state, response) {
      state.userSubjects = response;
    },
    [AUTH_ERROR] (state) {
      state.user = '';
    },
}
const actions = {
    getSubjects ({ commit }) {
        axios({ url: 'api/get_subject', method: 'GET' })
        .then(resp => {
          const response = resp.data.data
          commit('GET_SUBJECT', response)
        })
        .catch(err => {
          commit('AUTH_ERROR')
        })
    },
    createSubject ({ commit }, subject) {
        axios({ url: 'api/store_subject', data: subject, method: 'POST' })
        .then(resp => {
          const response = resp.data.data
        })
        .catch(err => {
          commit('AUTH_ERROR')
        })
    },
    getUserSubject ({ commit }, user_id) {
      axios({ url: 'api/get_user_subject', data: user_id, method: 'POST' })
      .then(resp => {
        const response = resp.data.data
        commit('GET_USER_SUBJECT', response)
      })
      .catch(err => {
        commit('AUTH_ERROR')
      })
  },
}

export default {
    state,
    actions,
    mutations,
    getters,
};
