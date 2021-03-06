const buttons = document.querySelectorAll("button")
const resultField = document.querySelector(".result")
const root = document.documentElement

let nums = []
let operator = []
let resultContent = " " 
let errorMsg = "Error"


buttons.forEach(button => {
    button.addEventListener("click", function(){
        if (button.classList.contains("add")) {
            pushNumsOperator(button)
            checkNums()
        }
        if (button.classList.contains("subtract")) {
            pushNumsOperator(button)
            checkNums()
        }
        if (button.classList.contains("multiply")) {
            pushNumsOperator(button)
            checkNums()
        }
        if (button.classList.contains("divide")) {
            pushNumsOperator(button)
            checkNums()
        }
        if (button.classList.contains("clear")){
            clear(0)
            root.style.setProperty("--result-content", resultContent)
        } 
        if (button.classList.contains("operate")){
            nums.push(parseInt(resultField.textContent))
            resultField.textContent = operate()
        }else if (!button.classList.contains("add") &&
                    !button.classList.contains("subtract") &&
                    !button.classList.contains("multiply") &&
                    !button.classList.contains("divide") &&
                    !button.classList.contains("clear"))
                    {
                        resultContent = " "
                        root.style.setProperty("--result-content", resultContent)
                        if (resultField.textContent == nums[0]){
                            resultField.textContent = ""
                            resultField.textContent += button.textContent
                        } else {
                            checkResultLength(button)
                        }
                    }
    })
})

/* handles button on-click animations */

buttons.forEach(button => {
    button.addEventListener("click", function(){
        button.classList.add("active")
    })
    button.addEventListener("transitionend", function(){
        button.classList.remove("active")
    })
})


/* 
    pushes the number from the result field to the nums array
    pushes the current operator to the operator array
 */

function pushNumsOperator(button){
    nums.push(parseInt(resultField.textContent))
    operator.push(button.textContent)
}

/* 
    checks if the nums array contains 2 numbers already, 
    if so, it calculates these numbers using the first operator
    from the operator array, then pushes the result into the array

    if nums length is less than 2, it clears the result field

 */


function checkNums() {
    if (nums.length > 1) {
        resultField.textContent = operate()
        nums.push(parseInt(resultField.textContent))
    } else {
        resultField.textContent = ""
    }
}

/* check resultField length and not allows input if it's greater than 13 */

function checkResultLength(button) {
    if (resultField.textContent.length < 13){
        resultField.textContent += button.textContent
    } else {
        const splitResult = resultField.textContent.split("")
        let newResult = []
        splitResult.forEach(item => {
            if (newResult.length<13){
                newResult.push(item)
            }
            else {
                return
            }
        return newResult.join("")
    })
    }
}

/* 
    all the calculator operations
*/

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
        operator = []
        resultField.textContent = ""
        resultContent = ""
    } 
    /* condition 1 clears only nums and deletes operator[0]*/
    else if (condition === 1){
        nums = []
        let temp = operator.shift()
    }
}

function operate() {
    let currentOperator = operator[0]
    let operationResult

    if (currentOperator == "+"){
        operationResult = add(nums)
        clear(1)
    }
    if (currentOperator == "*"){
        operationResult = multiply(nums)
        clear(1)
    }
    if (currentOperator == "-"){
        operationResult = subtract(nums)
        clear(1)
    }
    if (currentOperator == "/"){
        operationResult = divide(nums)
        clear(1)
    }
    
    let roundedResult = operationResult.toFixed(2)

    if (roundedResult.length > 13){
        return errorMsg
    } else {
        return roundedResult
    }
}