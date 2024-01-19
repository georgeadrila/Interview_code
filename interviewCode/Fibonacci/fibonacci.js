// program to print all the elements of the fibonacci series

// import readline module for user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// function to generate fibonacci series
function fibonacci(n) {
    let fibSequence = [0, 1];

    if (n === 1) {
        return [0];
    }

    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    return fibSequence;
}

// take input from the user
readline.question('Enter the number of elements for the Fibonacci series: ', number => {
    number = parseInt(number);
    const result = fibonacci(number);
    console.log(`The first ${number} elements of the Fibonacci series are: ${result}`);
    readline.close();
});