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
    // numTwo: "",
    // num2Array: [],
    action: "",
    actionArray: [],
    total: 0,
}

let num1 = calculator.numTwo;
let num1Array = calculator.num1Array;
let action = calculator.action;
let actionArray = calculator.actionArray;
let total = calculator.total;
// let num2 = calculator.numTwo;
// let num2Array = calculator.num2Array;


buttonClick = () => {
    $('button').unbind().click(function(e) {
    //grab text from button and put it in screen
    let btn = $(e.target).text();
    
    // if (btn >= "0" && btn <= "9") {
        num1 = btn;
        num1Array.push(num1);
    // } else if (btn === "=") {
    //     runActions();
            
    // } 
    if (btn === NaN) {
        action = btn;
        actionArray.push(action);
    }
   
    $('.screen').text(btn);

    console.log(btn);

    });
}

$('button').on('click', buttonClick)


// const doMath = () => {
    
//     num1Array.forEach((e, index) => {
//         let btn = $(e.target).text();


//         if (btn == isNaN(parseInt(e))){
//             action = operation.splice(0, index);
            
//             if (e === "+"){
//                 finalResult = parseInt(num1) + parseInt(num2);
//             } else if (e === "-"){
//                 finalResult = parseInt(num1) - parseInt(num2);
//             } else if (e === "*"){
//                 finalResult = parseInt(num1) * parseInt(num2);
//             } else if (e === "/"){
//                 finalResult = parseInt(num1) / parseInt(num2);
//             }
//         } else if (btn >= "0" && btn <= "9"){
//             console.log(btn);
//         }
        
//         $('.screen').text(btn);

//     })
// }



// runActions = () => {
//     if (action === "+"){
//     total = num1 + num2;
//     }
//     $('.screen').text(total);
//     console.log(total);
// }



