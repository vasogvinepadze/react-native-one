import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClzR6hZ_DMNxmeNOm3lcTswdFBHIszJTw",
  authDomain: "uber-e26d3.firebaseapp.com",
  projectId: "uber-e26d3",
  storageBucket: "uber-e26d3.appspot.com",
  messagingSenderId: "562999023497",
  appId: "1:562999023497:web:d875776a55a5861c9bf358",
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const dataBase = getFirestore();

export { authentication, dataBase };
