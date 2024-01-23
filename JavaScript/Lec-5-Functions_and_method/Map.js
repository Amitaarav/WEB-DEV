//create a new with the results of some operation.The value its callback returns are used to form new array
//it just work nearly similar to foraEach method
// arr.map(callbackFxn)

let num=[67,62,16]
num.map((val)=>{
    console.log(val);
})
let calSquare=(val)=>{
    console.log(val*val);
}
let newArr=num.map((val)=>
{
    return val*val;
})
console.log(newArr)
//map is used to create new array while forEach is ud=sed to print or calculate values