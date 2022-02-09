let firstNum = "";
let secondNum = "";
//let tempResult = ""
let currentOperator = null;
let forbiddenReturn = false;

const displayed = document.querySelector('.result');
const removeOne = document.getElementById('delete');
const cleanUp = document.getElementById('clear')
const reset = document.getElementById('reset');
const currentOperation = document.querySelector('.currentOperation');
const numbers = document.querySelectorAll('.number');
const calculate = document.querySelector('.calculate')
const operators = document.querySelectorAll('.operator');

document.addEventListener('keydown', inputNumbers);
removeOne.addEventListener('click', del);
cleanUp.addEventListener('click', clear)
reset.addEventListener('click',reboot);
calculate.addEventListener('click',mathTime);

numbers.forEach(numb => numb.addEventListener('click', displayNumbers));
operators.forEach(operator => operator.addEventListener('click', () => calc(operator.textContent)))

function displayNumbers(e){
    if (displayed.textContent.includes('.') === true){
        return
    }
    displayed.textContent += e.target.textContent
    currentOperation.textContent += e.target.textContent
}

function del(){
    checkBeforeDelete()
    if (forbiddenReturn === true){
        return
    }
    displayed.textContent = displayed.textContent.slice(0,-1)
    currentOperation.textContent = currentOperation.textContent.slice(0,-1)
}

function clear(){
    console.log('Welp')
}

function reboot(){
        calculate.disabled = false
        displayed.textContent = ""
        currentOperation.textContent = ""
        firstNum = ""
        secondNum = ""
        currentOperator = null
        //tempResult = ""
}

function inputNumbers(e){
    switch (true){
        case e.key === 'Backspace':
            del()
            break;
        case (Number(e.key) >= 0 && Number(e.key) <= 9) :
            forbiddenReturn = false
            displayed.textContent += Number(e.key)
            currentOperation.textContent += Number(e.key)
            break
        case e.key == '.':
            if (displayed.textContent.includes('.') === true){
                break
            }
            displayed.textContent += e.key
            currentOperation.textContent += e.key
            break
        case e.key == '*':
        case e.key == '-':
        case e.key == '+':
        case e.key == "/":
            e.preventDefault()
            calc(e.key)
            break;
        case e.key == 'Enter':
        case e.key == '=':
            if (calculate.disabled === true){
                break  
            } else {
                mathTime()
                break;
            }
    }
}

function checkBeforeDelete(){
    const lastThing = currentOperation.textContent[currentOperation.textContent.length-1]
    if ((lastThing.includes('-')) || (lastThing.includes('+')) || (lastThing.includes('/')) || (lastThing.includes('*'))){
        alert('Pour éviter de tout casser, fonction désactivée à ce stade !') // \nCliquez sur "Clear" pour recommencer ;)')
        forbiddenReturn = true;
    }
}

function calc(operation){
    console.log(operation)
    if (currentOperator !== null){
        mathTime()
    }
    forbiddenReturn = true
    firstNum = Number(displayed.textContent)
    currentOperator = operation
    displayed.textContent = ""
    currentOperation.textContent = `${firstNum}${currentOperator}`
    calculate.disabled = false
}

function mathTime(){
    if (currentOperator === null){
        return
    } if (firstNum == ''){
        return
    }
    secondNum = Number(displayed.textContent)
    if ((secondNum == 0) && ((currentOperator == "÷") || (currentOperator == "/"))){
        alert('Wait that\'s illegal ! \nEssaie donc de diviser avec un autre nombre que zéro !')
        del()
        return
    }
    forbiddenReturn = false
    calculate.disabled = true
    //tempResult = operate(currentOperator,firstNum,secondNum)
    console.log(operate(currentOperator,firstNum,secondNum))
    displayed.textContent = `${Math.round(operate(currentOperator,firstNum,secondNum)*10000)/10000}` //pour + ou - le nb de chiffre après la virgule : rajouter des 0 aux opérateurs de Math.round
    currentOperator = null
}

function operate(currentOperator,a,b){
    switch(true){
    case currentOperator == '+':
        currentOperation.textContent = `${a}+${b}`
        return a+b
    case currentOperator == '-':
        currentOperation.textContent = `${a}-${b}`
        return a-b
    case currentOperator == '*':
    case currentOperator == '×':
        currentOperation.textContent = `${a}×${b}`
        return a*b
    case currentOperator == '/':
    case currentOperator == '÷':
        currentOperation.textContent = `${a}÷${b}`
        return a/b
    }
 }