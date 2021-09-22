
const numberBtn = document.querySelectorAll(".number");

const operatorBtn = document.querySelectorAll(".operator");

const currentNum = document.querySelector(".currentNumber");

const previousNum= document.querySelector(".previousNumber");

const mathSign = document.querySelector(".mathSign");

const equalBtn = document.querySelector(".equals");

const clearBtn = document.querySelector(".clear");

const calculatorHist = document.querySelector(".history");

const historyBtn = document.querySelector(".history-btn");


let result ="";
let equal_pressed = false;

//----początkowe wartości--------------------------
clearDisplay();
//------------------------------------------------

//---- clearDisplay ----------------------------------------
function clearDisplay()
{
    previousNum.innerHTML = '';
    mathSign.innerHTML = '';
    currentNum.innerHTML  = '';
    equal_pressed = false;
}//--- end clearDisplay ------------------------------------



function clearHistory()
{  
    calculatorHist.textContent = '';
    historyBtn.classList.remove('active');
    // if(calculatorHist.textContent ===''){
    //     historyBtn.classList.remove('active');

    // }


}


function displayNumbers (){
    //---jeśli ostatnio było naciśnięte "=", to rozpocznij wpisywanie liczby od pustej
    if (equal_pressed===true)
    {
        currentNum.innerHTML = '';
        equal_pressed = false;
    }   

    //---zabezpieczenie przed kolejną kropką (w liczbie może być tylko jedna kropka)
    if(this.textContent === '.' && currentNum.innerHTML.includes('.')) return;
    //---gdy naciskamy samą krpokę ma wskoczyć 0. (jak w każdym kalkulatorze)
    if(this.textContent === '.' && currentNum.innerHTML === '')
    {
        currentNum.innerHTML = '0.';
        return;
    }
    //---zabezpieczenie zeby nie wskoczyły dwa zera po kliknięciu klawisza 00 na początku operacji
    if(this.textContent === '00' && currentNum.innerHTML === '') { return; }
    //---dodanie każdej cyfry (na każdej pozycji), lub kropki (na dalszej pozycji)
    currentNum.innerHTML += this.textContent;
}



//---- operate ---------------------------------------------
function operate(){
    // console.log("funkcja operate 1");
    //console.log("A",currentNum.innerHTML, "B");
    //console.log(currentNum.innerHTML);
    // console.log(this.textContent);

    //-----jeśli liczba była pusta i wciśnięty minus, to wpisuje "-" aby liczba była ujemna--------------
    if (currentNum.innerHTML === '' && this.textContent === '-')
    {
        currentNum.innerHTML = '-';
        //console.log("funkcja operate 2");
        return;
    }
    else if (currentNum.innerHTML === '')  //---jeśli nie wpisana jeszcze liczba, to nie pozwalaj na użycie innego operatora niż "-" (powyżej)
    {
        return;
    }
    //-----jeśli wcześniej wpisany był tylko "-" i nie wpisana dalej żadna liczba, to zamień - na 0
    if(currentNum.innerHTML === '-')
    {
        //return;
        currentNum.innerHTML = 0;
    }

    //-----jeśli operator nie jest pusty (czyli był już wczesniej wpisany) to wyświetl wynik funkcji
    if(mathSign.innerHTML !=='') { showResult(); }

    previousNum.innerHTML = currentNum.innerHTML;
    mathSign.innerHTML = this.textContent;

    currentNum.innerHTML = '';
}//--- end operate -----------------------------------------

//---- showResult ------------------------------------------
function showResult(){
    // jesli nie ma drugiej liczby, jest pusta to zabezpieczamy się i wracamy do funkcji
    if((previousNum.innerHTML === '') || (currentNum.innerHTML === ''))
    return;
    
    let a = Number(currentNum.innerHTML);
    let b = Number(previousNum.innerHTML);
    let operator = mathSign.innerHTML;

    switch(operator){
        case '+':
        result = a+b;
        break;
        case '-':
        result = b-a;
        break;
        case 'x':
        result = a*b;
        break;
        case ':':
        result = b/a;
        break;
        case 'x^':
        result = b ** a;
        break;
    }

        //----wyświetlanie wyniku----------------
    addToHistory();
    
    currentNum.innerHTML =result;
    previousNum.innerHTML='';
    mathSign.innerHTML='';

    historyBtn.classList.add('active');
}//--- end showResult --------------------------------------

//---- equalShow -------------------------------------------
function equalShow()
{
    equal_pressed = true;
    showResult();
}//--- end equalShow ---------------------------------------

function addToHistory(){
    const li = document.createElement('li');
    li.innerHTML = `${previousNum.innerHTML} ${mathSign.innerHTML} ${currentNum.innerHTML} = ${result}`
    li.classList.add('history-item');
    calculatorHist.appendChild(li);
    console.log(currentNum.innerHTML);

}





operatorBtn.forEach((button)=> button.addEventListener('click',operate))
numberBtn.forEach((button)=> button.addEventListener('click',displayNumbers))
//equalBtn.addEventListener('click', showResult);
equalBtn.addEventListener('click', equalShow);
clearBtn.addEventListener('click',clearDisplay);
historyBtn.addEventListener('click',clearHistory);


// username ="adam"
// age=16

// if (username){
//     if (age>18){
//         console.log("wchodzisz" + username)
//     }
//     else{
//         console.log("nie ma mowy");
//     }
    
// }
