import PropTypes from 'prop-types'
import { useState } from 'react'
import { createContext } from 'react'
import auth from "../../firebase.init.js"
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { useEffect } from 'react'

export const authContext = createContext(null)

function Authonicate({children}) {
    const [userInfo, setUserInfo] = useState("");
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser = (email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const userLogin = (email,pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass);
    }

    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUserInfo(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    const forgetPass = (email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }


    const authInfo = {
        userInfo,
        createUser,
        userLogin,
        googleLogin,
        forgetPass,
        loading,
        logOut,
    }

  return (
    <authContext.Provider value={authInfo}>
    {children}
    </authContext.Provider>
  )
}

Authonicate.propTypes = {
    children : PropTypes.object,
}

export default Authonicate

