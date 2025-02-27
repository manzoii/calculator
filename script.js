let firstVal ;
let operator ;
let secondVal ;

function operate (operator, firstVal, secondVal){
    firstVal = parseFloat(firstVal);
    secondVal = parseFloat(secondVal);

    if (operator == "+"){
        return firstVal + secondVal;
    }else if(operator == "-"){
        return firstVal - secondVal ;
    }else if(operator == "*"){
        return firstVal * secondVal;
    }else if(operator == "/"){
        return secondVal !== 0 ? firstVal / secondVal : "Error";
    }
}

const numbers = document.querySelectorAll(".num")
const operators = document.querySelectorAll(".operator")
const display = document.querySelector("#display");

let isNumClick = true;
let isOperatorClick = true;
let isfirstdecimal = true;

numbers.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent.length < 12){
            if (button.textContent != "."){
                if (isNumClick) {
                    display.textContent = button.textContent;
                    isNumClick = false;
                } else {
                    display.textContent += button.textContent;
                }
            }else if(button.textContent == "." && isfirstdecimal){
                display.textContent += button.textContent;
                isfirstdecimal = false;
            }
        }    
    });
});

operators.forEach((button) => {
    button.addEventListener("click", () => {
        isfirstdecimal = true;
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
    isfirstdecimal = true;
});

document.getElementById("clear").addEventListener("click", () => {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = "0";
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
        isfirstdecimal = true;
    }
});