//calculator

let firstNumber = [];
let secondNumber = [];
let operator = '';
let total = '';


$('button').on('click', function(e) {
  let btn = e.target.innerHTML;
  if(operator === '' && btn >= '0' && btn <= '9') {
    firstNumber = firstNumber + btn;
    $('.input').text(firstNumber);
  } else if(operator != '' && btn >= '0' && btn <= '9') {
    secondNumber = secondNumber +btn;
    $('.input').text(secondNumber);
  } else if(btn === '.') {
    firstNumber = firstNumber + btn;
    $('.input').text(firstNumber);
  } else if(btn === 'Clear'){
    firstNumber = '';
    secondNumber = '';
    operator = '';
    total = '';
    $('.input').text(firstNumber);
  } else if(btn === '=') {
    processTotal();
    firstNumber = '';
    secondNumber = '';
    operator = '';
    total = '';
  } else if(btn === '+' || btn === '-' || btn === '*' || btn === '/') {
    operator = btn;
    $('.input').text('');
  }
})

const processTotal = () => {
  if(operator === '+') {
    total = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
    $('.input').text(total);
  } else if(operator === '-') {
    total = parseInt(firstNumber, 10) - parseInt(secondNumber, 10);
    $('.input').text(total);
  } else if(operator === '*') {
    total = parseInt(firstNumber, 10) * parseInt(secondNumber, 10);
    $('.input').text(total);
  } else if(operator === '/') {
    total = parseInt(firstNumber, 10) / parseInt(secondNumber, 10);
    $('.input').text(total);
  }
}

/**
    $('.input').html(btn);
    if(btn === number) {
      firstNumber.push(btn);
    }

    if(btn >= '0' && btn <= '9') {
      $('.input').html(btn);
    } else if(btn === 'Clear') {
      $('.input').html('');
      firstNumber = '';
      secondNumber = '';
      operator = '';
      total = '';
    } else {
      $('.input').html(btn);
    }
  })


  const processNumber = (num) => {
    if(firstNumber === '') {
      firstNumber = num;
    } else {
      secondNumber = num;
    }
    displayButton(num);
  }

  const processOperator = (oper) => {
    if(operator === '') {
      operator = oper;
    } else {
      processTotal();
      operator = oper;
    }
  }


  //When we get the innerHTML of the button that is pressed, we get a string value. To sum two variables, they need to be converted to a number. There is a shorthand notation in JavaScript that will convert a string to a number by prefixing the variable with a + sign. You can see where I am doing this conversion on this line:


**/
