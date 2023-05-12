import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyA-gz_eK3An66pn8mgbqOp7tqEkv2upFs4",
  authDomain: "multimart-6ce0e.firebaseapp.com",
  projectId: "multimart-6ce0e",
  storageBucket: "multimart-6ce0e.appspot.com",
  messagingSenderId: "909445886053",
  appId: "1:909445886053:web:55105c4c4ee61d1020968c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)
export default app;