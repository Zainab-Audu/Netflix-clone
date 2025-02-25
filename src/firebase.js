import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDadwDeLY8AGM67xbDqKXl_Ue3ODt8gJww",
  authDomain: "netflix-clone-df4bf.firebaseapp.com",
  projectId: "netflix-clone-df4bf",
  storageBucket: "netflix-clone-df4bf.firebasestorage.com",
  messagingSenderId: "143924543470",
  appId: "1:143924543470:web:241de0f93a932160cc58ff",
  measurementId: "G-HSE31VQKRY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed in:", userCredential);
      })
      .catch((error) => {
        console.log("Error signing in", error);
        alert(error.message);
      });
  } catch (error) {
    console.error("Login failed:", error);
    alert(error.message);
  }
}; 

const logout = () => {
  signOut(auth);
};


export { auth, db, login, signUp, logout };
