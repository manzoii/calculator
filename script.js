function add(a,b){
    let result = a + b;
    return result;
}

function subtract(a,b){
    let result = a - b;
    return result;
}

function multiplication(a,b){
    let result = a * b;
    return result;
}

function division(a,b){
    let result = a / b;
    return result;
}

console.log(multiplication(10, 2));

let firstVal ;
let operator ;
let secondVal ;

function operate (operator, firstVal, secondVal){
    if (operator == add){
        add(firstVal,secondVal);
    }else if(operator == subtract){
        subtract(firstVal,secondVal);
    }else if(operator == multiplication){
        multiplication(firstVal,secondVal);
    }else if(operator == division){
        division(firstVal,secondVal);
    }
}

const numbers = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".operator")
const display = document.querySelector("#display");

let isNumClick = true; // Initialize the flag outside the loop
let isOperatorClick = true;


numbers.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.textContent;
        if (isNumClick) {
            display.textContent = value;
            isNumClick = false;
        } else {
            display.textContent += value;
        }
    });
});

operators.forEach((button) => {
    button.addEventListener("click", () => {
        if (isOperatorClick) {
            firstVal = display.textContent;
            isOperatorClick = false;
            operator = button.id;
            display.textContent = 0;
        }else{
            
        }
    })
})