import { useEffect, useState } from "react";
import {
  sendEmailVerification,updateProfile,createUserWithEmailAndPassword,signOut,getAuth,onAuthStateChanged,signInWithPopup,GoogleAuthProvider,
  signInWithEmailAndPassword,sendPasswordResetEmail,
} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

// Providers
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






























































































// import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
// import { useEffect, useState } from "react";
// import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


// initializeAuthentication();

// const useFirebase = () => {

//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState();
//     const [isLogin, setIsLogin] = useState(false);

//     const [user, setUser] = useState({});
//     const [isLoading, setIsLoading] = useState(true);

//     const auth = getAuth();


//     const googleProvider = new GoogleAuthProvider();



//     //google sign in
//     const signInUsingGoogle = () => {
//         setIsLoading(true);

//         return signInWithPopup(auth, googleProvider)

//             .finally(() => {setIsLoading(false)})

//     }

//     //registration and login toggle function

//     const toggleLogin = e => {
//         setIsLogin(e.target.checked);
//     }
//     const handleNameChange = e => {
//         setName(e.target.value);
//     }
//     const handleEmailChange = e => {
//         setEmail(e.target.value);
//     }
//     const handlePasswordChange = e => {
//         setPassword(e.target.value);
//     }
//     const handleRegistration = e => {
//         e.preventDefault();
//         console.log(email, password);

//         //password validation and make it strong
//         if (password.length < 6) {
//             setError('Password Must be at least 6 characters long')
//             return;
//         }
//         if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
//             setError('Password must contain 2 upper case')
//             return;
//         }
//         if (isLogin) {
//             processLogin(email, password);
//         }
//         else {
//             registerNewUser(email, password);
//         }

//     }
//     //registration and login toggle part
//     const processLogin = (email, password) => {
//         signInWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 setError('');
//             })
//             .catch(error => {
//                 setError(error.message);
//             })
//     }
//     const registerNewUser = (email, password) => {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 setError('');
//                 verifyEmail();
//                 setUserName();
//             })
//             .catch(error => {
//                 setError(error.message);
//             })
//     }

//     //display user name
//     const setUserName = () => {
//         updateProfile(auth.currentUser, {
//             displayName: name
//         })
//             .then(result => {

//             })
//     }
//     //email varification
//     const verifyEmail = () => {
//         sendEmailVerification(auth.currentUser)
//             .then(result => {
//                 console.log(result);
//             })
//     }
//     //password reset
//     const handleResetPassword = () => {
//         sendPasswordResetEmail(auth, email)
//             .then(result => { })
//     }

//     //state change
//     useEffect(() => {
//         const unsubscribed = onAuthStateChanged(auth, user => {
//             if (user) {
//                 setUser(user);
//             }
//             else {
//                 setUser({})
//             }
//             setIsLoading(false);
//         });
//         return () => unsubscribed;
//     }, [])

//     const logOut = () => {
//         setIsLoading(true);
//         signOut(auth)
//             .then(() => { })
//             .finally(() => setIsLoading(false))
//     }

//     return {
//         user,
//         email,
//         isLoading,
//         signInUsingGoogle,
//         logOut,
//         handleEmailChange,
//         handlePasswordChange,
//         handleRegistration,
//         error,
//         toggleLogin,
//         isLogin,
//         handleResetPassword,
//         handleNameChange

//     }
// }

// export default useFirebase;