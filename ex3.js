// Khai báo biến
let a = true;
let b = false;
let c = true;

// a. a && b && c
// true && false && true -> false
console.log(a && b && c); // false

// b. a && b || c
// (true && false) || true -> false || true -> true
console.log(a && b || c); // true