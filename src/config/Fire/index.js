
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCulcIxQ4RBuANK6G9BoFvsUjND-kc7qbM",
  authDomain: "kontak-thor-d1739.firebaseapp.com",
  databaseURL: "https://kontak-thor-d1739.firebaseio.com",
  projectId: "kontak-thor-d1739",
  storageBucket: "kontak-thor-d1739.appspot.com",
  messagingSenderId: "855819828737",
  appId: "1:855819828737:web:df8ab6346c46b63a8a8a00"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics(firebaseConfig);

const Fire = firebase ;

export default Fire ;