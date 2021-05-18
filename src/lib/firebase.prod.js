import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {seedDatabase} from "../seed";

const config = {
    apiKey: "AIzaSyC0V-pIOPVuJADV5kwLKK5ClJkYXrr_I6Q",
    authDomain: "netflix-clone-cf8b4.firebaseapp.com",
    projectId: "netflix-clone-cf8b4",
    storageBucket: "netflix-clone-cf8b4.appspot.com",
    messagingSenderId: "329507725580",
    appId: "1:329507725580:web:991ae6b1ead20abde9e929"
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export {firebase}