import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBruz7vqar_eojDg-OK4XoPSCkTQ5qQlb0",
  authDomain: "crophawk-f0913.firebaseapp.com",
  databaseURL: "https://crophawk-f0913-default-rtdb.firebaseio.com",
  projectId: "crophawk-f0913",
  storageBucket: "crophawk-f0913.appspot.com",
  messagingSenderId: "525825726834",
  appId: "1:525825726834:web:c477a0aa352061eea8a5eb"
};
        
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);
const dbref = ref(db);

let email_input = document.getElementById('femail');
let password_input = document.getElementById('fpassword');
let main_form = document.getElementById('login_form');

let SignInUser = evt =>{
  evt.preventDefault();
  signInWithEmailAndPassword(auth, email_input.value, password_input.value).then(credentials => {
    console.log(credentials);
    localStorage.setItem("credentials", JSON.stringify(credentials));
    window.location.assign('index.html');
    }).catch((error) => {
      alert(error);
      const errorCode = error.code;
      const errorMessage = error.message;
  });
}

main_form.addEventListener('submit', SignInUser);