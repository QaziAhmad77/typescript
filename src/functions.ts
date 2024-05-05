// const func1 = (n: number, m: number):number => {
//   return n * m;
// };
// console.log(func1(10, 10));

// type funcType = (n: number, m: number) => number;
// const func1: funcType = (a, b) => {
//   return a * b;
// };
// console.log(func1(10, 10));

// type funcType = (n: number, m: number, l?: number) => number;
// const func1: funcType = (n, m, l) => {
//   if (typeof l === "undefined") return n * m;
//   return n * m * l;
// };
// console.log(func1(10, 10));

type funcType = (n: number, m: number, l?: number) => number;
const func1: funcType = (n, m, l = 10) => {
  return n * m * l;
};
console.log(func1(10, 10));
