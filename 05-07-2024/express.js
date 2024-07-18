const express = require("express")
const fs = require("fs")
const server = express()
const PORT = 3000
server.use(express.json())
const path = require('path');
const filePath = path.join(__dirname, 'documents', 'db.json');


server.get("/home",(req,res)=>{
    let data = fs.readFileSync("./db.json","utf-8")
    console.log(`this is the data ${data}`)
    res.send(`this is homepage ${data}`)
})


server.post("/added_data",(req,res)=>{
    let uplodedData = req.body
    let jsnfolderData = fs.readFileSync("./db.json","utf-8")
    let parsedData = JSON.parse(jsnfolderData)
    parsedData.todos.push(uplodedData)
    fs.writeFileSync("./db.json",JSON.stringify(parsedData))
    res.send(`response is this ${parsedData}`)

    

    res.send(`this is homepage ${data}`)
})


server.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})