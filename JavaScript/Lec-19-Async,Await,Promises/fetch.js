const fs = require("fs")
fs.readFile("Lec-19-Async,Await,Promises\a.js","utf-8",function(err,data){
    if(err){
        console.log("file doesn't exist")
    }
    else
    {
        console.log(data)
    }
})

console.log("Hi there")
let a=0;
// takes very long longer than the read file

for(let i =0;i<1000;i++)
{

    a++;
    console.log(a)
}
console.log("hi there 2")