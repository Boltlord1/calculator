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

let firstNumber = undefined
let secondNumber = undefined
let selectedOperator = ``
let output = 0

function clear() {
    firstNumber = undefined
    secondNumber = undefined
    selectedOperator = ``
    output = 0
    previous.textContent = ``
    current.textContent = ``
}

for (let i = 0; i < numbers.length; i++) {
    numbers[i].onclick = () => {
        current.textContent = `${current.textContent}${numbers[i].textContent}`
        secondNumber = Number(current.textContent)
    }
}

function operate(operator) {
    if (firstNumber !== undefined) {
        switch (operator) {
            case `plus`:
                output = firstNumber + secondNumber
            break
            case `minus`:
                output = firstNumber - secondNumber
            break
            case `star`:
                output = firstNumber * secondNumber
            break
            case `slash`:
                if (secondNumber === 0) {
                    clear()
                    createErorr()
                    return
                }
                output = firstNumber / secondNumber
        }
    } else if (firstNumber === undefined) {
        output = secondNumber
    }
    previous.textContent = output
    current.textContent = ``
    selectedOperator = operator
    firstNumber = output
}

functions.equals.onclick = () => operate(selectedOperator)
functions.clear.onclick = () => clear()
functions.plus.onclick = () => {
    operate(selectedOperator)
    selectedOperator = `plus`
}
functions.minus.onclick = () => {
    operate(selectedOperator)
    selectedOperator = `minus`
}
functions.star.onclick = () => {
    operate(selectedOperator)
    selectedOperator = `star`
}
functions.slash.onclick = () => {
    operate(selectedOperator)
    selectedOperator = `slash`
}

const body = document.querySelector(`body`)
let errorCounter = 1

function createErorr() {
    const errorMessage = document.createElement(`div`)
    body.appendChild(errorMessage)
    errorMessage.textContent = `Nice try`
    if (errorCounter > 1) errorMessage.textContent = `Nice try x${errorCounter}`
    errorCounter++
}