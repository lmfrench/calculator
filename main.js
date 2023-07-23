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
    if (num2 == 0){
        return "ERROR";
    }
    else{
        return Number(num1) / Number(num2);
    }
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

function checkDecimal (num){
    //if number already has a decimal pt, do nothing
    if (num.includes(".")){
        return num;
    }
    // if num is empty, add the 0 at the beginning
    if (num === ""){
        return "0.";
    }
    // if number has no dec pt. add it
    else{
        num += ".";
        return num;
    }
}

//Event listener on calculator numbers
const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result')
let display= "";
let num1 = "";
let num2 = "";
let operator ="";

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let type = button.getAttribute('id');
        console.log(type);
        if (type === 'op'){
            //Displays operator entered
            display = "";
            result.textContent = button.textContent;
            
            //if this isn't the first calculation (i.e both num variables have values), then do the next calculation
            if (num2 !== ""){
                num1 = operate(num1, num2, operator);
                result.textContent = num1;
                // then clear num 2
                num2 = "";
            }            

            //stores operator if first calculation
            operator = button.textContent;         
        }

        else if (type === 'eq') {                 
           //calculates result if two numbers have been entered
           if (num1 !== "" && num2 !== ""){
            result.textContent = operate(num1, num2, operator);
            //stores result and clears num2
            num1 = operate(num1, num2, operator);
            num2 = "";              
            }
            //or if only num1 entered, continue to show num1
            else if (num1 !== ""){
                result.textContent = num1;
            }
        }

        // clear everything if Clear pressed
        else if (type === 'cl') {     
            num1="";
            num2="";
            operator="";
            display="";
        }

        
        else{
        // store num1 if an operator HASN'T been selected
            if (operator === ""){
                //check decimal is not being selected for second time
                if (type === 'decimal'){
                    num1 = checkDecimal(num1);              
                }
                // stores number
                else {
                    num1 += button.textContent;
                  //displays numbers entered                    
                }
                display = num1;
                result.textContent = display;
            }

        // store num2 if an operator HAS been selected
            else{
                //check decimal is not being selected for second time
                if (type === 'decimal'){
                    num2 = checkDecimal(num2);
                    display += button.textContent;
                    result.textContent = display;
                }
                else{
                    // stores number
                    num2 += button.textContent;
                }
                //displays numbers entered
                display = num2;
                result.textContent = display;
            }
        }        
    });
});

