import { checkUserLogged } from "../auth/middlewares/isUserLogged"

const renderAppModule = (element: HTMLElement)=>{
    checkUserLogged(element, ()=>{
        element.innerHTML = "App module";
    });

}



export {
    renderAppModule
}