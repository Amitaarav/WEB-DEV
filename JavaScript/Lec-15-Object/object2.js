// //
// const tinderUser = new Object() // singletone object declairation
const tinderUser = {} // non singletone object
tinderUser.id = '123abc'
tinderUser.name = "Sammy"
tinderUser.isloggedIn = true
console.log(tinderUser) //no change in output change in object declairation

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullName : {
            firstName : "Amit",
            LastName : "Gupta"
        }
    }
}
console.log(regularUser.fullname.userfullName.firstName)

const obj1 = {1 : "a",2 : "b"}
const obj2 = {3 : "c", 4 : "d"}
const obj3 = {obj1,obj2}
console.log(obj3)
const obj4 = {...obj1, ...obj2}
console.log(obj4)

//DB values

const users = [
    {
        id : 1,
        email:"abc@gmail.com"
    }
]

// users[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

//object loop through
console.log(tinderUser.hasOwnProperty('isLoggedIn'))