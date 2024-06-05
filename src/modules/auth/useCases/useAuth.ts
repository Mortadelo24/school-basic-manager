import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { myAuth } from "../dataBase/firebaseConfig"

const getUserToken = (email: string, password: string) => {
    signInWithEmailAndPassword(myAuth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const { message, code } = error;
            console.error(message, code);

        });
}

const registerNewUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(myAuth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const { message, code } = error;
            console.error(message, code);

        });
}

export {
    registerNewUser,
    getUserToken
}