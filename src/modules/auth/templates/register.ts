import html from './register.html?raw';
import getChildElement from "../../../tools/documentTools"
import checkPassword from '../useCases/checkPassword';
import checkEmail from '../useCases/checkEmail';
import { registerNewUser } from '../dataBase/useAuth';
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


const setErrorMessage = ( message: string)=>{
    const errorContainer =  getChildElement(template, "#registerErrorMessage");

   errorContainer.innerText = message;
   errorContainer.removeAttribute("hidden")
}


form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;

    const {isAValidPassword, misTakes } = checkPassword(password);
    // TODO:  show the errors in the html

    if (!isAValidPassword){
        setErrorMessage(misTakes[0].message.replace("string", "password"));
        return 
    }
    if(!checkEmail(email)){
        setErrorMessage("The email is not valid")
        return
    }
    if(password !== repeatPassword){
        setErrorMessage("Your passwords are not the same");
        return
    }

    registerNewUser(email, password);

})

const registerChanginButton: HTMLAnchorElement = getChildElement(template,"#registerChanginButton") as HTMLAnchorElement;
registerChanginButton.addEventListener("click", (event)=>{
    event.preventDefault();
    emailInput.value = "";
    passwordInput.value = "";
    repeatPasswordInput.value = "";
    const parent = template.parentElement;
    if (!parent) throw Error("This can not happen")

    renderLogin(parent);

})