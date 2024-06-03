import Template from './Template';

export default class TextTest extends Template{
    constructor(text: string){
        super();  
        this.HTML.innerText = text;

    }

} 