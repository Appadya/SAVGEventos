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
            commit('SET_LOGGED_IN', user !== null);
            if (user) {
                commit('SET_USER', { displayName: user.displayName, email: user.email })
            } else {
                commit('SET_USER', null)
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

// import firebase from 'firebase/app'
// import 'firebase/auth'

// const state = {
//     loggedIn: false,
//     // data: null,
//     submitResponse: null,
//     signInResponse: null,
// },
// getters = {
//     firebaseAuthSubmitResponse: state => state.submitResponse,
//     firebaseAuthSignInResponse: state => state.signInResponse,
// },
// actions = {
//     firebaseAuthSubmit({ commit }, { username, email, password }) {
//         firebase.auth()
//             .createUserWithEmailAndPassword(email, password)
//             .then(data => {
//                 data.user
//                     .updateProfile({
//                         displayName: username
//                     })
//                     .then(() => { commit('firebaseAuthSubmit', true) });
//             })
//             .catch(() => {
//                 commit('firebaseAuthSubmit', false);
//             });
//     },
//     firebaseAuthSignIn({ commit }, { email, password }){
//         firebase
//         .auth()
//         .signInWithEmailAndPassword(email, password)
//         .then(() => {
//             commit('firebaseAuthSignIn', { name: 'Dashboard' }, true);
//         })
//         .catch(() => {
//             commit('firebaseAuthSignIn', null, false)
//         })
//     },
// },
// mutations = {
//     firebaseAuthSubmit: (state, data) => state.submitResponse = data,
//     firebaseAuthSignIn: (state, data) => state.signInResponse = data,
// }

// export default {
//     state,
//     actions,
//     getters,
//     mutations
// }