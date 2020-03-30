

function add(num1, num2)
{
    if (isNaN(num1) || isNaN(num2))
    {
        // if bad input print error message
        return "Addition Error: Invalid Input";
    }
    else 
    {
        // if both parameters are numbers
        var sum = num1 + num2;
        return sum; 
    }
}

function subtract(num1, num2)
{
    if (isNaN(num1) || isNaN(num2))
    {
        // if bad input print error message
        return "Subtraction Error: Invalid Input";
    }
    else 
    {
        // if both parameters are numbers
        var difference = num1 - num2;
        return difference;
    }
}

function multiply(num1, num2)
{
    if (isNaN(num1) || isNaN(num2))
    {
        // if bad input print error message
        return "Multiplication Error: Invalid Input";
    }
    else 
    {
        // if both parameters are numbers
        var product = num1 * num2;
        return product;
    }
}

function divide(num1, num2)
{
    if (isNaN(num1) || isNaN(num2))
    {
        // if bad input print error message
        return "Division Error: Invalid Input";
    }
    else 
    {
        // if both parameters are numbers
        if (num2 != 0)
        {
            // if not dividing by zero
            var quotient = num1 / num2;
            return quotient;
        }
        else
        {
            // error message if dividing by zerp
            return "Division Error: Cannot divide by zero"; 
        }
    }
}


function operate(num1, num2, operator)
{
    const additionSign = "+";
    const subtractionSign = "-";
    const multiplicationSign = "*";
    const divisionSign = "/";

    var answer = 0;
    if (operator === additionSign)
    {
        answer = add(num1, num2);
    }
    else if (operator === subtractionSign)
    {
        answer = subtract(num1, num2);
    }
    else if (operator === multiplicationSign)
    {
        answer = multiply(num1, num2);
    }
    else if (operator === divisionSign)
    {
        answer = divide(num1, num2);
    }

    return answer;
}

let longTempAnswer = 0;
let inputNum1 = null;
let inputNum2 = null;
let operator = "";

function buttonPressed(buttonName)
{
    const additionSign = "+";
    const subtractionSign = "-";
    const multiplicationSign = "*";
    const divisionSign = "/";
    const equalsSign = "=";
    const display = document.querySelector('.calculator-screen')

    if (buttonName === additionSign ||
        buttonName === subtractionSign ||
        buttonName === multiplicationSign ||
        buttonName === divisionSign)
    {
        // if (inputNum1 == null)
        // {
        //     inputNum1 = parseFloat(display.value);
        // }
        // else if (!isNaN(inputNum1) && !isNaN(inputNum2))
        // {
        //     inputNum1 = operate(inputNum1, inputNum2, operator);
        //     inputNum2 = null;
        // }
        
        operator = buttonName;
        display.value = "";
    }
    else if (buttonName === equalsSign)
    {           
        // if (inputNum2 == null)
        // {
            // first input given
            inputNum2 = parseFloat(display.value);
            longTempAnswer += operate(inputNum1, inputNum2, operator);
            display.value = longTempAnswer;
            console.log(inputNum1 + " "+operator+" " + inputNum2 + " = " + operate(inputNum1, inputNum2, operator));
            operator = buttonName;
        // }
    }
    else
    {
        // if (operator == equalsSign)
        // {
        //     display.value = "";
        //     display.value = display.value + buttonName;
        //     operator = "";
        //     inputNum1 = operate(inputNum1, inputNum2, operator);
        //     inputNum2 = null;
        // }
        // else 
        // {
            display.value = display.value + buttonName;
        
    }
    // console.log(buttonName);
}

function main()
{

}

main();