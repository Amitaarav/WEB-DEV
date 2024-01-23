//practice question 2
let gameNum=25;

let userNum=prompt("Guess the Game Number : ");

while(userNum != gameNum)
{
    userNum=prompt("you enterd wrong number , guess again:");
}
console.log("congratulations, You entered the right Number");
