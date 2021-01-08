import { addClickHandler, subClickHandler, multClickHandler, divClickHandler } from './handlers.js';

//Addition section
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', addClickHandler);

//Subtraction section
const subButton = document.getElementById('subtract-button');

subButton.addEventListener('click', subClickHandler);

//Multiplication section
const multButton = document.getElementById('multiply-button');

multButton.addEventListener('click', multClickHandler);

//Division section
const divButton = document.getElementById('divide-button');

divButton.addEventListener('click', divClickHandler);


