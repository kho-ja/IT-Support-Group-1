let number = 99999999999999999999;
let string = "Hello world!";
let boolean = true;
let undef;
let dataNull = null;
let bigint = BigInt("99999999999999999999");
let bigint2 = 99999999999999999999n;
let symbol = Symbol("faskjdf");

console.log(number, typeof number);
console.log(string, typeof string);
console.log(boolean, typeof boolean);
console.log(undef, typeof undef);
console.log(dataNull, typeof dataNull);
console.log(bigint, typeof bigint);
console.log(bigint2, typeof bigint2);
console.log(symbol, typeof symbol);

let object = {
  name: "Toshmat",
  age: 18,
  married: false,
  obj: {
    name: "Gishmat",
  },
  arr: [],
};
let array = ["asdkfjlasd", 283478, null, { name: "salomat" }, ["aksdhf"]];

let students = [
  {
    name: "ismi",
  },
  {
    name: "ismi2",
  },
  {
    name: "ismi3",
  },
];
function func() {}

console.log(object, typeof object);
console.log(array, typeof array);
console.log(func, typeof func);
console.log(students, typeof students);
