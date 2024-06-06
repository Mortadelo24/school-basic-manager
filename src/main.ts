import { renderTestModule } from './modules/test/module';
import './style.css'


const appHTML:HTMLDivElement | null = document.querySelector("#app");


if (! appHTML) throw new Error("There is not div#app");

// renderAuthModule(appHTML);
renderTestModule(appHTML);


export {
    appHTML
}