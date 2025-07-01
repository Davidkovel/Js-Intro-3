// Task 1
function powerOfNumber(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent < 0) {
        return 1 / powerOfNumber(base, -exponent);
    } else {
        return base * powerOfNumber(base, exponent - 1);
    }
}

let base = 2;
let exponent = 3;
let result = powerOfNumber(base, exponent);

console.log(`${base} power of ${exponent} is ${result}`);

// Task 2
function greatestCommonDivisor(a, b) {
    if (b === 0) {
        return a;
    } else {
        return greatestCommonDivisor(b, a % b);
    }
}
let num1 = 48;
let num2 = 18;
let gcd = greatestCommonDivisor(num1, num2);

console.log(`The greatest commond divisor of ${num1} and ${num2} is ${gcd}`);


// Task 3

function maxDigitInNumber(number, maxDigit=0) {
    if (number === 0) {
        return maxDigit;
    } else {
        let currentDigit = number % 10;
        if (currentDigit > maxDigit) {
            maxDigit = currentDigit;
        }
        return maxDigitInNumber(Math.floor(number / 10), maxDigit);
    }

}

let number = 123456789;
let maxDigit = maxDigitInNumber(number);

console.log(`The maximum digit in ${number} is ${maxDigit}`);

// Task 4

function isPrime(number, divisor = 2) {
    if (number <= 1) {
        return false;
    }
    if (divisor * divisor > number) {
        return true;
    }
    if (number % divisor === 0) {
        return false;
    }
    return isPrime(number, divisor + 1);
}

let primeNumber = 29;
let isPrimeResult = isPrime(primeNumber);

if (isPrimeResult) {
    console.log(`${primeNumber} is a prime number`);
}
else {
    console.log(`${primeNumber} is not a prime number`);

}

// Task 5
function dividersOfNumber(number, divisor = 1, dividers = []) {
    if (divisor > number) {
        return dividers;
    }
    if (number % divisor === 0) {
        dividers.push(divisor);
    }
    return dividersOfNumber(number, divisor + 1, dividers);
}

let numberForDividers = 36;
let dividers = dividersOfNumber(numberForDividers);

console.log(`The dividers of ${numberForDividers} are: ${dividers.join('*')}`);

// Task 6

function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let fibIndex = 6;
let fibValue = fibonacci(fibIndex);

console.log(`Fibonacci of ${fibIndex} is ${fibValue}`);