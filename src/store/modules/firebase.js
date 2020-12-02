import firebase from 'firebase/app'
import 'firebase/auth'

const state = {
    loggedIn: false,
    // data: null,
    submitResponse: null,
    signInResponse: null,
},
getters = {
    firebaseAuthSubmitResponse: state => state.submitResponse,
    firebaseAuthSignInResponse: state => state.signInResponse,
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
    firebaseAuthSignIn({ commit }, { email, password }){
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            commit('firebaseAuthSignIn', { name: 'Dashboard' }, true);
        })
        .catch(() => {
            commit('firebaseAuthSignIn', null, false)
        })
    },
},
mutations = {
    firebaseAuthSubmit: (state, data) => state.submitResponse = data,
    firebaseAuthSignIn: (state, data) => state.signInResponse = data,
}

export default {
    state,
    actions,
    getters,
    mutations
}