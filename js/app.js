const calculator = {
    numOne: "",
    num1Array: [],
    numTwo: "",
    num2Array: [],
    action: "",
    actionArray: [],
    total: 0,
    num3Array: [],
}

let num1 = calculator.numTwo;
let num1Array = calculator.num1Array;
let action = calculator.action;
let actionArray = calculator.actionArray;
let total = calculator.total;
let num2 = calculator.numTwo;
let num2Array = calculator.num2Array;
let num3Array = calculator.num3Array
let screenText = "";

const render = () => {
    window.location.reload(true);
}

const buttonClick = () => {
    $('button').unbind().click(function(e) {
    //grab text from button and put it in screen
    let btn = $(e.target).text();

    // screen text
    const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/'];
    for (let i = 0; i < numArr.length; i++){
         if($(e.target).text() === numArr[i]){
            screenText = screenText + numArr[i];
            $('.screen').text(screenText + '=');
        }
    };
    console.log(btn);

    //original array
    if (btn != "=") {
    num1Array.push(btn);
    }

    makeArrays();

    runActions();

    //buttons
    if ($(e.target).text() === "=") {
        $('.screen').append(total);  
    }

    if ($(e.target).text() === "CLEAR") {
        render(); 
    }
    });
}

$('button').on('click', buttonClick)

const makeArrays = (e) => {
    num1Array.forEach((item, index) => {
     
        if (isNaN(item)) {
            num2Array = num1Array.slice(0, index);
            actionArray = num1Array.slice(index);
            num1Array.splice(0);
        }
    });

    // put strings from arrays into strings
    num1 = num2Array.join("");
    num2 = num1Array.join("");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
}

const runActions = () => {

    if (actionArray[0] === "+"){
        total = num1 + num2;
    } else if (actionArray[0] === "-"){
        total = num1 - num2;
    } else if (actionArray[0] === "x"){
        total = num1 * num2;
    } else if (actionArray[0] === "/"){
        total = num1 / num2;
    }

}