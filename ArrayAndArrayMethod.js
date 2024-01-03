let arr = [0, 1, 2, 3, 4, 5];

arr.push(6);
console.log("push method", arr);

arr.pop();
console.log("pop method", arr);

arr.unshift(10);
console.log("unshift method", arr);

arr.shift();
console.log("shift method", arr);

console.log("Join Method" , arr.join(" - "));

arr.splice(0, 0, "Hello JS");
console.log("splice method", arr);

console.log(arr.length);

arr.map(item => {
    console.log(item);
})

let value = arr.filter(item => {
    return  item == 3;
});
console.log(value);

arr.shift();
let total = arr.reduce((a, b) => a+b);
console.log(total);

console.log(arr.toString());