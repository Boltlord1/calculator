function add(x, y) {
    return Number(x) + Number(y);
}

function subtract(x, y) {
    return Number(x) - Number(y);
}

function multiply(x, y) {
    return Number(x) * Number(y);
}

function divide(x, y) {
    return Number(x) / Number(y);
}

function operate() {

}

const input = document.querySelector('#numOne');
const display = document.querySelector('#numTwo');
const plus = document.querySelector('#add');
const minus = document.querySelector('#subtract');
const star = document.querySelector('#multiply');
const slash = document.querySelector('#divide');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#operate');

const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

let numOne = '';
let numTwo = '';

function clickNumber(num) {
    numOne += num;
    input.textContent = numOne;
} input.textContent = '';

zero.addEventListener('click', () => clickNumber('0'));
one.addEventListener('click', () => clickNumber('1'));
two.addEventListener('click', () => clickNumber('2'));
three.addEventListener('click', () => clickNumber('3'));
four.addEventListener('click', () => clickNumber('4'));
five.addEventListener('click', () => clickNumber('5'));
six.addEventListener('click', () => clickNumber('6'));
seven.addEventListener('click', () => clickNumber('7'));
eight.addEventListener('click', () => clickNumber('8'));
nine.addEventListener('click', () => clickNumber('9'));

function clearNumbers() {
    numOne = '';
    numTwo = '';
    input.textContent = '';
    display.textContent = '';
    operationTypeUsed = '';
} clear.addEventListener('click', clearNumbers)

let operationTypeUsed = '';
function clickOperation(type) {
    if (numTwo === '') {
        numTwo = numOne;
        numOne = '';
        input.textContent = numOne;
        display.textContent = numTwo;
        operationTypeUsed = type;
    } else if (numOne !== '' && numTwo !== '') {
        operate(operationTypeUsed);
        operationTypeUsed = type;
    } else {
        numOne = '';
        input.textContent = numOne;
        display.textContent = numTwo;
        operationTypeUsed = type;
    }
}

plus.addEventListener('click', () => clickOperation('add'));
minus.addEventListener('click', () => clickOperation('subtract'));
star.addEventListener('click', () => clickOperation('multiply'));
slash.addEventListener('click', () => clickOperation('divide'));

function operate(type) {
    if (type == 'add') numTwo = add(numTwo, numOne);
    if (type == 'subtract') numTwo = subtract(numTwo, numOne);
    if (type == 'multiply') numTwo = multiply(numTwo, numOne);
    if (type == 'divide') numTwo = divide(numTwo, numOne);
    numTwo = `${numTwo}`;
    numOne = '';
    input.textContent = numOne;
    display.textContent = numTwo;
    operationTypeUsed = '';
} equals.addEventListener('click', () => operate(operationTypeUsed));