import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Children, createContext } from "react";
import auth from "../firebase/config.firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({children})=>{
    const createUser = (email,password)=>
    {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {
        createUser,
        signIn
    }

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;