let num = 123.321;

console.log(num.toFixed(1));

console.log(num.toPrecision(1));

console.log(Number.isNaN(num));

console.log(Number.isFinite(num));

console.log(Number.isInteger("Hello"));

console.log(parseFloat("123.20 hello"));

console.log(parseInt("123.20 hello"));

console.log(Number.MAX_VALUE * 1e+10);
console.log(Number.MIN_VALUE * 1e-10);