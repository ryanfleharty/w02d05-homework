
const calculon = {
    input: [],
    valueA: 0,
    valueB: 0,
    operation: 'e',
    output: 0,
}

const collectInput = (str) =>{
    //if equals
    //push a to b
    //input to a
    //run stored operation
    //return to screen and push return to a

if(str === 'e'){
    calculon.valueB = calculon.valueA;
        if (calculon.operation === "+") {
            calculon.output = calculon.valueA + calculon.valueB
            console.log(calculon.output);
        } else if (calculon.operation === '-') {
             calculon.output = calculon.valueA - calculon.valueB
             console.log(calculon.output);
        } else if (calculon.operation === '*') {
            calculon.output = calculon.valueA * calculon.valueB
            console.log(calculon.output);
        } else {
           calculon.output = calculon.valueA / calculon.valueB
           console.log(calculon.output);
        }
        calculon.valueA = calculon.output
        clear()
    }else if (str === "+" || str === '*' || str === '-' || str === "/"){
            for (let i = 0; i < calculon.input.length; i++) {
                calculon.valueA += calculon.input[i];
                calculon.valueA = parseInt(calculon.valueA);
            }
            calculon.operation = str
            calculon.input = []
            console.log(calculon)
        } else {
            if (calculon.valueA){
                calculon.valueB = parseInt(str)
                console.log(calculon)
            }else{
                calculon.input.push(str);
                console.log(calculon)
            }
    }
}

//if operator
    //move input to a
    //store operator value
//if number
    //push to input

const clear = () => {
//render()
calculon.input = []
calculon.valueA = 0
calculon.valueB = 0
calculon.operation = 'e'
calculon.output= 0
console.log('clear() has run')
}

//use jQuery to collect text from mouse clicks in input array
//if number button - add to input array
//button listeners - Numbers
$("#1").click(function () {
    collectInput("1");
});
$("#2").click(function () {
    collectInput("2");
});
$("#3").click(function () {
    collectInput("3");
});
$("#4").click(function () {
    collectInput("4");
});
$("#5").click(function () {
    collectInput("5");
});
$("#6").click(function () {
    collectInput("6");
});
$("#7").click(function () {
    collectInput("7");
});
$("#8").click(function () {
    collectInput("8");
});
$("#9").click(function () {
    collectInput("9");
});
$("#0").click(function () {
    collectInput("0");
});
//button listeners - operators
//if operator button - replace stored operator 
//if operator button store screen results to input
$("#add").click(function () {
    collectInput("+")
    console.log('+')
});
$("#sub").click(function () {
    collectInput("-")
    console.log('-')
});
$("#mult").click(function () {
    collectInput("*")
    console.log('*')
});
$("#div").click(function () {
    collectInput("/")
    console.log('/')
});
//button listeners - equals
//if equals button - perform object's stored operation on valueA and valueB
//return result to screen
$("#e").click(function () {
    collectInput('e')
    console.log('= clicked')
});
//button listeners - clear

//if clear button render all
$("#c").click(function () {
    clear();
    console.log('c clicked')
});

//use jQuery to show inputs and out puts on the screen
//test
//adjust UX 