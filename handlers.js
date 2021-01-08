import { getSum, getSub, getMult, getDiv } from './utils.js';

//addition variables
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addResult = document.getElementById('add-results');


//addition handler
export function addClickHandler() {

    const add1 = addInput1.valueAsNumber;
    const add2 = addInput2.valueAsNumber;

    const result = getSum(add1, add2);

    addResult.textContent = result;
}

//Subtraction variables
const subInput1 = document.getElementById('subtract-input-1');
const subInput2 = document.getElementById('subtract-input-2');
const subResult = document.getElementById('subtract-results');


//Subtraction handler
export function subClickHandler() {

    const sub1 = subInput1.valueAsNumber;
    const sub2 = subInput2.valueAsNumber;

    const result = getSub(sub1, sub2);

    subResult.textContent = result;
}

//Multiplication variables
const multInput1 = document.getElementById('multiply-input-1');
const multInput2 = document.getElementById('multiply-input-2');
const multResult = document.getElementById('multiply-results');

//Multiplication 
export function multClickHandler() {

    const mult1 = multInput1.valueAsNumber;
    const mult2 = multInput2.valueAsNumber;

    const result = getMult(mult1, mult2);

    multResult.textContent = result;
}

//Division variables
const divInput1 = document.getElementById('divide-input-1');
const divInput2 = document.getElementById('divide-input-2');
const divResult = document.getElementById('divide-results');

//Division 
export function divClickHandler() {

    const div1 = divInput1.valueAsNumber;
    const div2 = divInput2.valueAsNumber;

    const result = getDiv(div1, div2);

    divResult.textContent = result;
}