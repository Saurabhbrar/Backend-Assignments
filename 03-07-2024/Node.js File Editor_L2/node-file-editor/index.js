
const fs = require("fs")
let operation1 = process.argv[2]
let operation2 = process.argv[3]

if(operation1 === "read" && operation2 == "file.txt"){
    fs.readFile("./file.txt", "utf-8", (err, res) => {
        const operation = process.argv
        let mycommand = operation[2]
        if (mycommand === "read") {
            console.log(res)
        }})
}

else if (operation1 === "append"){
  
    fs.appendFile("./file.txt", ` ${process.argv[3]}` ,"utf8",(res)=>{
        console.log("Append successfully")
    })
}

else if (operation1 === "delete"){

}

