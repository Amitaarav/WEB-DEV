// Stack

// let myYoutubeName="AmitKumarGupta"
// let anotherName=myYoutubeName
// anotherName="Chai aur code"
// console.log(anotherName)
// console.log(myYoutubeName)

// let userOne ={
//     email :"user@google.com",
//     upi:"user@ybl"
// }
// let userTwo=userOne;

// userTwo.email="AmitAArav";
// console.log(userOne)
// console.log(userTwo)


// arrays
//method-1
const myArr=[4,5,6,7,8,9]//elements can be different
// console.log(myArr);//shallow copy-share same references
// console.log(myArr[0])

// const myHeros=["Shaktimaan","Nagraj"];

// const myArr2=new Array(1,2,3,4)
// console.log(myArr2);
//methods-2
// myArr2.push(6);
// myArr2.push(7);
// console.log(myArr2)

// myArr.unshift(9);// add 9 and shift other elements also
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));


// const newArr=myArr.join();//binding the array and the type of the array will be converted to string
// console.log(newArr);
// console.log(typeof newArr)

//slice-return a copy of section af array and splice
console.log("A ",myArr);//original array

const myn1=myArr.slice(1,3);//slice removes index 1st,2nd excluding last index ie 3rd but real array will be same
console.log("B ",myArr);
console.log(myn1);

const myn2=myArr.splice(1,3);//slice removes index 1st,2nd including last index ie 3rd along with real array will be rest of the elements after removing
console.log("C ",myArr);
console.log(myn2);

