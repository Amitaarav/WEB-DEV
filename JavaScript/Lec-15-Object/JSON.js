const users = `{
    name : "AMIT KUMAR",age : 23, gender : "Male"
}`

// const parseJSON = (json) =>{
//     console.log(users["name"])
// }
const user = JSON.parse(users)
console.log(user["gender"])