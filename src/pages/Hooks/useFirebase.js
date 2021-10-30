import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider,signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import appInit from "../Login/firebase.init";

const useFirebase = ()=>{
    appInit()
    const [user, setUser] = useState({})
    const auth = getAuth();

    const provider = new GoogleAuthProvider();
    const googleSignIn=()=>{
        return signInWithPopup(auth, provider)
        
    }
    const logOut=()=>{
        signOut(auth)
        .then(() => {
            setUser({})
          })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)   
            } else {
              setUser({})
            }
          });
    },[])


    return{
        googleSignIn,
        user,
        logOut
    }

}

export default useFirebase;