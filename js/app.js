

{// PSUEDO CODE
// When number is clicked it appears on screen
// When multiple numbers clicked they create larger number

// When +,-,*,/ are clicked:
  // current numbers cleared from screen, saved as first value
  // stage logic for that operation

// allow new numbers to be typed

// when = is clicked:
// complete operation
// display answer on screen
// save answer as new first value
}

let pendingCalculation = false;

let fontSize = 54;

const resetFontSize = () => {
  fontSize = 54;
  $('.screen').css('font-size', fontSize)
}

const add = (num1,num2) => {
  const answer = (num2 + num1);
  screen.display = answer;
  screen.valueOne = answer;
}

const subtract = (num1,num2) => {
  const answer = (num2 - num1);
  screen.display = answer;
  screen.valueOne = answer;
}

const multiply = (num1,num2) => {
  const answer = (num2 * num1);
  screen.display = answer;
  screen.valueOne = answer;
}

const divide = (num1,num2) => {
  const answer = (num2 / num1);
  screen.display = answer;
  screen.valueOne = answer;
}

const updateNumber = (button) => {
    if (button.target.id === "zero"){
      screen.valueOne += '0';
    } else if (button.target.id === "one") {
      screen.valueOne += '1';
    } else if (button.target.id === "two") {
      screen.valueOne += '2';
    } else if (button.target.id === "three") {
      screen.valueOne += '3';
    } else if (button.target.id === "four") {
      screen.valueOne += '4';
    } else if (button.target.id === "five") {
      screen.valueOne += '5';
    } else if (button.target.id === "six") {
      screen.valueOne += '6';
    } else if (button.target.id === "seven") {
      screen.valueOne += '7';
    } else if (button.target.id === "eight") {
      screen.valueOne += '8';
    } else if (button.target.id === "nine") {
      screen.valueOne += '9';
    } else if (button.target.id === "decimal") {
      screen.valueOne += '.';
    }
//    if (screen.currentValue === "one"){
      $('.screen').text(screen.valueOne)
//    } else {
//      $('.screen').text(screen.valueTwo)
//    }
}

const dynamicText = () => {
if (screen.valueOne.length > 16 && screen.valueOne.length < 21) {
  $('.screen').css('font-size', fontSize)
  fontSize -= 2.7;
} else if (screen.valueOne.length > 16 && screen.valueOne.length < 29) {
  $('.screen').css('font-size', fontSize)
  fontSize -= 1.5;
} else if (screen.valueOne.length > 16 && screen.valueOne.length < 42 ) {
  $('.screen').css('font-size', fontSize)
  fontSize -= .75;
}
}



// THIS OBJECT ACTS AS A STORAGE/DISPLY FOR CALCULATOR
const screen = {
  display: null,
//  currentValue: "one",
  valueOne: "",
  valueTwo: "",
  valueOld: "",
  equalChain: false,
  valueOneNumber(){
    return Number(this.valueOne);
  },
  valueTwoNumber(){
    return Number(this.valueTwo)
  },
  valueOldNumber(){
    return Number(this.valueOld)
  },
  operation: "",
  calculate(one,two){
    if (this.operation === "add"){
      add(one,two);
    } else if (this.operation === "subtract"){
      subtract(one,two);
    } else if (this.operation === "multiply"){
      multiply(one,two);
    } else if (this.operation === "divide"){
      divide(one,two);
    } else {
      this.display = "ERROR";
    }
//    this.operation = "";
    $('.screen').append(this.display);
  }
}



$('#equals').on('click', function(){
  resetFontSize();
  pendingCalculation = false;
  if (!screen.equalChain){
    screen.valueOld = screen.valueOne;
  }
  $('.screen').text("");
  console.log(screen.equalChain);
  console.log(`${screen.valueOld} -- valueOld`);
  console.log(`${screen.valueOne} -- valueOne`);
  console.log(`${screen.valueTwo} -- valueTwo`);
  if (screen.equalChain){
     screen.calculate(screen.valueOldNumber(),screen.valueOneNumber());
  } else {
    screen.calculate(screen.valueOneNumber(),screen.valueTwoNumber())
  }
  screen.equalChain = true;
  console.log(screen.equalChain);
  console.log(`${screen.valueOld} -- valueOld`);
  console.log(`${screen.valueOne} -- valueOne`);
  console.log(`${screen.valueTwo} -- valueTwo`);
})

$('#add').on('click', function(){
if (pendingCalculation === false) {
  screen.operation = "add";
  screen.valueTwo = screen.valueOne;
  screen.valueOne = "";
  screen.equalChain = false;
  pendingCalculation = true;
  $('.screen').text("")
  resetFontSize();
}
})

$('#subtract').on('click', function(){
  if (pendingCalculation === false) {
  screen.operation = "subtract";
  screen.valueTwo = screen.valueOne;
  screen.valueOne = "";
  screen.equalChain = false;
  pendingCalculation = true;
  $('.screen').text("")
  resetFontSize();
}
})

$('#multiply').on('click', function(){
  if (pendingCalculation === false) {
  screen.operation = "multiply";
  screen.valueTwo = screen.valueOne;
  screen.valueOne = "";
  screen.equalChain = false;
  pendingCalculation = true;
  $('.screen').text("")
  resetFontSize();
}
})

$('#divide').on('click', function(){
  if (pendingCalculation === false) {
  screen.operation = "divide";
  screen.valueTwo = screen.valueOne;
  screen.valueOne = "";
  screen.equalChain = false;
  pendingCalculation = true;
  $('.screen').text("")
  resetFontSize();
}
})

$('#clear').on('click', function(){
  document.location.reload()
})

$('.number').on('click', function(e){
if (screen.valueOne.length < 131) {
  dynamicText()
  updateNumber(e);
} else {
  alert("Maximum Input Reached!")
}
})
