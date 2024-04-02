import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAcc5qXhKyVdmP4FmCh3kloICaFIta7tsY",
    authDomain: "test-939cb.firebaseapp.com",
    projectId: "test-939cb",
    storageBucket: "test-939cb.appspot.com",
    messagingSenderId: "71727616978",
    appId: "1:71727616978:web:3cefb90e47103cca9cee0b"
  };
        
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

let email_input = document.getElementById('femail');
let name_input = document.getElementById('fname');
let password_input = document.getElementById('fpassword');
let main_form = document.getElementById('login_form');

let RegisterUser = evt =>{
    evt.preventDefault();

    createUserWithEmailAndPassword(auth, email_input.value, password_input.value).then(credentials => {
        console.log(credentials);
        localStorage.setItem("credentials", JSON.stringify(credentials));
        window.location.assign('index.html');
    }).catch((error) => {
        alert(error);
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}

main_form.addEventListener('submit', RegisterUser);