import { executeOnLogin, getCurrentUser, setOnLogin } from "../dataBase/useAuth";
import { renderLogin } from "../templates/login";

const checkUserLogged = (element: HTMLElement, nextCode: ()=> void)=>{
    setOnLogin(nextCode);
    if (!getCurrentUser()) {
        renderLogin(element)
        return
    }
    executeOnLogin();
    
}
const isUserLogged = ()=>{
    
}

export {
    checkUserLogged,
    isUserLogged
}