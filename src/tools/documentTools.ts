const getChildElement = (element: HTMLElement, query: string): HTMLElement =>{
    const element2: HTMLElement | null = element.querySelector(query);

    if (!element2) throw new Error(`There is no element with the query ${query}`)

    return element2
}

export default getChildElement