/* eslint-disable prefer-template */
/* eslint-disable quote-props */
/* eslint-disable quotes */

const appleWatch = new Applewatch();
appleWatch.initCalculator();

console.log(appleWatch);

let $input = $('input:text');

let numbers = [];
let operation = '';

$('input').on('blur', () => {
  $('form').submit();
});

$('form').on('submit', (e) => {
  e.preventDefault();
  if (numbers.length <= 2) {
    numbers.push($input.val());
  }
});

$('.grid').on('keydown', (e) => {
  e.preventDefault();
  $('form').submit();
});

$('.grid').on('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const btnClickedText = $(e.target).text();

    console.log(`${btnClickedText} clicked!`);

    if ($input.val() === '0.0' && btnClickedText !== 'C') {
      $input.val('');
    }

    switch (btnClickedText) {
      case 'C':
      $input.val(appleWatch.doCalc('1', '1', 'C'));
        numbers = [];
        break;
      case '<x]':
        $input.val($input.val().slice(0, ($input.val().length - 1)));
        break;
      case '%':
        $input.val(appleWatch.doCalc($input.val(), '1', '%'));
        break;
      case '/':
        if (numbers.length === 0 || $input.val() !== '0.0') {
          numbers.push($input.val());
          $input.val('0.0');
          operation = '/';
        }
        break;
      case '7':
        $input.val($input.val() + '7');
        break;
      case '8':
        $input.val($input.val() + '8');
        break;
      case '9':
        $input.val($input.val() + '9');
        break;
      case 'X':
        if (numbers.length === 0 || $input.val() !== '0.0') {
          numbers.push($input.val());
          $input.val('0.0');
          operation = 'X';
        }
        break;
      case '4':
        $input.val($input.val() + '4');
        break;
      case '5':
        $input.val($input.val() + '5');
        break;
      case '6':
        $input.val($input.val() + '6');
        break;
      case '-':
        if (numbers.length === 0 || $input.val() !== '0.0') {
          numbers.push($input.val());
          $input.val('0.0');
          operation = '-';
        }
        break;
      case '1':
        $input.val($input.val() + '1');
        break;
      case '2':
        $input.val($input.val() + '2');
        break;
      case '3':
        $input.val($input.val() + '3');
        break;
      case '+':
        if (numbers.length === 0 || $input.val() !== '0.0') {
          numbers.push($input.val());
          $input.val('0.0');
          operation = '+';
        }
        break;
      case '0':
        $input.val($input.val() + '0');
        break;
      case '.':
        $input.val($input.val() + '.');
        break;
      case '+/-':
        $input.val(appleWatch.doCalc($input.val(), '1', '+/-'));
        break;
      case '=':
        if (operation !== '') {
          if (numbers.length !== 2) {
            $('form').submit();
          }
          if (numbers.length === 2) {
            $input.val(appleWatch.doCalc(numbers[0], numbers[1], operation));
          }
        }
        numbers = [];
        break;
      default:
        // do nothing
    }

    console.log(appleWatch.result);
  }
});

// console.log('doCalc Functions:');
// console.log(appleWatch.doCalc(numA, numB, '*'));
// console.log(appleWatch.doCalc(numA, numB, '/'));
// console.log(appleWatch.doCalc(numA, numB, '-'));
// console.log(appleWatch.doCalc(numA, numB, '+'));
// console.log(appleWatch.doCalc(numA, numB, '%'));
// console.log(appleWatch.doCalc(numA, numB, '+/-'));

// console.log('Individual Functions:');
// console.log(appleWatch.divide(numA, numB));
// console.log(appleWatch.multiply(numA, numB));
// console.log(appleWatch.subtract(numA, numB));
// console.log(appleWatch.add(numA, numB));
// console.log(appleWatch.invert(numA));
// console.log(appleWatch.convPercentToDecimal(numA));
