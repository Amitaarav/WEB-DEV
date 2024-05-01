const user2 = [{
    firstName : "Amit",
    gender : "Male"
},
{
    firstName : "Bhanu",
    gender : "Male"
},
{
    firstName : "Priya",
    gender : "female"
}]

console.log(user2)
for(let i=0;i<user2.length;i++)
if(user2[i]["gender"]=="female")
{
    console.log(user2[i]["firstName"])
}