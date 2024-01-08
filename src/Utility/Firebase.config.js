// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpY45qSaAUufs9St1hoEBkXQcEsVTWK3o",
  authDomain: "eventum-react.firebaseapp.com",
  projectId: "eventum-react",
  storageBucket: "eventum-react.appspot.com",
  messagingSenderId: "895299740143",
  appId: "1:895299740143:web:b84be62dd18bdd7b89161a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;