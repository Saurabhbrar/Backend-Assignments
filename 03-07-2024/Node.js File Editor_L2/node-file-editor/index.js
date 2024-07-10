const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const operation = args[0];
const filePath = args[1];
const content = args[2];


function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
        } else {
            console.log(data);
        }
    });
}


function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting the file:', err);
        } else {
            console.log(`File '${filePath}' deleted`);
        }
    });
}

function createFile(filePath) {
    fs.writeFile(filePath, '', (err) => {
        if (err) {
            console.error('Error creating the file:', err);
        } else {
            console.log(`File '${filePath}' created`);
        }
    });
}


function appendFile(filePath, content) {
    fs.appendFile(filePath, content + '\n', (err) => {
        if (err) {
            console.error('Error appending to the file:', err);
        } else {
            console.log(`Content appended to the file '${filePath}'`);
        }
    });
}



function renameFile(oldPath, newPath) {
    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.error('Error renaming the file:', err);
        } else {
            console.log(`File '${oldPath}' renamed to '${newPath}'`);
        }
    });
}



function listFiles() {
    fs.readdir(process.cwd(), (err, files) => {
        if (err) {
            console.error('Error listing files:', err);
        } else {
            files.forEach(file => {
                console.log(file);
            });
        }
    });
}


switch (operation) {
    case 'read':
        if (filePath) {
            readFile(filePath);
        } else {
            console.log('Please provide a file path to read.');
        }
        break;
    case 'delete':
        if (filePath) {
            deleteFile(filePath);
        } else {
            console.log('Please provide a file path to delete.');
        }
        break;
    case 'create':
        if (filePath) {
            createFile(filePath);
        } else {
            console.log('Please provide a file path to create.');
        }
        break;
    case 'append':
        if (filePath && content) {
            appendFile(filePath, content);
        } else {
            console.log('Please provide a file path and content to append.');
        }
        break;
    case 'rename':
        const newPath = args[2];
        if (filePath && newPath) {
            renameFile(filePath, newPath);
        } else {
            console.log('Please provide the old and new file paths to rename.');
        }
        break;
    case 'list':
        listFiles();
        break;
    default:
        console.log('Invalid operation');
}
