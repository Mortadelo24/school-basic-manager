import { checkUserLogged } from "../auth/middlewares/isUserLogged"

const renderTestModule = (element: HTMLElement)=>{
    checkUserLogged(element, ()=>{
        element.innerHTML = "Testing another module with middle ware.";
    });

}



export {
    renderTestModule
}