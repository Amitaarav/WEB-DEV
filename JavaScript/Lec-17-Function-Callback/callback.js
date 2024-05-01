function calculateArithmetic(a,b,calculateFinalArithmetic) //function as an argument
{
    const ans = calculateFinalArithmetic(a,b) //function is called ie sum function
    return ans
}

// sum fuction definition
function sum(a,b)
{
    return a+b
}

const value = calculateArithmetic(1,2,sum)
console.log(value)