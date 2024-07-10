const crypto = require('crypto');

const args = process.argv.slice(2);
const operation = args[0];

function calculate(operation, args) {
    let num1, num2, result;

    switch (operation) {
        case 'add':
            num1 = parseFloat(args[1]);
            num2 = parseFloat(args[2]);
            result = num1 + num2;
            console.log(result);
            break;

        case 'sub':
            num1 = parseFloat(args[1]);
            num2 = parseFloat(args[2]);
            result = num1 - num2;
            console.log(result);
            break;

        case 'mult':
            num1 = parseFloat(args[1]);
            num2 = parseFloat(args[2]);
            result = num1 * num2;
            console.log(result);
            break;

        case 'divide':
            num1 = parseFloat(args[1]);
            num2 = parseFloat(args[2]);
            if (num2 === 0) {
                console.log('Error: Division by zero');
            } else {
                result = num1 / num2;
                console.log(result);
            }
            break;

        case 'sin':
            num1 = parseFloat(args[1]);
            result = Math.sin(num1);
            console.log(result);
            break;

        case 'cos':
            num1 = parseFloat(args[1]);
            result = Math.cos(num1);
            console.log(result);
            break;

        case 'tan':
            num1 = parseFloat(args[1]);
            result = Math.tan(num1);
            console.log(result);
            break;

        case 'random':
            let length = parseInt(args[1]);
            if (isNaN(length)) {
                console.log('Provide length for random number generation.');
            } else {
                let randomBytes = crypto.randomBytes(length);
                let randomNumber = parseInt(randomBytes.toString('hex'), 16);
                console.log(randomNumber);
            }
            break;

        default:
            console.log('Invalid operation');
    }
}
calculate(operation, args);
