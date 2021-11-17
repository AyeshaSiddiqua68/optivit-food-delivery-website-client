import { useEffect, useState } from "react";
import {
  sendEmailVerification,updateProfile,createUserWithEmailAndPassword,signOut,getAuth,onAuthStateChanged,signInWithPopup,GoogleAuthProvider,
  signInWithEmailAndPassword,sendPasswordResetEmail,
} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

// All Providers
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  
  // claer error after 10s
  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 10000);
  }, [error]);

  //sign in with google function
  function signInWithGoogle() {
    return signInWithPopup(auth, googleProvider);
  }

  // set user name and profile photo url
  function setNameAndImage() {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  }

  // sign in with email function
  function signInWithEmail() {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  function emailVerification() {
    sendEmailVerification(auth.currentUser).then(() => {
      alert(`A Verification email has been set to ${email}`);
    });
  }

  // Get the currently signed-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
      if (signedInUser) {
        setUser(signedInUser);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  // function for logOut
  function logOut() {
    signOut(auth)
      .then((res) => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  // reset password
  function passwordReset() {
    return sendPasswordResetEmail(auth, email)
     
  }

  // sign up with email and password
  function singUp() { 
   return createUserWithEmailAndPassword(auth, email, password)
  }

  // Get logged in user password
  function getPassword(e) {
    const myPass = e?.target?.value;
    if (myPass > 6) {
      setPassword(e?.target?.value);
    }else{
      setError('Password should be at lest 6 Characters!')
    }
  }

  // get user name, email and photo
  function getName(e) {
    setName(e?.target?.value);
  }

  function getEmail(e) {
    setEmail(e?.target?.value);
  }
  function getPhoto(e) {
    setPhoto(e?.target?.value);
  }

  return {
    email,
    signInWithGoogle,
    signInWithEmail,
    logOut, 
    user,
    setUser,
    getPassword,
    getEmail,
    error,
    setError,
    passwordReset,
    singUp,
    emailVerification,
    getPhoto,
    getName,
    setNameAndImage,
    loading,
    setLoading,    
  };
};

export default useFirebase;

