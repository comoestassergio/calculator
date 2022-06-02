const buttons = document.querySelectorAll("button")
const resultField = document.querySelector(".result")
const root = document.documentElement

let nums = []
let operator
let resultContent = " " 

buttons.forEach(button => {
    button.addEventListener("click", function(){
        if (button.classList.contains("add")) {
            nums.push(parseInt(resultField.textContent))
            console.log(nums)
            operator = "+"
            resultField.textContent = ""
        }
        if (button.classList.contains("subtract")) {
            nums.push(parseInt(resultField.textContent))
            operator = "-"
            resultField.textContent = ""
        }
        if (button.classList.contains("multiply")) {
            nums.push(parseInt(resultField.textContent))
            operator = "*"
            resultField.textContent = ""
        }
        if (button.classList.contains("divide")) {
            nums.push(parseInt(resultField.textContent))
            operator = "/"
            resultField.textContent = ""
        }
        if (button.classList.contains("clear")){
            clear(0)
            root.style.setProperty("--result-content", resultContent)
        } 
        if (button.classList.contains("operate")){
            nums.push(parseInt(resultField.textContent))
            operate(nums, operator)
        }else if (!button.classList.contains("add") &&
                    !button.classList.contains("subtract") &&
                    !button.classList.contains("multiply") &&
                    !button.classList.contains("divide") &&
                    !button.classList.contains("clear"))
                    {
                        resultContent = " "
                        root.style.setProperty("--result-content", resultContent)
                        resultField.textContent += button.textContent
                    }
    })
})

buttons.forEach(button => {
    button.addEventListener("click", function(){
        button.classList.add("active")
    })
    button.addEventListener("transitionend", function(){
        button.classList.remove("active")
    })
})


function add (arr) {
    return arr.reduce((total, el) => (total + el), 0)
}

function subtract (arr) {
    return arr.reduce((total, el) => (total - el))
}

function multiply (arr) {
    return arr.reduce((total, el) => (total * el), 1)
}

function divide (arr) {
    return arr.reduce((total, el) => (total / el))
}

function clear(condition) {
    /* condition 0 clears all */
    if (condition === 0){
        nums = []
        operator = ""
        resultField.textContent = ""
        resultContent = ""
    } 
    /* condition 1 clears only nums */
    else if (condition === 1){
        nums = []
        operator = ""
    }
}

function operate(arr, operator) {
    console.log(nums)
    if (operator == "+"){
        resultField.textContent = add(nums)
        clear(1)
    }
    if (operator == "*"){
        resultField.textContent = multiply(nums)
        clear(1)
    }
    if (operator == "-"){
        resultField.textContent = subtract(nums)
        clear(1)
    }
    if (operator == "/"){
        resultField.textContent = divide(nums)
        clear(1)
    }
}