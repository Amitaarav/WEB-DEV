//create new array of elements that give true for condition / filter

let arr=[1,2,3,4,5,6,7];
let evenArr=arr.filter((val)=>{
    return val%2===0;
});
console.log(evenArr);
let oddArr=arr.filter((val)=>{
    return val%2 !==0;
});
console.log(oddArr);
let Greater3=arr.filter((val)=>
{
    return val>3;
});
console.log(Greater3);
console.log(arr.length);
