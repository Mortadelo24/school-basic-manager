import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, User } from "firebase/auth";
import { myAuth } from "./firebaseConfig"


let user: User | null = null;
let onLogin: ()=>void = ()=>{};

const loginUser = (
    email: string, 
    password: string, 
    onComplete: (user: User)=>void = ()=>{}, 
    onFail: (error: string)=> void =  ()=>{}
): void => {
    signInWithEmailAndPassword(myAuth, email, password)
        .then((userCredential) => {
            user = userCredential.user;
            onComplete(user);
            executeOnLogin();
        })
        .catch((error) => {
            const { message } = error;
            onFail(message);
        });

       

}

const registerNewUser = (
    email: string, 
    password: string,
    onComplete: (user: User)=>void = ()=>{}, 
    onFail: (error: string)=> void =  ()=>{}
) => {
    createUserWithEmailAndPassword(myAuth, email, password)
        .then((userCredential) => {
            user = userCredential.user;
            onComplete(user);
            executeOnLogin();
        })
        .catch((error) => {
            const { message } = error;

            onFail(message);
        });
}
const getCurrentUser = ()=>{
    return user
}

const setOnLogin = (callback: ()=>void)=>{
    onLogin = callback;
}

const executeOnLogin = ()=>{
    onLogin();
    onLogin = ()=>{};
}


export {
    registerNewUser,
    loginUser,
    getCurrentUser,
    setOnLogin,
    executeOnLogin
}