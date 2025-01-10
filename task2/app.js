const numbers = document.querySelectorAll(".numbers")
const operators = document.querySelectorAll(".operator")
const screen = document.querySelector("#screen")
const result = document.querySelector("#netice")
const reset = document.querySelector("#reset")

numbers.forEach((button) => {
    button.onclick = () => {
        screen.innerText += button.innerText
    }
});
operators.forEach((button) => {
    button.onclick = () => {
        screen.innerText += button.innerText
    }
});
result.onclick = () => {
    screen.innerText = eval(screen.innerText)
}
reset.onclick = () => {
    screen.innerText = ""
}