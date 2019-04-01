console.log('Calculator');
//There is a bug, I am still working on it. I thought I had
//figured it out.... You were right about keeping backups. 
//This is not my finished product. 
let numOne = '';
let numTwo = '';
let operator = '';
let total = '';

$('document').ready(function () {
    //clear
$('#clear').on('click', function () {
    location.reload(true);
})

    $('button').on('click', function (e) {
        let button = e.target.innerHTML;
        if (button >= '0' && button <= '9') {
            numbers(button);
        } else {
            theOperator(button);
        }
    });
});

const calcTotal = () => {
    switch (operator) {
        case "+":
            total = +numOne + +numTwo;
            displayButton(total);
            break;
        case "-":
            total = +numOne - +numTwo;
            displayButton(total);
            break;
        case "/":
            total = +numOne / +numTwo;
            displayButton(total);
            break;
        case "*":
            total = +numOne * +numTwo;
            displayButton(total);
            break;
    }
    updateVar();
// =
    $('#equal').click(function () {
        alert(eval($('.container').val()));
    });
    updateVar();
}
const numbers = (num) => {
    if (numOne === '') {
        numOne = num;
    } else {
        numTwo = num;
    }
    displayButton(num);
}

const theOperator = (oper) => {
    if (operator === '') {
        operator = oper;
    } else {
        calcTotal();
        operator = oper;
    }
}
//The switch statement evaluates, matching the expression's value to a case, 
// then executes statements associated with that case, as well as statements in cases that follow the matching case.
//break stops the loop and switch


const displayButton = (button) => {
    $('.calc-resultInput').text(button);
}

const updateVar = () => {
    numOne = total;
    numTwo = '';
}

