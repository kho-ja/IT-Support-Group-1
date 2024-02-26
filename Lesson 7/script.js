// debugger;
// outer: for (let i = 0; i < 3; i++) {
//   inner: for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, "");
//     // what if we want to exit from here to Done (below)?
//   }
//   inner1: for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, "");

//     // what if we want to exit from here to Done (below)?
//   }
// }

// alert("Done!");

// let i = 0;
// while (++i < 5) alert(i);

// let i = 0;
// while (i++ < 5) alert(i);

// for (let i = 0; i < 5; ++i) alert(i);
// for (let i = 0; i < 10; i++) {
//   if (i % 2) continue;
//   console.log(i);
// }

let fasl = prompt("Fasl: ").toLowerCase();

// if (fasl == "bahor") {
//   console.log("bahor keldi");
// } else if (fasl == "qish") {
//   console.log("sovuq");
// } else if (fasl == "kuz") {
//   console.log("barglar to'kild");
// } else if (fasl == "yoz") {
//   console.log("yoz keldi");
// } else {
//   console.log("bunday fasl yoq");
// }

// do above code in switch
switch (fasl) {
  case "bahor":
    console.log("bahor keldi");
    break;
  case "kuz":
    console.log("barglar to'kildi");
    break;
  case "qish":
    console.log("qahraton sovuq");
    break;
  case "kuz":
    console.log("kuz keldi");
    break;

  default:
    console.log("bunday fasl yoq");
    break;
}
