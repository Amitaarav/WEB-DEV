// //global function that js provides

// function greet(){
//     console.log("Hello world")
// }
// setTimeout(greet,3*1000)
// setInterval(greet,1*1000)

// function setInterval(a,duration)
// {
//     console.log("Amit")
// }
const { start } = require("repl")

console.log("start")
setTimeout(function () {
  console.log("callBack")
},5000)

console.log("end")

let startDate = new Date().getTime()
let endDate= startDate
while(endDate < startDate + 10000)
  {
    endDate = new Date().getTime()
  }
console.log("while expires")

