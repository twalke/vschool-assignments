// Write a function that accepts two numbers as parameters, and returns the sum.
function sum(num1, num2){
    // Your code here
    return num1 + num2;
}

// Write a function that accepts three numbers as parameters,
// and returns the largest of those numbers.
function largestNum(num1, num2, num3){
    // Your code here
    if(num1 > num2 && num1 >num3) {
      return num1;
    } else if(num2 > num1 && num2 > num3) {
      return num2;
    } else if(num3 > num1 && num3 > num2) {
      return num3;
    }
}

// Write a function that accepts one number as a parameter,
// and returns whether that number is even or odd. (Return the string "even" or "odd");
function evenOrOdd(num){
    // Your code here
    if(num%2 == 1) {
      return "odd";
    } else {
      return "even";
    }
}

// Write a function that accepts a string as a parameter.
// If the length of the string is less than or equal to twenty characters long,
// return the string concatenated with itself (string + string). If the string
// is more than twenty characters long, return the first half of the string.
function manipulateString(str){
    // Your code here
    if(str.length <= 20) {
      return str + str;
    } else {
      return str.slice(0,str.length/2);
    }
}


// Optional Challenges //

// Write a function that accepts a number ‘n’ as a parameter.
// Then print the first ‘n’ Fibonacci numbers and return their sum.
function printFibonacciNum(n){

}

// Write a function that accepts a string as a parameter.
// Return the most frequently occuring letter in that string.
// *White spaces count as a character*
function mostFrequentLetter(string){

}




module.exports = {
    sum,
    largestNum,
    evenOrOdd,
    manipulateString,
    printFibonacciNum,
    mostFrequentLetter
}
