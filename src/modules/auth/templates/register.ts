import html from './register.html?raw';
import getChildElement from "../../../tools/documentTools"
import checkPassword from '../useCases/checkPassword';
import checkEmail from '../useCases/checkEmail';
import { registerNewUser } from '../useCases/useAuth';
import { renderLogin } from './login';

const template = document.createElement("div");
template.classList.add("view");
template.innerHTML = html;

export const renderRegister = (element: HTMLElement) => {
    element.innerHTML = "";
    element.append(template)
}

// register

const emailInput: HTMLInputElement = getChildElement(template,"#registerEmailInput") as HTMLInputElement;
const passwordInput: HTMLInputElement = getChildElement(template,"#registerPasswordInput") as HTMLInputElement;
const repeatPasswordInput: HTMLInputElement = getChildElement(template,"#registerRepeatPasswordInput") as HTMLInputElement;
const form: HTMLFormElement = getChildElement(template,"#registerForm") as HTMLFormElement;

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;

    const {isAValidPassword, misTakes } = checkPassword(password);
    // TODO:  show the errors in the html

    if (!isAValidPassword){
        console.log(misTakes)
        return 
    }
    if(!checkEmail(email)){
        console.log(`invalid email ${email}`)
        return
    }
    if(password !== repeatPassword){
        console.log("Your passwords are not the same")
        return
    }

    registerNewUser(email, password);

})

const registerChanginButton: HTMLAnchorElement = getChildElement(template,"#registerChanginButton") as HTMLAnchorElement;
registerChanginButton.addEventListener("click", (event)=>{
    event.preventDefault();
    const parent = template.parentElement;
    if (!parent) throw Error("This can not happen")

    renderLogin(parent);

})