// sumPrimes(10) = (2 + 3 + 5 + 7) = 17
// sumPrimes(12) = (2 + 3 + 5 + 7 + 11) = 28

// sonlarni aylantirish uchun for
// let num = function (n) {
//   let natija = 0;
//   for (let i = 2; i <= n; i++) {
//     let tubson = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         tubson = false;
//         break;
//       }
//     }
//     if (tubson == true) {
//       natija += i;
//     }
//   }
//   return natija;
// };

// console.log(num(400));

// let sum = (a, b) => a + b;

// function func() {
//   return 5;
// }

// let age = prompt("What is your age?", 18);

// let welcome = age < 18 ? () => alert("Hello!") : () => alert("Greetings!");

// welcome();

// let sum = (a, b) => {
//   // the curly brace opens a multiline function
//   let result = a + b;
//   return result; // if we use curly braces, then we need an explicit "return"
// };

// alert(sum(1, 2)); // 3

// console.log(name, name());

// ! declaration
// function name(params) {
//   return;
// }

//! Function expressions
// let name = function () {
//   return;
// };

// ! Arrow function
// let name = () => {
//   return;
// };

// "use strict";

// let age = prompt("What is your age?", 18);

// // conditionally declare a function
// if (age < 18) {
//   function welcome() {
//     alert("Hello!");
//   }
// } else {
//   function welcome() {
//     alert("Greetings!");
//   }
// }

// // ...use it later
// welcome(); // Error: welcome is not defined

"use strict";

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {
  welcome = function () {
    alert("Hello!");
  };
} else {
  welcome = function () {
    alert("Greetings!");
  };
}

welcome(); // ok now
