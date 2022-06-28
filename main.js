function runCalc() {
    alert(`WELCOME TO MY JAVASCRIPT CALCULATOR`)
    // assign variable to the operator
    let operator;

    // assign variable for the result
    let answer;

    // prompt for the operation to be performed
    operator = prompt(
        'Enter the operation you want to perform \n Input + for Addition \n Input - for Subtraction \n Input * for Multiplication or \n Input / for division'
    );
    // if the input is not valid, alert the user and exit
    if (!["+","-","*","/"].includes(operator)) {
        return alert('Error! This is not a valid operator. Goodbye!');
    }

    // prompt user to input the first number
    let firstNumber = prompt(
        'Enter the first number: '
        );

    // prompt user to input the second number
    let secondNumber = prompt(
        'Enter the second number: '
        );


    // if the operator is +, add the two numbers
    if (operator == '+') {
        answer = Number(firstNumber) + Number(secondNumber);
    }

    // if the operator is -, subtract the two numbers
    else if (operator == '-') {
        answer = Number(firstNumber) - Number(secondNumber);
    }

    // if the operator is *, multiply the two numbers
    else if (operator == '*') {
        answer = Number(firstNumber) * Number(secondNumber);
    }

    // if the operator is /, divide the two numbers
    else {
        answer = Number(firstNumber) / Number(secondNumber);
    }

    // display the result
    alert(`${firstNumber} ${operator} ${secondNumber} = ${answer}`);

    // ask user to run the function again
    let retry = confirm(
        `try again?`
    )
    if (retry) {
        runCalc()
    } 
}

runCalc()