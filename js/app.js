const number = {
    entered: [], // ==> the string of numbers being built, to be stored then cleared upon operator click
    clicked: "", // ==> the number string that's just been clicked 
    $display: 0, // ==> What's on the page via jQuery
    first: "", // ==> the first number logged
    second: "", // ==> the second number logged POST OPERATOR
    operator: "", // ==> holds the type of operation
    answer: ""
};

// This function needs to keep things in string form to concatenate!
const enterNumber = (e) => {
    if (number.answer !== "") {
        // number.first === toString(number.answer);
        // number.first === "";
        console.log(e.target.id);
        number.second = e.target.id;
        console.log(number);
        number.entered.push(e.target.id);
        $(`.display`).text(number.entered.join(""));
    } else {
        number.clicked = e.target.id;
        number.entered.push(number.clicked);
        console.log(number.entered); // <== updating each click!
        $(`.display`).text(number.entered.join("")); // <== displays numbers entered! 
    };
};


// OPERATOR FUNCTIONS
// need to be refactored at some point; lots of repetition below


const add = (e) => {
    console.log("Adding!");
    if (number.answer !== "") {
        console.log("answer is not empty");
        number.entered = [];
        number.operator = "add";
        number.first = number.answer.toString();
        console.log(number);
    } else {
        number.first = number.entered.join(""); // adds concatenated number string to first variable
        number.entered = []; // clears entered array for next number
        number.operator = "add";
        console.log("answer is empty");
        console.log(number);
    };
};


const subtract = (e) => {
    if (number.answer !== "") {
        console.log("answer is not empty");
        number.entered = [];
        number.operator = "subtract";
        number.first = number.answer.toString();
        console.log(number);
    } else {
        number.first = number.entered.join(""); // adds concatenated number string to first variable
        number.entered = []; // clears entered array for next number
        number.operator = "subtract";
        console.log("answer is empty");
        console.log(number);
    };
};

const multiply = (e) => {
    console.log("Multiplying!");
    if (number.answer !== "") {
        console.log("answer is not empty");
        number.entered = [];
        number.operator = "multiply";
        number.first = number.answer.toString();
        console.log(number);
    } else {
        number.first = number.entered.join(""); // adds concatenated number string to first variable
        number.entered = []; // clears entered array for next number
        number.operator = "multiply";
        console.log("answer is empty");
        console.log(number);
    };
};

const divide = (e) => {
    console.log("Dividing!");
    if (number.answer !== "") {
        console.log("answer is not empty");
        number.entered = [];
        number.operator = "divide";
        number.first = number.answer.toString();
        console.log(number);
    } else {
        number.first = number.entered.join(""); // adds concatenated number string to first variable
        number.entered = []; // clears entered array for next number
        number.operator = "divide";
        console.log("answer is empty");
        console.log(number);
    };
};



const equals = (e) => {
    if (number.second === "") {
        number.second = number.entered.join(""); // adds concatenated number string to second variable
        number.entered = []; // clears entered array for next number
        if (number.operator === "add") {
            number.answer = Number(number.first) + Number(number.second);
        } else if (number.operator === "subtract") {
            number.answer = Number(number.first) - Number(number.second);
        } else if (number.operator === "multiply") {
            number.answer = Number(number.first) * Number(number.second);
        } else {
            number.answer = Number(number.first) / Number(number.second);
        };
        console.log(number);
    } else {
        if (number.operator === "add") {
            number.answer = Number(number.first) + Number(number.second);
        } else if (number.operator === "subtract") {
            number.answer = Number(number.first) - Number(number.second);
        } else if (number.operator === "multiply") {
            number.answer = Number(number.first) * Number(number.second);
        } else {
            number.answer = Number(number.first) / Number(number.second);
        };
        console.log(number);
    };
     
    $(`.display`).text(number.answer)
};
   
const clear = (e) => {
    number.entered = [];
    number.first = "";
    number.second = "";
    number.answer = "";
    number.clicked = "";
    $(`.display`).text(number.answer)

};



$('.numbers').on('click', 'button', enterNumber);
$('.operators #add').on('click', add);
$('.operators #subtract').on('click', subtract);
$('.operators #multiply').on('click', multiply);
$('.operators #divide').on('click', divide);
$('.operators #equals').on('click', equals);
$('.operators #clear').on('click', clear);

// Need operators - , + , / , * , and = (return);
