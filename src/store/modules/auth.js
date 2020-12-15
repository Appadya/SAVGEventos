import { FirebaseManager } from "../../firebase/firebase";

const state = {
    user: {
        loggedIn: false,
        data: null
    }
},
    getters = {
        user: (state) => state.user
    },
    actions = {
        fetchUser({ commit }, user) {
            if (user !== null) {
                commit('SET_LOGGED_IN', true);
                if (user) {
                    FirebaseManager.getUser(user.email, (response, result) => {
                        result.email = user.email
                        if(response) commit('SET_USER', result)
                    });
                } else {
                    commit('SET_USER', null)
                }
            } else {
                commit('SET_LOGGED_IN', false);
            }
        }
    },
    mutations = {
        SET_LOGGED_IN: (state, value) => state.user.loggedIn = value,
        SET_USER: (state, data) => state.user.data = data
    }

export default {
    state,
    actions,
    getters,
    mutations
}