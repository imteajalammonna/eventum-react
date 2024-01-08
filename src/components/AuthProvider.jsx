import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Utility/Firebase.config";

export const AuthContext = createContext([]);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });

    }
    const logOut = () => {
        return signOut(auth);
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const signInWithFacebook = () => {
        signInWithPopup(auth, FacebookProvider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user", currentUser);
            setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;