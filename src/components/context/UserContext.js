import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
//authentication part auth
const auth = getAuth(app);

const UserContext = ({children}) => {
    //create state for user
    const [user, setUser] = useState(null);
    //create user with email and password 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //sign in user with email and password
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // log out user form the website
    const logOut = () => {
        return signOut(auth);
    }
    //useEffect for current user...
    useEffect( () => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user inside state change', currentUser);
            setUser(currentUser);
        })
        return () => unSubscribe();
    },[])

    const authInfo = {user, createUser, signInUser, logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;