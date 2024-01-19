// program to generate a prime number betqween 1 and a given number

// import readline module for user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// function to check if a number is prime
function isPrime(num) {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

// function to generate primes between 1 and n
function generatePrimes(n) {
    let primes = [];
    for(let i = 1; i <= n; i++)
        if(isPrime(i)) primes.push(i);
    return primes;
}

// take input from the user
readline.question('Enter a number: ', number => {
    number = parseInt(number);
    const primes = generatePrimes(number);
    console.log(`Prime numbers between 1 and ${number} are: ${primes}`);
    readline.close();
});