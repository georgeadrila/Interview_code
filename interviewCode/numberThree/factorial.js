// program to find factorial of a given number

// import readline module for user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// take input from the user
readline.question('Enter a positive integer: ', number => {
    // parsing the input to integer
    number = parseInt(number);

    // initializing factorial to 1
    let factorial = 1;

    // looping from i = 1 to number
    for(let i = 1; i <= number; i++){
        factorial *= i;
    }

    // display the factorial
    console.log(`The factorial of ${number} is ${factorial}.`);

    // closing the readline interface
    readline.close();
});
