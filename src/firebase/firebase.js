import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = require('../firebase-config.json');
firebase.initializeApp(config);

const db = firebase.firestore(),
    auth = firebase.auth(),
    coll_name = 'savge_users',
    coll_name_places = 'favorite_places';

class FirebaseManager {
    static getUser(email, callback) {
        db
            .collection(coll_name)
            .doc(email)
            .get()
            .then((coll) => {
                return callback(true, coll.data())
            })
            .catch((err) => {
                return callback(false, err.message)
            })
    }

    static setUserFavorite(email, place, callback) {
        db
            .collection(coll_name)
            .doc(email)
            .collection(coll_name_places)
            .doc()
            .set(place)
            .then(() => {
                return callback(true, null)
            })
            .catch((err) => {
                return callback(false, err.message)
            })
    }

    static getUserFavorite(email, callback) {
        db
            .collection(coll_name)
            .doc(email)
            .collection(coll_name_places)
            .get()
            .then((snap) => {
                return callback(true, null, snap.docs.map((doc) => doc.data()))
            })
            .catch((err) => {
                return callback(false, err.message, null)
            })
    }

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
                                isAdmin: false,
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