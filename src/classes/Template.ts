export default abstract class Template {
    #HTML = document.createElement("div");
    public parentHTML: HTMLElement | null = null;

    public removeHTML = ()=>{
        this.#HTML.remove();
    }

    public get HTML(){
        
        return this.#HTML;
    }

    public renderHTML(element: HTMLElement, stack: boolean = true){
        if (element) this.removeHTML();


        if (!stack) element.innerHTML = '';

        element.appendChild(this.#HTML);


    }

}