import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = require('../firebase-config.json');
firebase.initializeApp(config);

const db = firebase.firestore(),
    auth = firebase.auth(),
    coll_name = 'savge_users';

class FirebaseManager {
    static loginUser(email, password, callback) {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                return callback(true, null)
            })
            .catch((err) => {
                return callback(false, err.message)
            });
    }

    static registerUser(name, email, password, callback) {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((data) => {
                data.user
                    .updateProfile({ displayName: name })
                    .then(() => {
                        db
                            .collection(coll_name)
                            .doc(email)
                            .set({
                                username: name,
                            })
                            .then(() => {
                                return callback(true, null)
                            });
                    })
                    .catch((err) => {
                        return callback(false, err.message)
                    });
            });
    }

    static logOutUser(callback) {
        auth.signOut().then(() => {
            return callback(true, null)
        })
        .catch((err) => {
            return callback(false, err.message)
        })
    }
}

export {
    FirebaseManager,
    db,
    auth
}