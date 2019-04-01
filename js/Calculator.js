/* eslint-disable quote-props */
/* eslint-disable object-property-newline */
/* eslint-disable quotes */

class Calculator {
  constructor(type) {
    this.type = type;
    this.numA = '';
    this.numB = '';
    this.maxSigDigits = 2;
    this.operation = '';
    this.calcsArr = [];
    this.result = '';
    this.$calcLocation = '';
  }

  doCalc(a, b, operator) {

    let aDecLength;
    if (a.includes('.')) {
      if (a[0] === '.') {
        a = '0' + a;
      }
      aDecLength = a.split('.')[1].length;
    } else {
      aDecLength = 1;
    }

    let bDecLength;
    if (b.includes('.')) {
      if (b[0] === '.') {
        b = '0' + b;
      }
      bDecLength = b.split('.')[1].length;
    } else {
      bDecLength = 1;
    }
    
    if (aDecLength > bDecLength) {
      this.maxSigDigits = aDecLength;
    } else {
      this.maxSigDigits = bDecLength;
    }

    this.numA = parseFloat(a).toFixed(this.maxSigDigits);
    this.numB = parseFloat(b).toFixed(this.maxSigDigits);
    this.operation = operator;

    switch (this.operation) {
      case 'X':
        this.result = (parseFloat(this.numA) * parseFloat(this.numB)).toFixed(this.maxSigDigits);
        break;
      case '/':
        this.result = (parseFloat(this.numA) / parseFloat(this.numB)).toFixed(this.maxSigDigits);
        break;
      case '-':
        this.result = (parseFloat(this.numA) - parseFloat(this.numB)).toFixed(this.maxSigDigits);
        break;
      case '+':
        this.result = (parseFloat(this.numA) + parseFloat(this.numB)).toFixed(this.maxSigDigits);
        break;
      case '%':
        this.result = (parseFloat(this.numA) * parseFloat(0.01)).toFixed(this.maxSigDigits + 2);
        break;
      case '+/-':
        this.result = (parseFloat(this.numA) * parseFloat(-1)).toFixed(this.maxSigDigits);
        break;
      default: // case 'C':
        this.result = '0.0';
        // do nothing
    }

    this.calcsArr.push(this.result);
    return this.result;
  }

  // divide(a, b) {
  //   this.numA = parseFloat(a);
  //   this.numB = parseFloat(b);
  //   this.operation = 'divide';
  //   this.result = parseFloat(a) / parseFloat(b);
  //   this.calcsArr.push(this.result);
  //   return this.result;
  // }

  // multiply(a, b) {
  //   this.numA = parseFloat(a);
  //   this.numB = parseFloat(b);
  //   this.operation = 'multiply';
  //   this.result = parseFloat(a) * parseFloat(b);
  //   this.calcsArr.push(this.result);
  //   return this.result;
  // }

  // subtract(a, b) {
  //   this.numA = parseFloat(a);
  //   this.numB = parseFloat(b);
  //   this.operation = 'subtract';
  //   this.result = parseFloat(a) - parseFloat(b);
  //   this.calcsArr.push(this.result);
  //   return this.result;
  // }

  // add(a, b) {
  //   this.numA = parseFloat(a);
  //   this.numB = parseFloat(b);
  //   this.operation = 'add';
  //   this.result = parseFloat(a) + parseFloat(b);
  //   this.calcsArr.push(this.result);
  //   return this.result;
  // }

  // invert(a) {
  //   this.numA = parseFloat(a);
  //   this.numB = '';
  //   this.operation = 'invert';
  //   this.result = parseFloat(a) * parseFloat(-1);
  //   this.calcsArr.push(this.result);
  //   return this.result;
  // }

  // convPercentToDecimal(a) {
  //   this.result = parseFloat(a) * 0.01;
  //   this.calcsArr.push(this.result);
  //   return this.result;
  // }
}

class Applewatch extends Calculator {
  constructor() {
    super('apple-watch');
    this.numBtns = 20;
    this.rows = 5;
    this.cols = 4;
  }

  initCalculator() {
    const $calcDiv = $('.caclulator');
    this.$calcLocation = $calcDiv;
    const $calcForm = $('<form/>');
    const $calcInput = $('<input/>', { "type": 'text', "value": '0.0' });
    $calcInput.css({ "text-align": 'right', "font-size": '28px', "color": 'white', 'background-color': 'black',
      "border-color": 'black', "width": '155px', "height": '20px', "margin": '55px 36px 0' });
    $calcForm.append($calcInput);
    $('.input').append($calcForm);

    const $clearBtn = $('<button/>', { "text": 'C', "class": 'clearBtn' });
    $clearBtn.css({ "background-color": 'rgb(102,102,102)', "width": '40px', "height": '28px', "margin": '1px 0px', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($clearBtn);

    const $bsBtn = $('<button/>', { "text": '<x]', "class": 'bsBtn' });
    $bsBtn.css({ "background-color": 'rgb(102,102,102)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($bsBtn);

    const $percBtn = $('<button/>', { "text": '%', "class": 'percBtn' });
    $percBtn.css({ "background-color": 'rgb(102,102,102)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($percBtn);

    const $divBtn = $('<button/>', { "text": '/', "class": 'divBtn' });
    $divBtn.css({ "background-color": 'rgb(50,50,50)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($divBtn);

    const $sevenBtn = $('<button/>', { "text": '7', "class": 'sevenBtn' });
    $sevenBtn.css({ "background-color": 'rgb(68,68,68)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($sevenBtn);

    const $eightBtn = $('<button/>', { "text": '8', "class": 'eighttn' });
    $eightBtn.css({ "background-color": 'rgb(68,68,68)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($eightBtn);
    
    const $nineBtn = $('<button/>', { "text": '9', "class": 'nineBtn' });
    $nineBtn.css({ "background-color": 'rgb(68,68,68)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($nineBtn);

    const $mulBtn = $('<button/>', { "text": 'X', "class": 'mulBtn' });
    $mulBtn.css({ "background-color": 'rgb(50,50,50)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($mulBtn);

    const $fourBtn = $('<button/>', { "text": '4', "class": 'fourBtn' });
    $fourBtn.css({ "background-color": 'rgb(68,68,68)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($fourBtn);

    const $fiveBtn = $('<button/>', { "text": '5', "class": 'fiveBtn' });
    $fiveBtn.css({ "background-color": 'rgb(68,68,68)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($fiveBtn);
    
    const $sixBtn = $('<button/>', { "text": '6', "class": 'sixBtn' });
    $sixBtn.css({ "background-color": 'rgb(68,68,68)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($sixBtn);

    const $subBtn = $('<button/>', { "text": '-', "class": 'subBtn' });
    $subBtn.css({ "background-color": 'rgb(50,50,50)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($subBtn);

    const $oneBtn = $('<button/>', { "text": '1', "class": 'soneBtn' });
    $oneBtn.css({ "background-color": 'rgb(68,68,68)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($oneBtn);
    
    const $twoBtn = $('<button/>', { "text": '2', "class": 'twoBtn' });
    $twoBtn.css({ "background-color": 'rgb(68,68,68)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($twoBtn);

    const $threeBtn = $('<button/>', { "text": '3', "class": 'threeBtn' });
    $threeBtn.css({ "background-color": 'rgb(68,68,68)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($threeBtn);

    const $addBtn = $('<button/>', { "text": '+', "class": 'addBtn' });
    $addBtn.css({ "background-color": 'rgb(50,50,50)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($addBtn);
    
    const $zeroBtn = $('<button/>', { "text": '0', "class": 'zeroBtn' });
    $zeroBtn.css({ "background-color": 'rgb(68,68,68)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($zeroBtn);

    const $dotBtn = $('<button/>', { "text": '.', "class": 'dotBtn' });
    $dotBtn.css({ "background-color": 'rgb(68,68,68)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($dotBtn);

    const $negBtn = $('<button/>', { "text": '+/-', "class": 'negBtn' });
    $negBtn.css({ "background-color": 'rgb(68,68,68)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($negBtn);

    const $equalBtn = $('<button/>', { "text": '=', "class": 'equalBtn' });
    $equalBtn.css({ "background-color": 'rgb(255,114,0)', "width": '40px', "height": '28px', "margin": '1px 0', "border-color": 'black', "border-radius": '3px' });
    $('.grid').append($equalBtn);
  }
}
