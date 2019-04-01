console.log('calculator');



// Pseudo

// 	Create 10 buttons for 0-9, 						Done
//	4 buttons for operators, 						Done
//	and 1 for 'equal' and 1 for a Clear button.		Done
// 	create variables for all our buttons.			Done
// 	Assign Names and value to those buttons 		Half Done
// 	Connect buttons to our display				Still to do



let num1 = "";
let num2 = "";
let operator = "";
let total = "";

const buttons = () => {
	$('.calcFrame').append("<div class='row1'></div>")
	$('.row1').append("<button id='button'>9</button>")
	$('.row1').append("<button id='button'>8</button>")
	$('.row1').append("<button id='button'>7</button>")
	$('.row1').append("<button id='button'>x</button>")

	$('.calcFrame').append("<div class='row2'></div>")
	$('.row2').append("<button id='button'>6</button>")
	$('.row2').append("<button id='button'>5</button>")
	$('.row2').append("<button id='button'>4</button>")
	$('.row2').append("<button id='button'>/</button>")

	$('.calcFrame').append("<div class='row3'></div>")
	$('.row3').append("<button id='button'>3</button>")
	$('.row3').append("<button id='button'>2</button>")
	$('.row3').append("<button id='button'>1</button>")
	$('.row3').append("<button id='button'>+</button>")

	$('.calcFrame').append("<div class='row4'></div>")
	$('.row4').append("<button class='clear', id='button'>C</button>")
	$('.row4').append("<button id='button'>0</button>")
	$('.row4').append("<button class='equal', id='button'>=</button>")
	$('.row4').append("<button id='button'>-</button>")	
}
	$(document).ready(function() {
    	$('button').on('click', function(e) {
        	console.log(e.target.innerHTML);
    	let btn = e.target.innerHTML;
    		if(btn >= '0' && btn <= '9'){
    			newNum(btn);
    	} else {
    			newOp(btn);
    	}
    });
    $('.clear').on('click', function(e) {
    		let num1 = 0;
    		display(num1);
   	  		location.reload(true);
    });
    $('.equal').on('click', function(e) {
    		console.log(num1);
    });
});
function newNum(num) {
	if(num1 === "") {
		num1 += num;
	} else {
		num2 += num;
	}
	display(num);
}
function newOp(oper) {
    if (operator === '') {
        operator = oper;
    } else {
        newTotal();
        operator = oper;
    }             
}
function display(btn) {
    $('.calcInput').text(btn);
}
function newTotal() {
    switch (operator) {
        case '+':
            total = +num1 + +num2;
            num1 = total;
            display(num1);
            break;

        case '-':
            total = +num1 - +num2;
            num1 = total;
            display(num1);
            break;

        case '/':
            total = +num1 / +num2;
            num1 = total;
            display(num1);
            break;

        case 'x':
            total = +num1 * +num2;
            num1 = total;
            display(num1);
            break;
    }
}


buttons();









