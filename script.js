const buttons = document.querySelectorAll("button")
const resultField = document.querySelector(".result")

let nums = []
let operator 

buttons.forEach(button => {
    button.addEventListener("click", function(){
        if (button.classList.contains("add")) {
            operator = "+"
            resultField.textContent = operator
        }
        if (button.classList.contains("subtract")) {
            operator = "-"
            resultField.textContent = operator
        }
        if (button.classList.contains("multiply")) {
            operator = "*"
            resultField.textContent = operator
        }
        if (button.classList.contains("divide")) {
            operator = "/"
            resultField.textContent = operator
        }
        if (button.classList.contains("clear")){
            nums = []
            operator = []
            resultField.textContent = "0"
        } 
        if (button.classList.contains("operate")){
            operate(nums, operator)
        }else if (!button.classList.contains("add") &&
                    !button.classList.contains("subtract") &&
                    !button.classList.contains("multiply") &&
                    !button.classList.contains("divide") &&
                    !button.classList.contains("clear"))
                    {
                        nums.push(parseInt(button.textContent))
                        resultField.textContent = button.textContent
                    }
    })
})


function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}

function operate(arr, operator) {
    if (operator == "+"){
        resultField.textContent = add(arr[0], arr[1])
    }
    if (operator == "*"){
        resultField.textContent = multiply(arr[0], arr[1])
    }
    if (operator == "-"){
        resultField.textContent = subtract(arr[0], arr[1])
    }
    if (operator == "/"){
        resultField.textContent = divide(arr[0], arr[1])
    }
}