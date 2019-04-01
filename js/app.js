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


//Global Variables

let screenString = '';
let operation = [];
let num1 = [];
let num2 = [];
let finalResult;
let symbol;

//listenToStuff function adds listener to the container for the buttons 
//and assigns each button a specific id based on what it is - had to be above render() to call render()
const listenToStuff = () => {

    $('.buttonHolder').on('click', (e) => {

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
    //makes operator buttons
    const oppArr = ['+', '-', '*', '/']
    for (let i = 0; i < oppArr.length; i++) {
        new Operator(oppArr[i])
        const oppsButton = $(`<div class="operatorButts">${oppArr[i]}</div>`);
        $(oppsButton).attr('id', oppArr[i]);
        $('.buttonHolder').append(oppsButton)
    }
    //makes clear button
    const clearButton = $('<div id="clear">Clear</div>');
    $('.buttonHolder').append(clearButton);

    //makes number buttons
    const numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    for (let i = 0; i < numArr.length; i++) {
        new Button(numArr[i]);
        const numButton = $(`<div class="button">${numArr[i]}</div>`);
        $(numButton).attr('id', numArr[i]);
        $('.buttonHolder').append(numButton);
    }
    //makes equals button
    $('.buttonHolder').append('<div id="equals">=</div>')
};
    makeButtons();
    listenToStuff();
};

//calls render function when page is initially loaded
render();



//doMath function does the math  //operation array is what is filled up when the buttons are clicked
const doMath = () => {
    
    operation.forEach((item, index) => {

        if (isNaN(item)){
            // num2 = operation.splice(0, index).join('');  <-- I thought this would work here but it doesnt
            // num1 = operation.splice(1).join('');
            symbol = operation.slice(index);
            num2 = symbol.splice(1);
            num1 = operation.slice(0, index);

            num1 = num1.join('');
            num2 = num2.join('');
            
            //logic for actually doing the math operations
            if (symbol[0] === "+"){
                finalResult = parseInt(num1) + parseInt(num2);
            } else if (symbol[0] === "-"){
                finalResult = parseInt(num1) - parseInt(num2);
            } else if (symbol[0] === "*"){
                finalResult = parseInt(num1) * parseInt(num2);
            } else if (symbol[0] === "/"){
                finalResult = parseInt(num1) / parseInt(num2);
            }
            //appends finalResult to the display   
            $('.display').append(`<span>${finalResult}</span>`);  
            
        }

    })
            // resets the finalResult to operation so the user
            // can keep doing stuff after hitting equals
            finalResult = finalResult.toString();
            operation.splice(0);
            operation.push(finalResult);
            $('.display').append(`<span>${finalResult}</span>`);  
};








