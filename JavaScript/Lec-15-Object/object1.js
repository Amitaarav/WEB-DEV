//singleton

//object literals
//key and value can be defined in object

// declaration of symbols
const mySym = Symbol("key1")
const mySym1 = Symbol("key2")
const JsUser = {
    name : "Amit Kumar",
    age : 18,
    "fullName" : "Amit Kumar Gupta",
    "Papa Ka name" : "Gyan Chandra Gupta",
    //we cannot declare directly to key like as below
    mySym : "ket1",//is is not used as symbol but it is string
    [mySym1] : "key2",
    location : "Calicut",
    email : "aaravamit555@gmail.com",
    isLoggedIn : false,
    lastLogInDays : ["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser.fullName) // if no space then can access throgh dot
console.log(JsUser["Papa Ka name"]) //if space is there we cannot access using dot(.) method
console.log(typeof JsUser.mySym)
console.log(JsUser[mySym1])
console.log(typeof JsUser.mySym1)


//change the object value

JsUser.name="Priyanshi Gupta"
console.log(JsUser.name)
//for no chane to proagate 
// Object.freeze(JsUser)
//if we are going to change the values in object it will not propagate even it is not going to give any error
JsUser.name="Arpit Kumar"
console.log(JsUser.name)//now it will return same name as previous ie Priyanshi Gupta
console.log(JsUser)
/**{
    name: 'Priyanshi Gupta',
    age: 18,
    fullName: 'Amit Kumar Gupta',
    'Papa Ka name': 'Gyan Chandra Gupta',
    mySym: 'ket1',
    location: 'Calicut',
    email: 'aaravamit555@gmail.com',
    isLoggedIn: false,
    lastLogInDays: [ 'Monday', 'Saturday' ],
    [Symbol(key2)]: 'key2'
}*/

// Adding Greeting
JsUser.greeting = function (){
    console.log("Hello Js User")
}

console.log(JsUser.greeting)//[Function (anonymous)]
console.log(JsUser.greeting())//Hello Js User
// undefined

// string interpolation
JsUser.greeting2 = function(){
    console.log('Hello Js User, ${this.name}')
}
console.log(JsUser.greeting2())

