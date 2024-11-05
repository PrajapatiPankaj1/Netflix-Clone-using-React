
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
   getAuth,
   signInWithEmailAndPassword , signOut} from "firebase/auth";

import {addDoc, 
  collection,
   getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBUa3mqBwvxC1_5iyeyEyvLbuPdNQNJITg",
  authDomain: "netflix-clone-6b316.firebaseapp.com",
  projectId: "netflix-clone-6b316",
  storageBucket: "netflix-clone-6b316.firebasestorage.app",
  messagingSenderId: "621463134227",
  appId: "1:621463134227:web:3323090be596d08f0d5fe6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
  try{
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    })
  } catch (error){
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(""));

  }
}

const login = async (email, password)=>{
  try{
    signInWithEmailAndPassword(auth, email, password);
  }catch (error){
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(""));

  }
}

const logout = ()=>{
  signOut(auth);
}

export {auth, db, login, signup, logout};