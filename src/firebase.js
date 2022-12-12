import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDtN3TfxOadTU_2IV6kYsnEmrZnYNH3oQ",
  authDomain: "auth-dev-93778.firebaseapp.com",
  projectId: "auth-dev-93778",
  storageBucket: "auth-dev-93778.appspot.com",
  messagingSenderId: "1016747414871",
  appId: "1:1016747414871:web:39c6018bf2dd4dde861a12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app