import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "",
    authDomain: "mario-plan-9371e.firebaseapp.com",
    databaseURL: "https://mario-plan-9371e.firebaseio.com",
    projectId: "mario-plan-9371e",
    storageBucket: "mario-plan-9371e.appspot.com",
    messagingSenderId: "692513625761",
    appId: "1:692513625761:web:69246777c08f3a3cc882e0",
    measurementId: "G-DED7NYDDW7"
  };
  firebase.initializeApp(firebaseConfig)
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase;