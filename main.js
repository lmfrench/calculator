function add (num1, num2){
    return num1 + num2;
}

function subtract (num1, num2){
    return num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1 / num2;
}

function operate (num1, num2, operator){
    
    switch (operator){
        
        case '+': return add(num1, num2);
        break;
        case '-': return subtract(num1, num2);
        break;
        case 'x': return multiply(num1, num2);
        break;
        case '/': return divide(num1, num2);      
        
    }
}



console.log(operate(1, 2, '+'));
console.log(operate(1, 2, '-'));
console.log(operate(1, 2, 'x'));
console.log(operate(1, 2, '/'));
