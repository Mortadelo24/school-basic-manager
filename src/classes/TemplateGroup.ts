import PlaceHolder from './PlaceHolder';
import Template from './Template';

interface TemplateAndAlias {
    template: Template;
    alias: string;
}

export default class TemplateGroup extends Template {
    private current: TemplateAndAlias = {
        template: new PlaceHolder("No template"),
        alias: ""
    };


    constructor(private templates: TemplateAndAlias[]) {
        super();
        this.changeByAlias(this.templates[0].alias);
    }

    public changeByAlias(alias: string) {
        let exist: boolean = false;
        this.templates.forEach((t: TemplateAndAlias) => {
            if (t.alias == alias) {
                this.current = t;
                exist = true;
                this.current?.template.removeHTML();
                this.chargeCurrentTemplate();
                return;
            }
        })

        if (!exist) throw new Error(`The alias "${alias}" does not exist in this template group.`);
    }

    private chargeCurrentTemplate() {
        this.current?.template.renderHTML(this.HTML);
    }




}