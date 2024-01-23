//block of code that performs a specific task , can be invoke whenever needed
function myFunction( msg )//parameter
{
    console.log(msg);
}
myFunction("I love javascript");//argument
//avoid from redundancy
function sum(a,b)
{
    console.log(a+b)

}
sum(3,4)

function sum2(x,y){
    //local variables -> scope
    s=x+y
    return s;
}
// parameters of function are like local variables : scope in block
let val = sum(10,15)
console.log(val)








