// let rs = require("readline-sync");
//
// let input = rs.question('What phrase would you like to encrypt? ').toLowerCase();
// let shift = parseInt(rs.question('How many letters would you like to shift? '));
// let encrypted;
//
// function cCipher() {
//   for(let i = 0; i < input.length; i++) {
//       let temp = input.charAt(i);
//       if(temp !== " ") {
//          encrypted += String.fromCharCode(shift + String.prototype.charCodeAt(temp));
//       } else {
//         encrypted += temp;
//       }
//   }
//   return encrypted;
// }
//
//
//
// console.log(cCipher());
// let nums = [2, 7, 11, 15];
// let target = 9;

// var twoSum = function(nums, target) {
//     let temp;
//     let x = nums[1];
//     let indexX = 1;
//     for(let indexI = 0; indexI < nums.length; indexI++) {
//       let i = nums[indexI];
//         if(x == i) {
//             indexI++;
//             i = nums[indexI];
//         } else {
//             temp = i + x;
//             if(temp == target) {
//                 return [indexI, indexX];
//             } else {
//                 indexX++;
//                 x = nums[indexX];
//             }
//         }
//     }
// };
// x = -123;
// var reverse = function(x) {
//   let temp = [];
//   if (x < 0) {
//     x = x * -1;
//     temp[0] = "-";
//   }
//   let y = x.toString();
//    y = y.split("");
//   for(let i = y.length - 1; i >= 0; i--) {
//       temp.push(y[i]);
//   }
//   let final = temp.join("");
//   let f = parseInt(final);
//   if(f > Math.pow(2,31) || f < Math.pow(-2,31)) {
//     return 0;
//   } else {
//     return f;
//   }
// };

// nums = [3,2,2,3];
// val = 2;
// var removeElement = function(nums, val) {
//     let final = [];
//     for(let i = 0; i < nums.length; i++) {
//         if (nums[i] != val) {
//             final.push(nums[i]);
//         }
//     }
//     return final.length;
// };

// haystack = "hello";
// needle = "ll";
// var strStr = function(haystack, needle) {
//     let index = 10;
//     haystack = haystack.split("");
//     needle = needle.split("");
//     for (let i = 0; i < haystack.length; i++) {
//             for(let j = 0; j < needle.length; j++) {
//                 if (haystack[i] == needle[j]) {
//                 }
//             }
//     }
//     return index;
// };


// A = [1,2,3,3];
// var repeatedNTimes = function(A) {
//     let set = new Set();
//     for(let i = 0; i < A.length; i++) {
//         if(set.has(A[i])){
//             return A[i];
//         } else{
//             set.add(A[i]);
//         }
//     }
// };
//sup dork
// what does the .filter() do?
//. w/
//nvm I think I get the concept
//um so...
//correct
//right now the output if you run this is [2,4,1,3] but it should be [0,2,4,1,3]
//Yes because it is never going in the else if in the case of A==0 change it to an if
//this will have the exact same output
// hm let me try running it
// jk I can't get leetcode to load being very slow
//oh good
// did that work?
//nope!
//Is it even going into evenItem if A=0???
//yes because the output has even numbers in it
// I'm not talking about that, I mean specifically if it is 0 does it go into evenItem
// yes it def does
//I know filter can handle 0s because it works fine in the w3 try it section for filter
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_filter
// in the example change the >=18 to == 0 and make one of the array elements 0 and it works
//do it in w3s editor, you can just enter whatever cod e
//I've been doing stuff in node and it also doesnt work but I dont undersand why. 0%2 does == 0 though
//filter is good and cool!
//there are other ways but i dont want to just run a double for loop or something. Sure. I havent thought through
// the other logic, I just know that filter should be real good here. Filter is simple! It works with any number but 0
//but I feel like I should understand why
// doesn't work on w3 either
//I am suspicious of the filter function
// I would do something simple like this hold on
//First of all you would only need one for loop. Simpler is usually more efficient anyway.
//I think you should go with something simple that works. Clearly not.
// let me read more about filter for a second
//got it but I don't totally understand why yet
// what did you change? That's weird because its a boolean ooooooooo
// I totally get it
// I would have to call you though
//https://www.w3schools.com/jsref/jsref_foreach.asp

A = [0,1,2,3,4];

function evenItem(A) {
  let evenArr = [];
  for(i = 0; i < A.length; i++) {
    if (A[i] % 2 == 0) {
      evenArr.push(A[i]);
    }
  }
  return evenArr;
}

function oddItem(A) {
  let oddArr = [];
  for(i = 0; i < A.length; i++) {
    if (A[i] % 2 != 0) {
      oddArr.push(A[i]);
    }
  }
  return oddArr;
}

var sortArrayByParity = function(A) {
    let evenArr = evenItem(A);
    let oddArr = oddItem(A);
    let finalArr = evenArr.concat(oddArr);
    return finalArr;
};


console.log(sortArrayByParity(A));
