// program to determine if the given year is a leap year
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// program to determine if the given year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// take input from the user
readline.question('Enter a year: ', year => {
    year = parseInt(year);
    const result = isLeapYear(year);
    console.log(`Leap Year: ${result}`);
    readline.close();
});
