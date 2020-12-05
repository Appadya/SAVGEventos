import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = require('../firebase-config.json');
firebase.initializeApp(config);

const db = firebase.firestore(),
      auth = firebase.auth()

export {
    db,
    auth
}