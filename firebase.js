import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCQtBaMx1kJUc3cUhV2OlB_xBTeBG0CIdE',
  authDomain: 'nonprofdev.firebaseapp.com',
  databaseURL: 'https://nonprofdev-default-rtdb.firebaseio.com',
  projectId: 'nonprofdev',
  storageBucket: 'nonprofdev.appspot.com',
  messagingSenderId: '135728428832',
  appId: '1:135728428832:web:868a5bf1ecaab0db0ec945',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export { firebase }
