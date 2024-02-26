// let num = 5;
// function showMessage() {
//   console.log(num);
// }

// showMessage();
// console.log(num);

// let userName = "John";

// function showMessage() {
//   let userName = "Bob"; // (1) changed the outer variable

//   let message = "Hello, " + userName;
//   alert(message);
// }

// alert(userName); // John before the function call

// showMessage();

// alert(userName); // Bob, the value was modified by the function

// let variable;
// function showMessage(from, text) {
//   // parameters: from, text
//   alert(from + ": " + text);
// }

// showMessage("Ann", "Hello!"); // Ann: Hello! (*)
// showMessage("Ann", "What's up?");

// function sum(a, b) {
//   return a + b;
//   console.log(1);
// }

// let result = sum(1, 2);
// alert(result);

// function checkAge(age) {
// if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// return age > 18 ? true : confirm("Did parents allow you?");
//   return age > 18 || confirm("Did parents allow you?");
// }

let a = prompt("a: ");
let b = prompt("b: ");

console.log(min(a, b));

function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}
