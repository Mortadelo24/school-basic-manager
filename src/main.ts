import './style.css'
import TextTest from './classes/TextTest';
import TemplateGroup from './classes/TemplateGroup';
import Router from './classes/Router';


const appHTML:HTMLDivElement | null = document.querySelector("#app");

const text = new TextTest("Hello, world");


if (appHTML) text.renderHTML(appHTML);
if (appHTML) text.renderHTML(appHTML);


const templategroup = new TemplateGroup([
    {template: new TextTest("test1"), alias: "test1"},
    {template: new TextTest("test2"), alias: "test2"}
])

// templategroup.changeByAlias("test1");
// if (appHTML) templategroup.renderHTML(appHTML);

// console.log(templategroup)
const router = new Router();

router.addTemplateGroup(templategroup);