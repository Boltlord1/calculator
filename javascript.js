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
    if (two === 0) return
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

const previous = document.querySelector(`.previous`)
const current = document.querySelector(`.current`)

const functions = {
    plus: document.querySelector(`.plus`),
    minus: document.querySelector(`.minus`),
    star: document.querySelector(`.star`),
    slash: document.querySelector(`.slash`),
    equals: document.querySelector(`.equals`),
    clear: document.querySelector(`.clear`)
}

const numbers = [
    document.querySelector(`.one`),
    document.querySelector(`.two`),
    document.querySelector(`.three`),
    document.querySelector(`.four`),
    document.querySelector(`.five`),
    document.querySelector(`.six`),
    document.querySelector(`.seven`),
    document.querySelector(`.eight`),
    document.querySelector(`.nine`),
    document.querySelector(`.zero`)
]

for (let i = 0; i < numbers.length; i++) {
    numbers[i].onclick = () => {
        current.textContent = `${current.textContent}${numbers[i].textContent}`
    }
}