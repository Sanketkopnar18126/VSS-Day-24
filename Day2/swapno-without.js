let a = 10;
let b = 20;

let swap = (a, b) => {
  a = b + a; // 30
  b = a - b; // 10
  a = a - b; //20
  //   return a, b;
};
// console.log({ a, b });

console.log({ a, b });
// console.log(swap(a, b));
