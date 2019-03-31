

console.log("JS running");

// CALCULATOR APP
const number = {
    entered: [], // ==> the string of numbers being built, to be stored then cleared upon operator click
    clicked: 0, // ==> the number string that's just been clicked 
    $display: 0, // ==> What's on the page via jQuery
    first: 0, // ==> the first number logged
    second: 0 // ==> the second number logged post operator
};




// CURRENT ISSUE: The array prints everytime a number is clicked, including previously
// entered numbers. Needs to REPLACE/REFRESH the array each time a number is clicked
// and show only the most updated version of the entered array.

// This function needs to keep things in string form to concatenate!
const enterNumber = (e) => {
    number.clicked = e.target.id;
    number.entered = number.entered + number.clicked;
    console.log(number.entered); // <== updating each click!
    $(`.display`).replaceWith(number.entered); // <== not replacing with update each click!
};
    



// OPERATOR FUNCTIONS

const add = (e) => {
    console.log("Adding!");
    console.log(e.target.id);
    // 1. turn the entered array into a single number instead of a string of numbers
    // 2. store the number into a variable (num1 maybe)
    // 3. CLEAR the entered array
    // 4. display num1 and operator
    // 5. 
    };

const subtract = (e) => {
    console.log("Subtracting!");

    // 1. turn the entered array into a single number instead of a string of numbers
    // 2. store the number into a variable (num1 maybe)
    // 3. CLEAR the entered array
    // 4. display num1 and operator
    // 5. 
    };

const multiply = (e) => {
    console.log("Multiplying!");

    // 1. turn the entered array into a single number instead of a string of numbers
    // 2. store the number into a variable (num1 maybe)
    // 3. CLEAR the entered array
    // 4. display num1 and operator
    // 5. 
    };

const divide = (e) => {
    console.log("Dividing!");

    // 1. turn the entered array into a single number instead of a string of numbers
    // 2. store the number into a variable (num1 maybe)
    // 3. CLEAR the entered array
    // 4. display num1 and operator
    // 5. 
    };

const equals = (e) => {
    console.log("Equals!");

    // 1. turn the entered array into a single number instead of a string of numbers
    // 2. store the number into a variable (num1 maybe)
    // 3. CLEAR the entered array
    // 4. display num1 and operator
    // 5. 
};
   



$('.numbers').on('click', 'button', enterNumber);
$('.operators #add').on('click', add);
$('.operators #subtract').on('click', subtract);
$('.operators #multiply').on('click', multiply);
$('.operators #divide').on('click', divide);
$('.operators #equals').on('click', equals);


// Need operators - , + , / , * , and = (return);
