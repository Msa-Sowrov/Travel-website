import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider,signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import appInit from "../Login/firebase.init";

const useFirebase = ()=>{
    appInit()
    const [user, setUser] = useState({})
    const [loding, setLoding] = useState(true)
    const auth = getAuth();

    const provider = new GoogleAuthProvider();
    const googleSignIn=()=>{
        setLoding(true)
        return signInWithPopup(auth, provider)
        
    }
    const logOut=()=>{
        setLoding(true)
        signOut(auth)
        .then(() => {
            setUser({})
        setLoding(false)
          })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)   
            } else {
              setUser({})
            }
            setLoding(false)
          });
    },[])


    return{
        googleSignIn,
        user,
        logOut,
        loding
    }

}

export default useFirebase;