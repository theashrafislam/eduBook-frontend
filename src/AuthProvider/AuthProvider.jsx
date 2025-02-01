import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // user create using email and password
    const createUserEmailPassword = async (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));
    };

    //user sign in function
    const signInEmailPassword = async (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => setLoading(false));
    }

    //user google login 
    const signInUseingGoogle = async () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
            .finally(() => setLoading(false));
    }

    //user github login
    const sginInUsingGithub = async () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
            .finally(() => setLoading(false));
    }

    // user profile update function 
    const updateProfileInformation = async (displayName, photoUrl) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoUrl: photoUrl
        }).finally(() => setLoading(false));
    };

    // sign out function 
    const userSignOut = async () => {
        setLoading(true);
        return signOut(auth)
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        createUserEmailPassword,
        updateProfileInformation,
        userSignOut,
        user,
        loading,
        signInEmailPassword,
        signInUseingGoogle,
        sginInUsingGithub
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;