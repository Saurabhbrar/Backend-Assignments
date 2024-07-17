
/* if(process.argv[2] == "sum"){
    console.log(Number(process.argv[3])+Number(process.argv[4]))
} */
    operation = process.argv[2]
    let num1 = Number(process.argv[3])
    let num2 = Number(process.argv[4])
    
    switch (operation) {
        case "sum":
            console.log(num1 + num2)
            break;
    
        case "sub":
            console.log(num1 - num2)
            break;
    
        case "mult":   
        console.log(num1 * num2)
        break; 
    
        case "divide":
            console.log(num1 / num2)
            break; 
        case "sin":
            console.log(Math.sin(num1))
            break; 
    
            case "cos":
            console.log(Math.cos(num1))
            break; 
    
            case "tan":
            console.log(Math.tan(num1))
            break; 
    
    
            default:
                console.log(Math.random100())
    }