console.log("app.js loaded");

//Calculator homework for GA SEI
//This is a reverse polish calculator web app.

//Collin Brockway
//GitHub: keenmaster486




//=======VARIABLES AND CLASSES GO BELOW=======

const q = []; //this is an array of numbers
let cur = 0;
//for (let i = 0; i < 100; i++)
//{
//	q[i] = "";
//}



//=======FUNCTIONS GO BELOW=======

function buttonClick(b)
{
	//This function gets called by the individual button
	//event listeners whenever a buton was clicked

	//b is the button that was clicked.
	//It will either be a digit (integer from 0 - 9) for the number,
	//or a character indicating an operation (+, -, /, *, decimal point)
	//or the string "enter" indicating the Enter key was pressed

	//Filter input:

	//console.log(b);

	switch (b)
	{
		case "C": //Clear button
			console.log("Clear");
			clearButton();
			break;
		case 0: //All the digits and the decimal point
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case ".":
			console.log(`Digit: ${b}`);
			addDigit(b);
			break;
		case "+": //All the operations
		case "-":
		case "/":
		case "*":
			operation(b);
			break;
		case "enter":
			//Enter key
			console.log(`Enter key was pressed`);
			pressEnter();
			break;
	}
}

function addDigit(d)
{
	//d is the digit to add to the current line
	if (q[0] === undefined)
	{
		q[0] = "" + d;
	}
	else
	{
		q[0] = q[0] + "" + d;
	}
	refreshScreen();
}

function clearButton()
{
	if (q[0] === "")
	{
		for (let i = 0; i < q.length; i++)
		{
			q[i] = "";
		}
	}
	else
	{
		q[0] = "";
	}
	refreshScreen();
}

function operation(o)
{
	switch (o)
	{
		case "+":
			total = Number(q[1]) + Number(q[0]);
			break;
		case "-":
			total = Number(q[1]) - Number(q[0]);
			break;
		case "/":
			total = Number(q[1]) / Number(q[0]);
			break;
		case "*":
			total = Number(q[1]) * Number(q[0]);
			break;
	}
	q.unshift("" + total);
	refreshScreen();
}


function pressEnter()
{
	q.unshift("");
	refreshScreen();
}

function refreshScreen()
{

	if (q[0] === "")
	{
		$('#line0').text("0");
	}
	else
	{
		$('#line0').text(q[0]);	
	}
	$('#line1').html(q[1]);
	$('#line2').html(q[2]);
	$('#line3').html(q[3]);
	$('#line4').html(q[4]);
	$('#line5').html(q[5]);
	$('#line6').html(q[6]);
}


//=======MAIN CODE GOES BELOW=======


//Initial screen refresh:
refreshScreen();
clearButton();
















//=======EVENT LISTENERS GO BELOW=======


	$("#C").on("click", function () {buttonClick("C");});
	
	$("#1").on("click", function () {buttonClick(1);});
	$("#2").on("click", function () {buttonClick(2);});
	$("#3").on("click", function () {buttonClick(3);});
	$("#4").on("click", function () {buttonClick(4);});
	$("#5").on("click", function () {buttonClick(5);});
	$("#6").on("click", function () {buttonClick(6);});
	$("#7").on("click", function () {buttonClick(7);});
	$("#8").on("click", function () {buttonClick(8);});
	$("#9").on("click", function () {buttonClick(9);});
	$("#0").on("click", function () {buttonClick(0);});
	
	$("#add").on("click", function () {buttonClick("+");});
	$("#subtract").on("click", function () {buttonClick("-");});
	$("#divide").on("click", function () {buttonClick("/");});
	$("#multiply").on("click", function () {buttonClick("*");});
	$("#decimal").on("click", function () {buttonClick(".");});

	$("#enter").on("click", function () {buttonClick("enter");});