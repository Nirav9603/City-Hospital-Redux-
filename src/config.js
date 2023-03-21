import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCiloryptgtb1oBbUpGTxKaDVtPqE-CDXw",
  authDomain: "city-hospital-1b9a0.firebaseapp.com",
  projectId: "city-hospital-1b9a0",
  storageBucket: "city-hospital-1b9a0.appspot.com",
  messagingSenderId: "507798112112",
  appId: "1:507798112112:web:4693e9882120a132e4f1b5",
  measurementId: "G-B0418P6LL6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const provider = new GoogleAuthProvider();


export {auth , provider , db }