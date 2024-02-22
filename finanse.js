let arrInput = [];

document.addEventListener('DOMContentLoaded', function (){
    let numbers = document.getElementById('numbers');
    const addButton = document.querySelector('.button__button');
    const sumOutput = document.getElementById('result');

    addButton.addEventListener('click', function () {
        let input = parseInt(numbers.value);
        let result = arrInput.includes(input) 
        ? "Число вже є в списку" 
        : "Число є новим";

        // if(arrInput.includes(input)){
        //     result = "Число вже є в списку";
        // }   
        // else{
        //     result = "Число є новим";
        // }
        
        arrInput.push(input);
        sumOutput.innerText = result;
    });
});