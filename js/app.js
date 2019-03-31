// operation should start as equals() - returns input converted to number
//use jQuery to collect text from mouse clicks in input array
//if number button - add to input array
//if operator button - replace stored operator 
//if equals button - perform object's stored operation on valueA and valueB
    //return result to screen
//if operator button store screen results to input
//if clear button render all

const calculon = {
    input:["4","3","2"],
    valueA: 0,
    valueB: [],
    operation: null
}
//functions
//temp function to test calculator, then will link to buttons
//collects strings and stores in input
const collectInput = (str) =>{
calculon.input.push(str);
console.log(calculon.input)
};
//if operator, store input in value A until another operator
const checkForOperation = (str) =>{
        if(str === "+"||"-"||"*"||"/"){
            calculon.operation =str;
            console.log(calculon.operation)
    }
}

//concatinates strings and parses to number
//stores in StoreA
const convertStrings =(arr) => {
    arr = calculon.input;
    for (let i = 0; i < calculon.input.length; i++) {
        
        calculon.valueA += arr[i];
        calculon.valueA = parseInt(calculon.valueA);
        console.log (calculon.valueA)
    }
}
// const storeValues = (calculon.input) => {
//     for (let i = 0; i < calculon.input.length; i++){
//         calculon.valueA = [i]++
//         parseInt(valueA);
        
//         console.log(calculon.valueA);
//     }
// }


const newOperator = () =>{};
//if input = operator, store in operator 
//when another operator, perform current operation
//store result
//change operation to what was input.

//operations
const add = (valueA,valueB) =>{
    sum = valueA + valueB
    console.log(sum);
    return sum
};
const Sub = (valueA,valueB) =>{
    diff = valueA - valueB;
    console.log(diff)
    return diff
};
const mult =(valueA,valueB) =>{
    prod = valueA * valueB;
    console.log(prod)
    return prod
};
const div = (valueA,valueB) =>{
    quot = valueA / valueB
    console.log(quot)
    return quot
};





// //create button event handlers
// const $plusbtn = $(plus);
// $plusbtn.on('click', () => {
// add();
// console.log('button was clicked!!');
// console.log(calculon.input);
// console.log(calculon.output)
// });
