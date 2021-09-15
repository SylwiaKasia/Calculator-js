

const CurrentN = document.querySelector(".currentNumber");

const PreviousN = document.querySelector(".previousNumber");

const mathSign = document.querySelector(".mathSign");

const numbersButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const equalButton = document.querySelector(".equals");

const clearButton = document.querySelector(".clear");

const calculatorHistory = document.querySelector(".history");

const historyButton = document.querySelector(".history-btn");


let result ="";


function displayNumbers()


function operate()


function showResult()


function clearScreen()


function clearHistory()














// Nasłuchiwanie 
operatorButtons.forEach((button)=> button.addEventListener("click",operate))

equalButton.addEventListener("click",showResult);

clearButton.addEventListener("click",clearScreen);

numbersButtons.forEach((button)=> button.addEventListener("click",displayNumbers))

historyButton.addEventListener("click",clearHistory);












