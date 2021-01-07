// import functions and grab DOM elements
//Declare addition elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-results');

// console.log(addInput1, addInput2, addButton, addResult);

//Declaration for subtraction

const subInput1 = document.getElementById('subtract-input-1');
const subInput2 = document.getElementById('subtract-input-2');
const subButton = document.getElementById('subtract-button');
const subResult = document.getElementById('subtract-results');

//Declaration for multiplication

const multInput1 = document.getElementById('multiply-input-1');
const multInput2 = document.getElementById('multiply-input-2');
const multButton = document.getElementById('multiply-button');
const multResult = document.getElementById('multiply-results');

//Declaration for division 

const divInput1 = document.getElementById('divide-input-1');
const divInput2 = document.getElementById('divide-input-2');
const divButton = document.getElementById('divide-button');
const divResult = document.getElementById('divide-results');


// initialize state N/A

// set event listeners to update state and DOM
//Event for addition 
addButton.addEventListener('click', () => {
    // console.log('Hello world');
    // console.log(addInput1.value);
    // console.log(addInput2.value);

    const add1 = addInput1.valueAsNumber;
    const add2 = addInput2.valueAsNumber;

    const result = add1 + add2;

    addResult.textContent = result;

})

//Event for subtraction

subButton.addEventListener('click', () => {

    const sub1 = subInput1.valueAsNumber;
    const sub2 = subInput2.valueAsNumber;

    const result = sub1 - sub2;

    subResult.textContent = result;
})

//Event for multiplication

multButton.addEventListener('click', () => {

    const mult1 = multInput1.valueAsNumber;
    const mult2 = multInput2.valueAsNumber;

    const result = mult1 * mult2;

    multResult.textContent = result;
})

//Event for division 
divButton.addEventListener('click', () => {

    const div1 = divInput1.valueAsNumber;
    const div2 = divInput2.valueAsNumber;

    const result = div1 / div2;

    divResult.textContent = result;
})
