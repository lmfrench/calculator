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

//Event listener on calculator numbers
const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result')
let display= "";
let num1 = "";
let num2 = "";
let operator = "";

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let type = button.getAttribute('id');
        if (type === 'op'){
            display = "";
            result.textContent = button.textContent;
            operator = button.textContent;
        }

        else if (type === 'eq') {
           console.log("test");
           
        }
        else{
            display += button.textContent;
            result.textContent = display;
            num1 += button.textContent;
        }
        
        
        
                 
    });
});

