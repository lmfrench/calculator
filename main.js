function add (num1, num2){
    return Number(num1) + Number(num2);
}

function subtract (num1, num2){
    return Number(num1) - Number(num2);
}

function multiply (num1, num2){
    return Number(num1) * Number(num2);
}

function divide (num1, num2){
    return Number(num1) / Number(num2);
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
            //Displays operator entered
            display = "";
            result.textContent = button.textContent;
            
            operator = button.textContent;
        }

        else if (type === 'eq') {
           result.textContent = operate(num1, num2, operator);
           
           
        }
        else{
            //Displays numbers entered
            display += button.textContent;
            result.textContent = display;
            
            if (operator === ""){
                num1 += button.textContent;
            }
            else{
                num2 += button.textContent;
            }
        }
        
        
        
                 
    });
});

