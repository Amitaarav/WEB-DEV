function findSum(n)
{
    let ans = 0;
    for(let i=0;i<n;i++)
    {
        ans = ans+i;
    }
    return ans;
}

// busy waiting

function findSumTill100(){
    console.log(findSum(100))
}
// asynchronous function
setTimeout(findSumTill100,1000)
console.log("Hello world")

setTimeout(console.log("Amit"),5000)