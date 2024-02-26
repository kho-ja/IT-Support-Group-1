// let i = 100001;
// do {
//   i++;
//   console.log(i);
// } while (i < 10);

// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }

for (let i = 0; i <= 3; i++) {
  // shows 0, then 1, then 2
  if (i == 1 || i == 2) {
    continue;
  }
  console.log(i);
}
