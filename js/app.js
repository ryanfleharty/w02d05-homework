// punch in num1
// it shows up on display
// punch in action
// it shows up next to num1 on display
// punch in num2
// it shows up next to action on display
// hit equals
// function is performed
// returns num3

//values to save somewhere (obj) num1, num2, num3(return value)

// target .buttons with click event listener (like poke squares game)
// num1 button text to show up on "screen" div .screen (like task list) --> .val and .append
// action text to show up on .screen next to num1
// num2 text to show up on .screen next to action
// equals triggers functions if (+ - x /) do different things
// clear button resets/renders

// while loop - while btn = a number, save var and push to arr
// end when action/ NaN is clicked
// once more buttons are pressed, save var2 and push to arr2

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

$('.outside').prepend('<div class="screen">0</div>');


buttonClick = () => {
    $('button').unbind().click(function(e) {
    //grab text from button and put it in screen
    let btn = $(e.target).text();

    // make string
    $('.screen').text(btn);

    
    if (btn != "=") {
    num1Array.push(btn);
    }


    num1Array.forEach((btn, index) => {
     
        if (isNaN(btn)) {
            num2Array = num1Array.slice(0, index);
            actionArray = num1Array.slice(index);
            num1Array.splice(0);
        }
    });

    // put strings together into one string
    // convert string to number

    num1 = num2Array.join("");
    num2 = num1Array.join("");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    // console.log(num1);
    // console.log(num2);

    if (btn = "=") {
        runActions();
    }

    if (btn === "CLEAR"){
        $('.screen').remove();
    }
    });
}



$('button').on('click', buttonClick)




runActions = () => {

    if (actionArray[0] === "+"){
        total = num1 + num2;
    } else if (actionArray[0] === "-"){
        total = num1 - num2;
    } else if (actionArray[0] === "x"){
        total = num1 * num2;
    } else if (actionArray[0] === "/"){
        total = num1 / num2;
    }
    $('.screen').text(total);
    console.log(total);
}


const clear = () => {
    $('.screen').remove();
}