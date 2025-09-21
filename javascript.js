function add(one, two) {
    return one + two
}

function subtract(one, two) {
    return one - two
}

function multiply(one, two) {
    return one * two
}

function divide(one, two) {
    return one / two
}

function operate(one, two, operator) {
    if (operator === `add`) {
        return add(one, two)
    } else if (operator === `subtract`) {
        return subtract(one, two)
    } else if (operator === `multiply`) {
        return multiply(one, two)
    } else if (operator === `divide`) {
        return divide(one, two)
    }
}