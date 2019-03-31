// functions

//holds all input numbers
let inputNumbers = [];
class Input{
    constructor(number){
        this.number = number;
        inputNumbers.push(this);
    }
}

// get input to store type
const inputStore = () => {
    // grab input value
    const calcInput = $('#calc-input').val();
    $('#calc-input').val("");  
    new Input(calcInput);  

    // e.preventDefault();
    // // grab the text from the input
    // const inputText = $('#new-task').val();
    // // clear the text from the input
    // $('#new-task').val("");
    // // create a new Task from that
    // new Task(inputText);
    // // re-render the page
    // render();

}
// $('#store-num').on('click', inputStore);

// inputStore()
// console.log(inputNumbers);



// also get numbers to appear in input when clicked

// target .buttons with event listener
// get buttons to show up above (create new div?)
// store num, push to new location .screen
const pushNumbers = () => {
    const numberClicked = $('.button').val();
    console.log(numberClicked);
}
pushNumbers()

const numberShow = () => {
    $('.buttons').on('click', pushNumbers)
}

// divide
// multiply
// minus
// add
// equals
// render



    // num1 = $('button').val();
    // console.log($('button').text());
    // const buttonPressed = $(this).text();
    // console.log(this);
    // console.log($(this).text());
    //   console.log(buttonPressed);
      
    //   if (buttonPressed === "CLEAR") {
    //     num1 = 0;
    //     print = 0;
    //     console.log(print);
    //   } else if (buttonPressed === '.') {
    //     print = '.';
    //     console.log(numOne);
    //   } else if (buttonPressed === '7') {
    //     print = 7;
    //     console.log(print);
    //   }







    let btn = $(e.target).text();
    if (btn >= "0" && btn <= "9") {
        if (num1 === "") {
            num1 = parseInt(btn);
            // num1Array.push(num1);
        } else if (btn >= "0" && btn <= "9") {
            num2 = parseInt(btn);
            // num2Array.push(num2);
        }
    } else {
            action = btn;
            runActions();
    }


    if (parseInt(btn) !== NaN){
        num1 = parseInt(btn);
        num1Array.push(num1);
    } else if (btn == NaN) {
        action = btn;
    } else if if (parseInt(btn) !== NaN) {
        num2 = parseInt(btn);
        num2Array.push(num2);
    } else if (btn === "=") {
        runActions();
}




buttonClick = () => {
    $('button').on('click', (e) => {
        //grab text from button and put it in screen
        let btn = $(e.target).text();
        if (btn >= "0" && btn <= "9") {
            if (num1 === "") {
                num1 = parseInt(btn);
                // num1Array.push(num1);
            } else  {
                num2 = parseInt(btn);
                // num2Array.push(num2);
    
            }
        } else if (btn === "=") {
            runActions();
                
        } else {
            action = btn;
        }
       
        $('.screen').text(btn);
    
        console.log(btn);
    
        });
    }