import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBsbEIrRBKVipyOMGFLcl5xUfWBdjtqkro",
    authDomain: "todoapp-84991.firebaseapp.com",
    projectId: "todoapp-84991",
    storageBucket: "todoapp-84991.appspot.com",
    messagingSenderId: "425296661782",
    appId: "1:425296661782:web:d7fd5b7bfe6afaa64e1437",
    measurementId: "G-2SRJEFNR52"
  };

  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);