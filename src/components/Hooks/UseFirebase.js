import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  getIdToken
} from "firebase/auth";
import firebaseInitializeApp from "../Firebase/firebase.init";

firebaseInitializeApp();
const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user)
        .then(idToken => localStorage.setItem('idToken', idToken))
        setUser(user);
      }
    });
    return () => unsubscribe;
  }, []);

  return {
    user,
    error,
    googleSignIn,
    logOut,
  };
};

export default UseFirebase;
