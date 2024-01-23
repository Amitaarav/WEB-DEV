getName();//call
console.log(x);//undefined// x is not defined
console.log(getName);//print function itself
var x=7;
function getName()
{
    console.log("Numaste");
}
console.log(x);// print 7

console.log(getName);//print function itself

//REASON: Memory Execution
console.log("********************")
var getName=()=>{
    console.log("Namaste");

}
getName();//call
