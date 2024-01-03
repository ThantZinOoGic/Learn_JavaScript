for(let i = 0; i< 5; i++)
{
    console.log(i);
}

for(let i=0; i<4 ; i++)
{ 
    console.log("outer loop", i)
    innerLoop:
    for(let j = 0; j<4; j++)
    {
        console.log("inner loop",j);
        if(j== 2) break innerLoop;
    }
 

}

let arr = [1, 2, 3, 4, 5];
for(item in arr) {
    console.log("for in ", item);
}

for(item of arr)
{
    console.log("for of ", item);
}


let obj = {
    name : "Thant Zin Oo",
    job : "Developer"
}

for(props in obj)
{
    console.log(obj[props]);
}

for(props in obj)
{
    console.log(props);
}




let start = 0;
while (start < 5)
{
    console.log(start);
    start ++;
}

let num = 5;
do{
    console.log(num);
} while(num < 6);



let count = 3;
switch(count)
{
    case 1: console.log("count is equal 1");
    break;
    case 2 : console.log("count is equal 2");
    break;
    case 3: console.log("count is equal 3");
    break;
    case 4: console.log("count is equal 4");
    break;
    default: console.log("count is not equal any");
}