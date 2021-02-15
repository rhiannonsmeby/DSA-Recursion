//power accepts a base and an exponent, the function should return the power of the base to the exponent
function power(base, exponent) {
    if (exponent < 0) {
        return 'exponent must be a positive number'
    }
    if (exponent === 0) {
        return 1
    }
    return base * power(base, exponent - 1)
}

console.log(power(2, 1)) // 2
console.log(power(3, -3)) //exponent must be...
console.log(power(10, 2)) //100

//factorial accepts a number and returns the factorial of that number 
function factorial(n) {
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(2));
console.log(factorial(7));

//productOfArray takes an array of numbers and returns the product of them all
function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] + productOfArray(arr.slice(1))
}

console.log(productOfArray([1,2,3])) //6

//recursiveRange accepts a number and adds up all the numbers from 0 to the number passed into the function
function recursiveRange(n) {
    if (n === 0) {
        return 0;
    }
    return n + recursiveRange(n - 1)
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) //55

//write a function reverse which accepts a string and returns a new string in reverse

//write a function isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward
//and backward)

//someRecursive accepts an array and a callback. the function returns true when passed to the callback, otherwise it returns
//false

//flatten accepts an array of arrays and returns a new array with all values flattened

//capitalizeFirst accepts an array of strings and capitalizes the first letter of each string

//nestedEvenSum returns the sum of all even numbers in an object which may contain nested objects

//capitalizeWords accepts an array of words and returns a new array containing each word

//stringifyNumbers takes an object and finds all of the values which are numbers and converts them to strings

//collectStrings accepts an object and returns an array of all the values in the object that have a typeof string