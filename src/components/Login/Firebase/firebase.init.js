import firebaseConfig from "./firebase.confiq";
import { initializeApp } from "firebase/app";


const initializingAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializingAuthentication;