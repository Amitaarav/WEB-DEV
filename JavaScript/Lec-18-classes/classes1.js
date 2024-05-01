// *********don't use this type of declairation of classes
// const dog = {
//     name : "doggie",
//     legCounts:2,
//     speaks : "bhow bhow"
// }
// const cat = {
//     name : "kittu",
//     legCounts:3,
//     speaks : "meu meu"
// }

class Animal{
    // constuctor
    constructor(name,legcounts,speaks){
        this.name = name;
        this.legcounts = legcounts;
        this.speaks = speaks;
    }
    static myType()
    {
        console.log("Animal")
    }
    speak(){
        console.log("hi there " + this.speaks)
    }
}
Animal.myType();
let dog = new Animal("doggie",4,"bhow bhow");
let cat = new Animal("kittu",4,"meu meu")

// function printStr(animal){
//     console.log("animal " + animal["name"] + " speaks like " +animal["speaks"])
// }

dog.speak()//call function on object