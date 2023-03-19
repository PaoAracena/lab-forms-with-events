// console.log("Code your solution!")
const formElement = document.getElementById('pao')

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let listElement = document.createElement('li');
    const textInputValue = event.target.testInput.value;
    
    listElement.textContent = textInputValue;
    
    listElement.addEventListener('click', handleClick =>{
     handleClick.target.style.textDecoration = "line-through";
    })

    const unorderedListElement = document.querySelector('ul');
    unorderedListElement.append(listElement);
    //creation/ assigenment/functionally and then append
    event.target.testInput.value ='';
})