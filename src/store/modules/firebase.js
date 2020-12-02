import firebase from 'firebase/app'
import 'firebase/auth'

const state = {
    submitResult: null,
},
getters = {
    firebaseAuthSubmitResult: state => state.submitResult,
},
actions = {
    firebaseAuthSubmit({ commit }, { username, email, password }) {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(data => {
                data.user
                    .updateProfile({
                        displayName: username
                    })
                    .then(() => { commit('firebaseAuthSubmit', true) });
            })
            .catch(() => {
                commit('firebaseAuthSubmit', false);
            });
    },
},
mutations = {
    firebaseAuthSubmit: (state, data) => state.submitResult = data,
}

export default {
    state,
    actions,
    getters,
    mutations
}