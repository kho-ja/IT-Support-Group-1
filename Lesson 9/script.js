// 1-masala

// // *
// // **
// // ***
// // ****
// // *****
// // ******
// let str = "*";
// for (let i = 0; i < 6; i++) {
//   console.log(str);
//   str = str + "*";
// }

// 2-masala
// //        *
// //       **
// //      ***
// //     ****
// //    *****
// //   ******
// //  *******
// let len = 10;
// let str = "";
// let total = "";
// for (let i = 1; i <= len; i++) {
//   let probel = "";
//   for (let j = 1; j <= len - i; j++) {
//     probel = probel + " ";
//   }
//   str = str + "*";
//   total += probel + str + "\n";
// }
// console.log(total);

//3-masala

// // pow(3, 2) = 9, 3 * 3
// // pow(3, 3) = 9, 3 * 3 * 3
// // pow(1, 100) = 1, 1 * 1 * 1 * ...* 1

// function pow(a, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result = result * a;
//   }
//   return result;
// }

// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 100));

// 4-masala
// // 1234
// // 4
// // 4 * 10 + 3
// // 43 * 10 + 2
// // 432 * 10 + 1
// // 4321

// function reverse(n) {
//   let result = 0;
//   while (n > 0) {
//     result = result * 10 + (n % 10);
//     n = Math.floor(n / 10);
//   }
//   console.log(result);
// }

// console.log(reverse(1232342344));
