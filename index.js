//calculator 

let result;

const op = prompt('enter operator');

const num1 = parseFloat(prompt ('enter the first Number; '));
const num2 = parseFloat(prompt ('enter the first Number; '));

//this will use switches 

switch(op) {
    case '+':
         result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
        break;

    case '-':
         result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
        break;

    case '*':
         result = num1 * num2;
        console.log(`${num1} * ${number2} = ${result}`);
        break;

    case '/':
         result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}