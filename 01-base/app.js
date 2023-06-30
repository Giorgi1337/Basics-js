const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

// const sum = Number(input1.value) + Number(input2.value)
// resultElement.textContent = sum;

submitBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}


function showResult(result) {
    // console.log('Result to print',result)
    if (result < 0) {
        resultElement.style.color = 'red' 
     }else {
        resultElement.style.color = 'green' 
     }
     resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = inp1.value
    const num2 = inp2.value
    // if(actionSymbol == '+') {
    //     return num1 + num2
    // }else if (actionSymbol == '-') {
    //     return num1 - num2
    // }
    const result = +actionSymbol == '+' ? num1 + num2 : num1 - num2
    return result
}


submitBtn.onclick = function () {

    const result = computeNumbersWithAction(input1, input2 ,action)
    showResult(result)

    
    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value)
    //    showResult(sum)
    // }else {
    //     const sum = Number(input1.value) - Number(input2.value)
    //    showResult(sum)
    // }
}
