import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const appInit =()=>{
    initializeApp(firebaseConfig);
}

export default appInit;