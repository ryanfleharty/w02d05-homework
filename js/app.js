const number = {
    entered: [], // ==> the string of numbers being built, to be stored then cleared upon operator click
    clicked: "", // ==> the number string that's just been clicked 
    $display: 0, // ==> What's on the page via jQuery
    first: "", // ==> the first number logged
    second: "", // ==> the second number logged POST OPERATOR
    operator: "", // ==> holds the type of operation
    answer: ""
};

// CURRENT ISSUE: The array prints everytime a number is clicked, including previously
// entered numbers. Needs to REPLACE/REFRESH the array each time a number is clicked
// and show only the most updated version of the entered array.

// This function needs to keep things in string form to concatenate!
const enterNumber = (e) => {
    number.clicked = e.target.id;
    number.entered.push(number.clicked);
    console.log(number.entered); // <== updating each click!
    $(`.display`).text(number.entered.join("")); // <== displays numbers entered! 
};
    


// let a = 1;
// let b = 2;
// let c = "add";
// let problem = a +c + b;
// const equate = (c) => {
//     if (c === "add"){
//         console.log(a + b);
//     };
// };
// equate(c);


// OPERATOR FUNCTIONS

let addingEquation;
const add = (e) => {
    console.log("Adding!");
    number.first = number.entered.join(""); // adds concatenated number string to first variable
    number.entered = []; // clears entered array for next number
    number.operator = "add";
    console.log(number);
};


const subtract = (e) => {
    console.log("Subtracting!");
    number.first = number.entered.join(""); // adds concatenated number string to first variable
    number.entered = []; // clears entered array for next number
    number.operator = "subtract";
    console.log(number);
};

const multiply = (e) => {
    console.log("Multiplying!");
    number.first = number.entered.join(""); // adds concatenated number string to first variable
    number.entered = []; // clears entered array for next number
    number.operator = "multiply";
    console.log(number);
};

const divide = (e) => {
    console.log("Dividing!");
    number.first = number.entered.join(""); // adds concatenated number string to first variable
    number.entered = []; // clears entered array for next number
    number.operator = "divide";
    console.log(number);
};

const equals = (e) => {
    number.second = number.entered.join(""); // adds concatenated number string to first variable
    number.entered = []; // clears entered array for next number
     if (number.operator === "add") {
        answer = Number(number.first) + Number(number.second);
    } else if (number.operator === "subtract") {
        answer = Number(number.first) - Number(number.second);
    } else if (number.operator === "multiply") {
        answer = Number(number.first) * Number(number.second);
    } else {
        answer = Number(number.first) / Number(number.second);
    }
    $(`.display`).text(answer)
};
   
const clear = (e) => {
    console.log("Clear!");
    number.entered.pop(); // deletes last item in entered array
    console.log(number.entered);
    $(`.display`).text(number.entered)
};



$('.numbers').on('click', 'button', enterNumber);
$('.operators #add').on('click', add);
$('.operators #subtract').on('click', subtract);
$('.operators #multiply').on('click', multiply);
$('.operators #divide').on('click', divide);
$('.operators #equals').on('click', equals);
$('.operators #clear').on('click', clear);

// Need operators - , + , / , * , and = (return);
