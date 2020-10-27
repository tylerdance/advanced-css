const container = document.querySelector('.container');
console.log(container);

container.addEventListener('mouseover', () => {
    const newElement = createNewElement('p', 'Very cool stuff');
    container.appendChild(newElement);
    console.log('im hovering over container');
})


function createNewElement(tagName, text) {
    // create a new element with tagName
    const newElement = document.createElement(tagName);
    // set the textContent to the new element  
    newElement.textContent = text;  
    // return the new element
    return newElement;
}