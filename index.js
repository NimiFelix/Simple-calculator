
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         document.write(number1 + number2);
        break;

    case '-':
        document.write(number1 - number2);
        break;

    case '*':
        document.write(number1 * number2);
        break;

    case '/':
        document.write(number1 / number2);
        break;

}
