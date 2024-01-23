let num=[63,120,456,445];
let calSquare=(val)=>{
    console.log(val*val);
}
num.forEach((val)=>{
    console.log(val*val);
});
num.forEach(calSquare);