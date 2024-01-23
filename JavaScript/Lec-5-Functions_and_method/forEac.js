let arr =[1,2,3,4,5];
arr.forEach(function printVal(val){
    //value at each index
    console.log(val);
});
// in arrow
arr.forEach((val)=>{
    console.log(val);
});
let arr2=["Pune","Delhi","Mumbai"];
//used to perform different action on different value/item
arr2.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
})
arr2.forEach((arr,idx)=>{
    console.log(arr,idx);
})
//it can be used only for arrays not for strings
//can be called as Higher order function or method/\ these function take other function as parameter or they return function
//call back funtion--> It is a function to execute for each element in the array
