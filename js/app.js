

const calculon = {
    input:[],
    valueA: [],
    valueB: [],
    operation: null
}
//functions
const collectInput = (str) =>{

};
//collects strings and stores in input
//until an operator
const storeInputs = (arr) =>{};
//concatinates strings and parses to number
//stores in StoreA
const storeValues = (num) =>{};

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
