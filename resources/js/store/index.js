import { createStore } from 'vuex'
import store from './store'
import subject from './subject'
import VuexPersistence from 'vuex-persist';
import localForage from 'localforage';
import createPersistedState from "vuex-persistedstate";

export default new createStore({
    modules: {
        store,
        subject,
    },
    plugins: [createPersistedState()],
})
