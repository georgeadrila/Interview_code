// program to check if the number is a palindrome or not

// import readline module for user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// function to check if a number is a palindrome
function isPalindrome(n) {
    // convert number to a string
    let str = n.toString();

    // reverse the string and compare it with the original string
    return str === str.split('').reverse().join('');
}

// take input from the user
readline.question('Enter a number: ', number => {
    number = parseInt(number);
    const result = isPalindrome(number);
    console.log(`${number} is ${result ? '' : 'not '}a palindrome.`);
    readline.close();
});