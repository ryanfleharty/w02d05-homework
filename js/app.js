console.log('calculator app');

// Creates button and operator button classes
let buttons = [];
class Button {
    constructor(number) {
        this.number = number;
        buttons.push(this)
    }
};

let operators = [];
class Operator {
    constructor(operator) {
        this.operator = operator;
        operators.push(this);
    }
};


// Things we need to track

// The render function:
// Add event listener to the buttonHolder class div
// Append operator buttons to the buttonHolder div
// Append number buttons to the buttonHolder div
// Clear the display

let screenString = '';
let operation = [];
let num1 = [];
let num2 = [];
let finalResult;
let symbol;

const listenToStuff = () => {

    $('.buttonHolder').on('click', (e) => {
        // console.log(e.target.className, '<-- tagName value');
        // console.log(e.target, '<-- e.target');
        
        
        const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/'];
        for (let i = 0; i < numArr.length; i++){
            if(e.target.id === numArr[i]){
                screenString = screenString + numArr[i];
                $('.display').append(`<span>${numArr[i]}</span>`);
                operation.push(numArr[i])
            } else if (e.target.id === 'clear'){
                render();
                operation.splice(0);
            } else if (e.target.id === 'equals'){
                render();
                doMath();
                
                //bug with this, cant enter numbers after 
                //hitting the equals sign
            }
        }        
    })
};

const render = () => {
    // clear the existing stuff
    $('.display').remove();
    $('.buttonHolder').remove();
    // put screen and button holder div back on page
    $('.calculator').append('<div class="display"></div>');
    $('.calculator').append('<div class="buttonHolder"></div>');
    
    //Function to make the buttons and add them to the page
    const makeButtons = () => {
    //makes operator buttons differently
    const oppArr = ['+', '-', '*', '/']
    for (let i = 0; i < oppArr.length; i++) {
        new Operator(oppArr[i])
        const oppsButton = $(`<div class="operatorButts">${oppArr[i]}</div>`);
        $(oppsButton).attr('id', oppArr[i]);
        $('.buttonHolder').append(oppsButton)
    }

    const clearButton = $('<div id="clear">Clear</div>');
    $('.buttonHolder').append(clearButton);

    const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    for (let i = 0; i < numArr.length; i++) {
        new Button(numArr[i]);
        const numButton = $(`<div class="button">${numArr[i]}</div>`);
        $(numButton).attr('id', numArr[i]);
        $('.buttonHolder').append(numButton);
    }
    //makes equal button differently
    $('.buttonHolder').append('<div id="equals">=</div>')
};
    makeButtons();
    listenToStuff();
}

render();



// when it gets to this point, operation = ["1", "2", "+", "2"];
// when I console.log operation after line 110, it has only the operator left
// num1 and num2 however come back as empty strings


const doMath = () => {
    
    operation.forEach((item, index) => {

        if (isNaN(item)){
            // num2 = operation.splice(0, index).join('');
            // num1 = operation.splice(1).join('');
            symbol = operation.slice(index);
            num2 = symbol.splice(1);
            num1 = operation.slice(0, index);

            num1 = num1.join('');
            num2 = num2.join('');
            
            if (symbol[0] === "+"){
                finalResult = parseInt(num1) + parseInt(num2);
            } else if (symbol[0] === "-"){
                finalResult = parseInt(num1) - parseInt(num2);
            } else if (symbol[0] === "*"){
                finalResult = parseInt(num1) * parseInt(num2);
            } else if (symbol[0] === "/"){
                finalResult = parseInt(num1) / parseInt(num2);
            }
            $('.display').append(`<span>${finalResult}</span>`);
        }
    })
}








