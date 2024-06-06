import getChildElement from '../../../tools/documentTools';
import html from './login.html?raw';
import {loginUser } from '../dataBase/useAuth';
import { renderRegister } from './register';
import checkEmail from '../useCases/checkEmail';


const template = document.createElement("div");
template.classList.add("view");
template.innerHTML = html;

export const renderLogin = (element: HTMLElement) => {
    
    element.innerHTML = "";
    element.append(template)
}

// login
const emailInput: HTMLInputElement = getChildElement(template,"#loginEmailInput") as HTMLInputElement;
const passwordInput: HTMLInputElement = getChildElement(template,"#loginPasswordInput") as HTMLInputElement;

const form: HTMLFormElement = getChildElement(template,"#loginForm") as HTMLFormElement;

const setErrorMessage = ( message: string)=>{
    const errorContainer =  getChildElement(template, "#loginErrorMessage");

   errorContainer.innerText = message;
   errorContainer.removeAttribute("hidden")
}

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    if(!checkEmail(email)){
        setErrorMessage("The email is not an email valid");
        return
    }
    if(password.length < 1){
        setErrorMessage("You need to put a password.");

        return
    }

    loginUser(email, password, 
    ()=>{
        emailInput.value = "";
       

    }, 
    ()=>{
        setErrorMessage("The password or the email are incorrect.");
    })
    passwordInput.value = "";

    

})

// changing button


const loginChangingButton: HTMLAnchorElement = getChildElement(template,"#loginChangingButton") as HTMLAnchorElement;


loginChangingButton.addEventListener("click", (event)=>{
    event.preventDefault();
    passwordInput.value = "";
    emailInput.value = "";
    const parent = template.parentElement;
    if (!parent) throw Error("This can not happen")

    renderRegister(parent);

})