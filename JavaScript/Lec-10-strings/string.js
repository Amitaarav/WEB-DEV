const name="hitesh"
const repoCount=50
// console.log(name + repoCount+"Value");
//backticks/interpolation
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

//declaration of string
const gameName = new String('hiteshhc')
console.log(gameName)
console.log(gameName[0])//h
console.log(gameName.__proto__)//{}

console.log(gameName.length)
console.log(gameName.toUpperCase());


//access individual character -- two methods
//1)charAt
console.log(gameName.charAt(2));
//2) treat the string as an array-like object
//this property is not writable nor configurable
let CharatInd='hiteshhc'[1];
console.log(CharatInd)


console.log(gameName.indexOf('h'));

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString =gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="  hitesh   "
console.log(newStringOne.trim());4//remove starting and ending spaces

const url="http://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))
console.log(gameName)