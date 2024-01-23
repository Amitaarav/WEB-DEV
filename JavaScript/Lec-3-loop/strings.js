let str="Hello Amit ";
let str1="Kumar";
console.log(str[4]);
console.log(str+str1);

// templet Literals : a way to have embedded expression in string
let sentence=`This is a template literal ` // back tick : why ?
console.log(sentence);

//Why back tick
let obj={
    Number:10,
    item:"pen",
    price:10,

};
console.log("The cost of ", obj.Number,obj.item,"is",obj.price * obj.Number," rupees");

// To avoid multiple use of " " 
let output=`the cost of ${obj.Number} ${obj.item} is ${obj.price*obj.Number} rupees`;
// Not highlighted number is the part of string literal 
console.log(output);
//string interpolation : To create string by doing substitution of placeholders
//${obj.price*obj.Number} expression is iterpolated

//escape characters : single character

console.log("Amit\nKumar") 
console.log("Amit\tKumar")
console.log(str.length);
