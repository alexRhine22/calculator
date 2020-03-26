
function add(numberArr)
{
    if (Array.isArray(numberArr) && numberArr.length > 0)
    {
        var sum = 0;

        // if parameter numberArr is an array and is > 0
        for (i = 0; i < numberArr.length; i++)
        {
            sum += numberArr[i];
        }

        return sum;
    }
    else 
    {
        // if bad input print error message
        return "Error!: Could Be\n(1) Bad input\n(2) Computation Error";
    }
}

function subtract(numberArr)
{
    if (Array.isArray(numberArr) && numberArr.length > 0)
    {
        // if parameter numberArr is an array and is > 0
        var difference = numberArr[0]; // set to first number in numberArr

        for (i = 1; i < numberArr.length; i++)
        {
            // skip first number of array   
            difference -= numberArr[i];
        }

        return difference;
    }
    else 
    {
        // if bad input print error message
        return "Error!: Could Be\n(1) Bad input\n(2) Computation Error";
    }
}

function multiply(numberArr)
{
    if (Array.isArray(numberArr) && numberArr.length > 0)
    {
        // if parameter numberArr is an array and is > 0
        var product = numberArr[0];

        for (i = 1; i < numberArr.length; i++)
        {
            // skip first number of array   
            product *= numberArr[i];
        }

        return product;
    }
    else 
    {
        // if bad input print error message
        return "Error!: Could Be\n(1) Bad input\n(2) Computation Error";
    }
}

function divide(numberArr)
{
    if (Array.isArray(numberArr) && numberArr.length > 0)
    {
        // if parameter numberArr is an array and is > 0

        for (i = 0 ; i < numberArr.length; i++)
        {
            if (numberArr[i] == 0)
            {
                return "Error: Cannot divide by zero!"
            }
        }

        var quotient = numberArr[0];

        for (i = 1; i < numberArr.length; i++)
        {
            // skip first number of array   
            quotient /= numberArr[i];
        }

        return quotient;
    }
    else 
    {
        // if bad input print error message
        return "Error!: Could Be\n(1) Bad input\n(2) Computation Error";
    }
}

function operate(number1, number2, operator)
{
    const additionSign = "+";
    const subtractionSign = "-";
    const multiplicationSign = "*";
    const divisionSign = "/";

    if (operator === additionSign)
    {

    }
    else if (operator === subtractionSign)
    {

    }
    else if (operator === multiplicationSign)
    {

    }
    else if (operator === divisionSign)
    {
        
    }
}

function main()
{
    // var addArr = [5, 5, 5];
    // console.log("5 + 5 + 5 = " + add(addArr));

    // var subtractArr = [15, 5, 5, 5];
    // console.log("15 - 5 - 5 - 5 = " + subtract(subtractArr));
    // console.log("asd = " + subtract("asd"));
    // console.log("0 = " + subtract("0"));
    // console.log(" = " + subtract());

    // var multiplyArr1 = [5,5];
    // var multiplyArr2 = [5,5,5];
    // console.log("5 * 5 = " + multiply(multiplyArr1));
    // console.log("5 * 5 * 5 = " + multiply(multiplyArr2));
    // console.log("asd = " + multiply("asd"));

    var divideArr1 = [5,5];
    var divideArr2 = [5,5,5];
    console.log("5 / 5 = " + divide(divideArr1));
    console.log("5 / 5 / 5 = " + divide(divideArr2));
    console.log("asd = " + divide("asd"));
    console.log("0 = " + divide([0, 0]));
}

main();