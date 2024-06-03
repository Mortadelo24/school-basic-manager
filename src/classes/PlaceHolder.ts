import Template from './Template';

export default class PlaceHolder extends Template{
    constructor(text: string){
        super();  
        this.HTML.innerText = text;

    }

} 