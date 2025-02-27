function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiplication(a,b){
    return a * b;
}

function division(a,b){
    return b !== 0 ? a / b : "Error";
}

let firstVal ;
let operator ;
let secondVal ;

function operate (operator, firstVal, secondVal){
    firstVal = parseFloat(firstVal);
    secondVal = parseFloat(secondVal);

    if (operator == "+"){
        return add(firstVal,secondVal);
    }else if(operator == "-"){
        return subtract(firstVal,secondVal);
    }else if(operator == "*"){
        return multiplication(firstVal,secondVal);
    }else if(operator == "/"){
        return division(firstVal,secondVal);
    }
}

const numbers = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".operator")
const display = document.querySelector("#display");

let isNumClick = true;
let isOperatorClick = true;

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent.length < 12){
            if (isNumClick) {
                display.textContent = button.textContent;
                isNumClick = false;
            } else {
                display.textContent += button.textContent;
            }
        }    
    });
});

operators.forEach((button) => {
    button.addEventListener("click", () => {
        if (isOperatorClick) {
            firstVal = display.textContent;
            isOperatorClick = false;
            operator = button.textContent;
            isNumClick = true;
        }else{
            secondVal = display.textContent;
            display.textContent = operate(operator, firstVal, secondVal);
            operator = button.textContent;
            firstVal = display.textContent;
            secondVal = null;
            isOperatorClick = true;
            isNumClick = true;
        }
    })
})

document.getElementById("clearAll").addEventListener("click", () => {
    display.textContent = 0;
    isNumClick = true;
    isOperatorClick = true;
    firstVal = null;
    secondVal = null;
    operator = null;
});

document.getElementById("clear").addEventListener("click", () => {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = "0"; // Reset to 0 if only one character is left
    }
});

document.getElementById("equality").addEventListener("click", () => {
    if(firstVal &&  operator){
        secondVal = display.textContent;
        display.textContent = operate(operator, firstVal, secondVal);
        firstVal = display.textContent;
        operator = null;
        isNumClick = true;
        isOperatorClick = true;
    }
});