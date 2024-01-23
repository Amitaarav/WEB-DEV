// methode : built in function to manipulate a string

// 1. str.toUpperCase()
// 2. str.to

let str=" Amit Kumar"
console.log(str)
let strUpper =str.toUpperCase()// Create New string 
console.log(strUpper)
str=str.toUpperCase()
console.log(str)

// string in js is immutable

// trim : remove white spaces / not in between method

let str2 ="  Amit   Kumar   Gupta    "
console.log(str2.trim())

// 4. str.slice(start?,end?)// return part of string // ending value is non-inclussive
let str3="01234567"
console.log(str3.slice(1,6))

//5. concatenation : addition of two string

let str1="Amit"
let str5=" Kumar"

let rest=str1.concat(str5)
console.log(rest)

//6. replace

let str6="Hello"
console.log(str6.replace("H","Y")+"w")

