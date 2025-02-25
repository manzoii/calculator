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
