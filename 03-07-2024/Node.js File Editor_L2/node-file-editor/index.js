
const fs = require("fs")
const path = require("path");

let operation1 = process.argv[2]
let operation2 = process.argv[3]


if (operation1 === "read" && operation2 == "file.txt") {
    fs.readFile("./file.txt", "utf-8", (err, res) => {
        const operation = process.argv
        let mycommand = operation[2]
        if (mycommand === "read") {
            console.log(res)
        }
    })
}

else if (operation1 === "append") {

    fs.appendFile("./file.txt", ` ${process.argv[3]}`, "utf8", (res) => {
        console.log("Append successfully")
    })
}

else if (operation1 === "delete") {
    fs.unlink("./new.txt", (res) => {
        console.log("done")
    })
}
else if (operation1 === "create") {
    const filepath = path.join(__dirname, "new.txt");

    fs.writeFile(filepath, `${operation2}`, "utf-8", (err, res) => {

        console.log("New TXT file is created")

    })
}


else if (operation1 === "rename") {
    const oldName = path.join(__dirname, 'jaat');
    const newName = path.join(__dirname, operation2); 

    fs.rename(oldName, newName, (err) => {
        if (err) {
            console.error("Error renaming file:", err);
            return;
        }
        console.log("File renamed successfully");
    });
}
