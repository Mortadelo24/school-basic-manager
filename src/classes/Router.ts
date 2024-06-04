import TemplateGroup from "./TemplateGroup";

export default class Router {
    static #instancia: Router | null  = null;
    private templateGroups: TemplateGroup[] = []

    constructor(){
        if (!!Router.#instancia){
            return Router.#instancia;
        }
        Router.#instancia = this;  
    }

    public addTemplateGroup(templateGroup: TemplateGroup){
        this.templateGroups.push(templateGroup)

    }
                                

}