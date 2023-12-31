function add (num1, num2){
    let num = Number(num1) + Number(num2);
    
    if (num.toString().length > 8){
        return Math.round(num * 1000000)/1000000;
    }
    return num;
}

function subtract (num1, num2){
    let num = Number(num1) - Number(num2);
    if (num.toString().length > 8){
        return Math.round(num * 1000000)/1000000;
    }
    return num;
}

function multiply (num1, num2){
    let num = Number(num1) * Number(num2);
    if (num.toString().length > 8){
        return Math.round(num * 1000000)/1000000;
    }
    return num;
}

function divide (num1, num2){
    
    if (num2 == 0){
        return "ERROR";
    }
    else{
        let num = Number(num1) / Number(num2);
        if (num.toString().length > 8){
            return Math.round(num * 1000000)/1000000;
        }
        return num;
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
        case '*': return multiply(num1, num2);
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

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result')
let num1 = "";
let num2 = "";
let operator ="";

//Code to allow user to do calculations by pressing buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let type = button.getAttribute('id');
        
        if (type === 'op'){
            //Displays operator entered
            result.textContent = button.textContent;
            
            //checks whether this is the first calculation. If this isn't the first calculation (i.e both num variables have values), then do a calculation
            if (num2 !== ""){
                num1 = operate(num1, num2, operator);
                
                result.textContent = num1;
                // then clear num 2
                num2 = "";
            }            
            //stores operator if this is the first calculation
            operator = button.textContent;         
        }

        else if (type === 'eq') {                 
           //calculates result if two numbers have been entered
           if (num1 !== "" && num2 !== ""){
            result.textContent = operate(num1, num2, operator);
            //stores result in num1 and clears num2 so another calulation could be performed on the result
            num1 = operate(num1, num2, operator);
            num2 = "";              
            }
            //or if only num1 entered, continue to show num1
            else if (num1 !== ""){
                result.textContent = num1;
            }
        }

       // delete last number if delete pressed
        else if (type === 'del') {
            //check whether to delete a character from num1 or num2
            if (num2 === ""){
                num1 = num1.slice(0,-1);
                result.textContent = num1;
            }
            else {
                num2 = num2.slice(0,-1);
                result.textContent = num2;
            }
        }

        // clear everything if Clear button pressed
        else if (type === 'cl') {     
            num1="";
            num2="";
            operator="";
            result.textContent = "";
        }

        else{
        // store num1 if an operator HASN'T been selected
            if (operator === ""){
                //check decimal is not being selected for second time
                if(num1.length < 8){ //prevent number being larger than result screen
                    if (type === 'decimal'){
                        num1 = checkDecimal(num1);              
                    }
                    // stores number
                    else {
                        num1 += button.textContent;
                              
                    }
                    //displays numbers entered     
                    result.textContent = num1;
                }
            }   

        // store num2 if an operator HAS been selected
            else{
                //check decimal is not being selected for second time
                if (type === 'decimal'){
                    if(num2.length < 8){ //prevent number being larger than result screen
                        num2 = checkDecimal(num2);
                        result.textContent = num2;
                    }
                }
                else{
                    if(num2.length < 8){ //prevent number being larger than result screen
                        // stores number
                        num2 += button.textContent;
                    }
                }
                //displays numbers entered
                result.textContent = num2;
            }
        }        
    });
});

//Code to allow user to do calculations by keyboard input

document.addEventListener('keydown', (event) => {
    var keyPressed = event.key;
    
    
    if (keyPressed === '/' || keyPressed === '+' || keyPressed === '-' || keyPressed === '*'){
        result.textContent = keyPressed;
            //checks whether this is the first calculation. If this isn't the first calculation (i.e both num variables have values), then do a calculation
            if (num2 !== ""){
                num1 = operate(num1, num2, operator);
                result.textContent = num1;
                // then clear num 2
                num2 = "";
            }            
            //stores operator if this is the first calculation
            operator = keyPressed;  
    }

    else if (keyPressed === '=' || keyPressed === 'Enter') {        
        console.log(num1, num2);    
        //calculates result if two numbers have been entered
        if (num1 !== "" && num2 !== ""){
         result.textContent = operate(num1, num2, operator);
         //stores result in num1 and clears num2 so another calulation could be performed on the result
         console.log(operate(num1, num2, operator));
         num1 = operate(num1, num2, operator);
         num2 = "";      
                
         }
         //or if only num1 entered, continue to show num1
         else if (num1 !== ""){
             result.textContent = num1;
         }
     }

    if (Number(keyPressed) < 10 || keyPressed === '.' ){
        // store num1 if an operator HASN'T been selected
        if (operator === ""){
            //check decimal is not being selected for second time
            if(num1.length < 8){ //prevent number being larger than result screen
                if (keyPressed === '.'){
                    num1 = checkDecimal(num1);              
                }
                // stores number
                else {
                    num1 += keyPressed;                       
                }
                //displays numbers entered     
                result.textContent = num1;
            }
        }   

        // store num2 if an operator HAS been selected
        else{
            //check decimal is not being selected for second time
            if (keyPressed === '.'){
                if(num2.length < 8){ //prevent number being larger than result screen
                    num2 = checkDecimal(num2);
                    result.textContent = num2;
                }
            }
            else{
                if(num2.length < 8){ //prevent number being larger than result screen
                // stores number
                num2 += keyPressed;
                }
            }
            //displays numbers entered
            result.textContent = num2;
        }
    }   
});