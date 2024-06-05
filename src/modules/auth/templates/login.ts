import getChildElement from '../../../tools/documentTools';
import html from './login.html?raw';
import { getUserToken } from '../useCases/useAuth';
import { renderRegister } from './register';


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


form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    console.log(getUserToken(email, password));

})

// changing button


const loginChangingButton: HTMLAnchorElement = getChildElement(template,"#loginChangingButton") as HTMLAnchorElement;


loginChangingButton.addEventListener("click", (event)=>{
    event.preventDefault();
    const parent = template.parentElement;
    if (!parent) throw Error("This can not happen")

    renderRegister(parent);

})