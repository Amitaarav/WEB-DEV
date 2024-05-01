const fs = require("fs")
function readFile1(fileName){
    fs.readFile(fileName,"utf8",function(err,data){
        if(err){
            console.error("Error in reading file:",err)
            return
        }
        console.log("File content:",data)
    })
}
readFile1("a2.txt")