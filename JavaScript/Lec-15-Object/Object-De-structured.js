//Destructuring of Object
const course = {
    coursename: "Js In Hindi",
    price: "99",
    courseInstructor: "hitesh"
}

// course.courseInstructor
const {coursename : name} = course
console.log(name)

//{} --> de-structuring is going on
const navbar = ({company}) =>{
            
}
navbar(company = "Amit")

// concept of APIs : apna kaam kisi aur ke sir pe daal do
//menucard
//JSON
// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }


