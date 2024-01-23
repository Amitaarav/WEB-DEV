// perform some operation & reduces the array to a single value.It returns that single value
let arr=[1,2,3,4,5,6,7]
let avg=arr.reduce((res , curr)=>
{
 let sum= res +curr; 
 return sum/arr.size();
})
console.log(avg);