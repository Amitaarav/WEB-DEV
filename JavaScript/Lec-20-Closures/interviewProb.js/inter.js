function oneOuter()
{
    var c = 20
    function outer(b)
{
    var a = 5
    function inner()
    {
        console.log(a,b,c)
    }
    return inner();
}
return outer
}
// function close() {
//     oneOuter()("Hello")
// } 
// close()
var close = oneOuter()("Heloo")
close