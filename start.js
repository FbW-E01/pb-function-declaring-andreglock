function multiply (numberOne, numberTwo) {
    console.log('1:', numberOne * numberTwo);
}

multiply(6, 5);

const multiplyVar = function multiply (numberOne, numberTwo) {
    console.log('2:', numberOne * numberTwo);
}

console.log(multiplyVar(5, 6));

const multiplyArrow = (numberOne, numberTwo) => {
    const multiplication = numberOne * numberTwo;
    console.log('3:', multiplication);
}

multiplyArrow(5, 6);

function remainder (numberOne, numberTwo) {
    console.log('4a:', numberOne % numberTwo);
}

remainder(6, 5);

const remainderVar = function remainder (numberOne, numberTwo) {
    console.log('4b:', numberOne % numberTwo);
}

remainderVar(7, 5);

const remainderArrow = (numberOne, numberTwo) => {
    console.log('4c:', numberOne % numberTwo);
}

remainderArrow(8,5);