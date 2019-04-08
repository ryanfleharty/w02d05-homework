
const calculon = {
    valueA: '',
    valueB: '',
    operation: '',
    output: '',
   
}
const collectInput = (btnValue) => {
    if (btnValue === "+"||btnValue === "-"||btnValue === "*"||btnValue === "/") {
        calculon.operation = btnValue
        console.log(calculon)
    } else if (btnValue === "e") {
        if (calculon.operation === "+") {
            calculon.output = calculon.valueA + calculon.valueB
            console.log(calculon.output);
            $('h3').text(calculon.output)
        } else if (calculon.operation === '-') {
            calculon.output = calculon.valueA - calculon.valueB
            console.log(calculon.output);
            d$('h3').text(calculon.output)
        } else if (calculon.operation === '*') {
            calculon.output = calculon.valueA * calculon.valueB
            console.log(calculon.output);
            $('h3').text(calculon.output)
        } else {
            calculon.output = calculon.valueA / calculon.valueB
            
        }
    calculon.valueA=calculon.output
    calculon.valueB=""
    } else {
        if(calculon.valueA ===""){
            calculon.valueA = parseInt(btnValue)
            console.log(calculon)
        }
        else{calculon.valueB = parseInt(btnValue)}
    }       console.log(calculon)
   
}
const runNumbers = () => {
    console.log('running the numbers')
}
const runEquals = () => {
    console.log("running equals")
}

$("#1").click(function () {
    collectInput("1");
    $('h3').text("1")
    console.log('clicked 1')
});
$("#2").click(function () {
    collectInput("2");
    $('h3').text("2")
    console.log('clicked 2')
});
$("#3").click(function () {
    collectInput("3");
    $('h3').text("3")
    console.log('clicked 3')
});
$("#4").click(function () {
    collectInput("4");
    $('h3').text("4")
    console.log('clicked 4')
});
$("#5").click(function () {
    collectInput("5");
    $('h3').text("5")
    console.log('clicked 5')
});
$("#6").click(function () {
    collectInput("6");
    $('h3').text("6")
    console.log('clicked 6')
});
$("#7").click(function () {
    collectInput("7");
    $('h3').text("7")
    console.log('clicked 7')
});
$("#8").click(function () {
    collectInput("8");
    $('h3').text("8")
    console.log('clicked 8')
});
$("#9").click(function () {
    collectInput("9");
    $('h3').text("9")
    console.log('clicked 9')
});
$("#0").click(function () {
    collectInput("0");
    $('h3').text("0")
    console.log('clicked 0')
});
//button listeners - operators
//if operator button - replace stored operator 
//if operator button store screen results to input
$("#add").click(function () {
    collectInput("+")
    $('h3').text("+")
});
$("#sub").click(function () {
    collectInput("-")
    $('h3').text("-")
    console.log('-')
});
$("#mult").click(function () {
    collectInput("*")
    $('h3').text("x")
    console.log('x')
});
$("#div").click(function () {
    collectInput("/")
    $('h3').text("/")
    console.log('/')
});
//button listeners - equals
//if equals button - perform object's stored operation on valueA and valueB
//return result to screen
$("#e").click(function () {
    collectInput('e')
    $('h3').text("=")
    $('h3').text(calculon.output)
    calculon.output = ''
    console.log('= clicked')
});
// //button listeners - clear

// //if clear button render all
$("#c").click(function () {
    $('h3').text("")
    //clear();
    console.log('c clicked')
});

// //use jQuery to show inputs and out puts on the screen


// //test
// //adjust UX 











// const checkNumbers = (str) => {
// if ((str != '+') || 
//     (str != '-') || 
//     (str != '*') || 
//     (str != '/') ||
//     (str != 'e') && 
//     (calculon.valueA === '')){
//         calculon.valueA = str
//         parseInt(calculon.valueA)
//         displayInput(calculate.valueA)
//     }else {
//         calculon.valueB = str
//         parseInt(calculon.valueB)
//         displayInput(calculate.valueB)
//     }
// }
// const checkOperator = (str) => {
//     if ((str === "+") || (str === "-") || (str === "*") || (str === "/") && (calculon.operation === '')){
//         calculon.operation = str
//     }else {calculate()}
// }   
// const calculate = (operation) =>{
//     if (calculon.operation === "+") {
//         calculon.output = calculon.valueA + calculon.valueB
//         console.log(calculon.output);
//         displayOutput();
//     } else if (calculon.operation === '-') {
//         calculon.output = calculon.valueA - calculon.valueB
//         console.log(calculon.output);
//         displayOutput();
//     } else if (calculon.operation === '*') {
//         calculon.output = calculon.valueA * calculon.valueB
//         console.log(calculon.output);
//         displayOutput();
//     } else {
//         calculon.output = calculon.valueA / calculon.valueB
//         console.log(calculon.output);
//         displayOutput();
//     }
//     calculon.valueA = calculon.output
//     clear()
// }
// const clear = () => {
// //render()
// calculon.input = []
// calculon.valueA = 0
// calculon.valueB = 0
// calculon.operation = 'e'
// calculon.output= 0
// console.log('clear() has run')
// }
// const displayInput = ()=>{
//     $('#screen').text(str)
// }
// const displayOutput = ()=>{
//     $('#screen').text(`${calculon.output}`)
//     calculon.output = calculate.valueA 
// }
// const collectInput = () =>{
//     if (checkNumbers()){
//         console.log(calculon)
//     }else{checkOperator()
//         console.log(calculon)
//     }
// }
// //use jQuery to collect text from mouse clicks in input array
// //if number button - add to input array
// //button listeners - Numbers

