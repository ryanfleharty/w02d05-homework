console.log("Hello World!");




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
    if (screen.currentValue === "one"){
      $('.screen').text(screen.valueOne)
    } else {
      $('.screen').text(screen.valueTwo)
    }
    console.log(screen.valueOne);
    console.log(screen.valueTwo);
}



const screen = {
  display: null,
  currentValue: "one",
  valueOne: "",
  valueTwo: "",
  valueOneNumber(){
    return Number(this.valueOne);
  },
  valueTwoNumber(){
    return Number(this.valueTwo)
  },
  operation: "",
  calculate(){
    if (this.operation === "add"){
      add(this.valueOneNumber(),this.valueTwoNumber());
    } else if (this.operation === "subtract"){
      subtract(this.valueOneNumber(),this.valueTwoNumber());
    } else if (this.operation === "multiply"){
      multiply(this.valueOneNumber(),this.valueTwoNumber());
    } else if (this.operation === "divide"){
      divide(this.valueOneNumber(),this.valueTwoNumber());
    } else {
      this.display = "ERROR--MISSING OPERATION";
    }
//    this.operation = "";
    $('.screen').append(this.display);
  }
}


$('#equals').on('click', function(){
  $('.screen').text("");
  screen.calculate()
})

$('#add').on('click', function(){
  screen.operation = "add";
  screen.valueTwo = screen.valueOne;
  screen.valueOne = "";
  screen.currentValue = "Two"
})

$('#subtract').on('click', function(){
  screen.operation = "subtract";
  screen.valueTwo = screen.valueOne;
  screen.valueOne = "";
  screen.currentValue = "Two"
})

$('#multiply').on('click', function(){
  screen.operation = "multiply";
  screen.valueTwo = screen.valueOne;
  screen.valueOne = "";
  screen.currentValue = "Two"
})

$('#divide').on('click', function(){
  screen.operation = "divide";
  screen.valueTwo = screen.valueOne;
  screen.valueOne = "";
  screen.currentValue = "Two"
})

$('#clear').on('click', function(){
  document.location.reload()
})

$('.number').on('click', function(e){
  updateNumber(e);
})
