import { getSum, getSub, getMult, getDiv } from '../utils.js';

//Test Library 
const test = QUnit.test;

//Addition tests
test('It should return 4 when provided 2 + 2', (expect) => {

    const expected = 4;

    const actual = getSum(2, 2);

    expect.equal(actual, expected);
});

test('It should return -8 when provided -3 + -5', (expect) => {

    const expected = -8;

    const actual = getSum(-3, -5);

    expect.equal(actual, expected);

});

//Subtraction tests
test('It should return 4 when provided 6 - 2', (expect) => {

    const expected = 4;

    const actual = getSub(6, 2);

    expect.equal(actual, expected);
});

test('It should return -6 when provided 6 - 12', (expect) => {

    const expected = -6;

    const actual = getSub(6, 12);

    expect.equal(actual, expected);
});

//Multiplication tests
test('It should return 10 when provided 2 * 5', (expect) => {

    const expected = 10

    const actual = getMult(2, 5);

    expect.equal(actual, expected);
});

test('It should return -10 when provided -2 * 5', (expect) => {

    const expected = -10;

    const actual = getMult(-2, 5);

    expect.equal(actual, expected);

});

//Division tests
test('It should return 3 when provided 9 / 3', (expect) => {

    const expected = 3;

    const actual = getDiv(9, 3);

    expect.equal(actual, expected);
});

test('It should return -3 when passed -12 / 4', (expect) => {

    const expected = -3;

    const actual = getDiv(-12, 4);

    expect.equal(actual, expected);
});