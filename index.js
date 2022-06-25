
const number1 = parseFloat(prompt('Enter first number: '));
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;
}
