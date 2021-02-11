//counting sheep: function that counts how many sheep
//jump over the fence. Program takes number of sheep as input, 
//function displays the number and message "another sheep jumps over the fence"
//until no more sheep are left
//input: 3
//output: 3: Another sheep jumped over the fence, 2: Another sheep jumped 
//over the fence, 1: Another sheep jumped over the fence, All sheep jumped 
//over the fence

function sheepCounter(numOfSheep) {
    //base case
    if (numOfSheep === 0) {
        return console.log('All sheep jumped over the fence');
    }
    //recurring case
    console.log(numOfSheep + ': Another sheep jumped over the fence');
    sheepCounter(numOfSheep - 1);
}

sheepCounter(3);

//Power Calculator: function that takes 2 params, an integer as a base and another
//integer as an exponent. The function returns the value of the base raised
//to the power of the exponent. Use only exponents greater than or equal to 0
//powerCalculator(10, 2) should return 100
//powerCalculator(10, -2) should return exponent should be >= 0
//input: (10, 2)
//output: 100

function powerCalculator(base, exponent) {
    //this is just a condition
    if (exponent < 0) {
        return 'exponent should be greater than 0'
    }
    //this is the base case
    if (exponent === 0) {
        return 1
    }
    //recurring case
    return base * powerCalculator(base, exponent - 1)
}

console.log(powerCalculator(10, 3));
/*
power(10, 3) = 1000
10 * power(10, 2) => 10 * 100 = 1000
10 * power(10, 1) => 10 * 10 = 100
10 * power(10, 0) => 10 * 0 = 10
*/

//Reverse String: write a function that reverses a string: string as input, reverse
//and return the new string
//Input: 'string'
//Output: 'gnirts'

function reverseString(string) {
    //base case
    if (string.length === 0) {
        return ''
    }
    //recursive case
    return reverseString(string.slice(1)) + string.charAt(0);

}

console.log(reverseString('string'));

//nth Triangular Number
//calculate the nth Triangular Number. A triangluan number counts the objects
//that can form an equalateral triangle with n dots on a side, and is equal to the
//sum of the n natural numbers from 1 to n, this is the Triangular Number
//Sequence: 1,3,6,10,15,21,28,36,45

function nthTriangularNumber(n) {
    //base case
    if (n === 1) {
        return n
    }
    //recursive case
    return n + nthTriangularNumber(n-1)
}
console.log(nthTriangularNumber(3))

//String Splitter
//function that splits a string based on a separator (similar to String.prototype.split)
//dont use .split() to solve
//Input: 02/20/2020
//Output: ["02", "20", "2020"]

function stringSplitter(string, split) {
    //base case
    if (!string.includes(split)) {
        return [string] 
    }
    const newIndex = [string.slice(0, string.indexOf(split))];
    return newIndex.concat(stringSplitter(string.slice(string.indexOf(split) + 1), split))
    //recursive case
    //if the string has a character save it and call stringSplitter w empty array
    //iterate until you find the slash, save the string before the slash, call stringSplitter with the
    //rest of the string
    //when we get to a slash, push string to array

}

console.log(stringSplitter('02/20/2020', '/'))

//Fibonacci
//function that prints the Fibonacci sequence of a given number. Series of numbers in
//which each number is the sum of the 2 preceding numbers e.g. 7th fibonacci number
//in a fibonacci sequence is 13- 1, 1, 2, 3, 5, 8, 13
function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(7))

//Factorial
//function that finds the factorial of a given number, can be found by multiplying
//that number by each number between itself and 1
function factorial(n) {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1);
}
console.log(factorial(4))

//Find a Way Out of the Maze
//entered a maze and need to find your way out of it. There are more than one possible
//paths through the maze to the single exit point, write a function
//to help you find a possible path through the maze

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

//Find all the ways out of the maze
//use the above maze and modify your soultion so it finds all the possible exit paths through the maze
//to find all possible exit paths through the maze, think about how many places you can move at each turn
//possibly up, down, left, or right?

//Anagrams
//anagram = any word or phrase that uses the letters of a given word or phrase in a rearanged order
//function that creates an anagram list, listing all the rearrangements of a given word
//use prefix e, then a, s, t and list all the permutations for each prefix first
function anagrams(str) {
    if (str.length === 1) {
        return str;
    }
    else if (str.length === 2) {
        return [str, reverseString(str)];
    }
    let totalAnagrams = [];

    for (let i = 0; i < str.length; i++) {
        let subAnagram = [];
        //remove everything before and after the selected char
        subAnagram = subAnagram.concat(anagrams(str.substring(0, i) + str.substring(i + 1)))
        //take the char and append everything after it
        subAnagram = subAnagram.map(anagram => str.charAt(i) + anagram)
        //add it to the total
        totalAnagrams = subAnagram.concat(totalAnagrams)
    }
    return totalAnagrams;
}
console.log(anagrams('east'))

//Organization chart
//function that prints the following org chart w proper indentation to show hierarchy
let facebookStaff = {
    Zuckerberg: {
      Schroepfer: {
        Bosworth: {
          Steve: {},
          Kyle: {},
          Andra: {},
        },
        Zhao: {
          Richie: {},
          Sofia: {},
          Jen: {},
        },
      },
      Schrage: {
        VanDyck: {
          Sabrina: {},
          Michelle: {},
          Josh: {},
        },
        Swain: {
          Blanch: {},
          Tom: {},
          Joe: {},
        },
      },
      Sandberg: {
        Goler: {
          Eddie: {},
          Julie: {},
          Annie: {},
        },
        Hernandez: {
          Rowi: {},
          Inga: {},
          Morgan: {},
        },
        Moissinac: {
          Amy: {},
          Chuck: {},
          Vinni: {},
        },
        Kelley: {
          Eric: {},
          Ana: {},
          Wes: {},
        },
      },
    },
  };
  
  function hierarchy(org, level = 0) {
    let tab = ' '.repeat(level * 4);
    Object.keys(org).forEach((key) => {
      console.log(tab + key);
      hierarchy(org[key], level + 1);
    });
  }
  hierarchy(facebookStaff);

//binary mock interview question 
function toBinary(x) {
    if(x === 0 || x === 1) {
        return x.toString();
    }
    const lsb = (x % 2).toString()
    const restOfBitsInDecimal = Math.floor(x / 2);
    const restOfBitsInBinary = toBinary(restOfBitsInDecimal)
    return restOfBitsInBinary + lsb;
}
// console.log(toBinary(22));
 
//upper case string
function upperStr(str) {
    if (str === '') {
        return ''
    }
    const newChar = str[0].toUpperCase();
    return (newChar + upperStr(str.slice(1)));
}
// console.log(upperStr('hello'));

//isValid function?????
function isValid(str, open=0) {
    if (str.length === 0) {
        return open === 0;
    }
    if (open < 0) {
        return false;
    }
    const char = str.charAt(0);
    if (char === '(') {
        open++;
    }
    if (char === ')') {
        open--;
    }
    return isValid(str.slice(1), open);
};
// console.log(isValid('((()))'));