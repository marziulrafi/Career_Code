import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../firebase.init';
import axios from 'axios';
const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password)
    }

     const googleLogin = () => {
        setLoading(true);
        return signInWithPopup (auth, googleProvider);
    };

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect (() => {
        const unsubscribe = onAuthStateChanged (auth, currentUser => {
            setUser(currentUser)
            setLoading(false)

            if(currentUser?.email) {
                const userData = {email : currentUser.email}
                axios.post('http://localhost:3000/jwt', userData)
                .then(res=> {
                    console.log('Token after JWT', res.data);
                    const token = res.data.token
                    localStorage.setItem('Token', token)
                })
                .catch(error => console.log(error))
            }
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        loading,
        createUser,
        loginUser,
        googleLogin,
        user,
        logOut
    }

    
    return (
       <AuthContext value={authInfo}>
            {children}
       </AuthContext>
    );
};

export default AuthProvider;