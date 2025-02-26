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

function operate (operation, a, b,){
    if (operation == add){
        add(a,b);
    }else if(operation == subtract){
        subtract(a,b);
    }else if(operation == multiplication){
        multiplication(a,b);
    }else if(operation == division){
        division(a,b);
    }
}

const numbers = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".operator")
const display = document.querySelector("#display");

let isFirstClick = true; // Initialize the flag outside the loop

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        let value = button.textContent;
        if (isFirstClick) {
            display.textContent = value;
            isFirstClick = false;
        } else {
            display.textContent += value;
        }
    });
});