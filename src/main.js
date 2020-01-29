import { controler } from './controler/index.js';

const initMain = ( ) => {
    controler.changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => controler.changeTmp(window.location.hash));
} 

window.addEventListener('load', initMain);


// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyDxHOrrU82FVRYX5-0v6lZ1LvrdCfbY2Rs",
  authDomain: "ourpets-2f5ae.firebaseapp.com",
  databaseURL: "https://ourpets-2f5ae.firebaseio.com",
  projectId: "ourpets-2f5ae",
  storageBucket: "ourpets-2f5ae.appspot.com",
  messagingSenderId: "224498271699",
  appId: "1:224498271699:web:956afe3c3287e4d649db26",
  measurementId: "G-MF37Q9PYL6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  
  

