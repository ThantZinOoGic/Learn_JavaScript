function fnc1()
{
    console.log("Hello Function");
}

fnc1();


function fnc2()
{
    return "Hello Function";
}

console.log(fnc2());

add(1,2);
function add(a,b) {
    console.log(a+b);
}


let sub = (a,b) => a-b;

console.log(sub(10,1));

let multiple = (a, b) => {
    console.log(a * b);
}

multiple(2, 3);

const addOne = (a) => {
    return a + 1;
}

const double = (a) => a * 2;

console.log(double(addOne(5)));
