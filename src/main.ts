import { renderLogin } from './modules/auth/templates/login';
import './style.css'


const appHTML:HTMLDivElement | null = document.querySelector("#app");


if (! appHTML) throw new Error("There is not div#app");

renderLogin(appHTML);
