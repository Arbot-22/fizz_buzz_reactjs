import fizzBuzz from './functions/fizzBuzz';
import fizzBuzz2 from './functions/fizzBuzz2';
import contains from './functions/util';

/* 
Tests for the function fizzBuzz() :
Testing the return value of a given integer param  'number'
*/
test('1 is returned when number = 1', () => {
  expect(fizzBuzz2(1)).toEqual(1); // 1 not divisible by 3 or 5 or 15
});

test('Fizz is returned when number = 9', () => {
  expect(fizzBuzz(9)).toEqual('Fizz'); // 9 divisible by 3
});

test('Buzz is returned when number = 25', () => {
  expect(fizzBuzz(25)).toEqual('Buzz'); // 25 divisible by 5
});

test('FizzBuzz is returned when number = 30', () => {
  expect(fizzBuzz(30)).toEqual('FizzBuzz'); // 30 divisible by 15
});

/* 
Tests for the function fizzBuzz2() :
Testing the return value of a given integer param  'number'
*/

test('1 is returned when number = 1', () => {
  expect(fizzBuzz(1)).toEqual(1); // 1 not divisible by 3 or 5 or 15 and don't contain 3 or 5;
});

test('Fizz is returned when number = 9', () => {
  expect(fizzBuzz(9)).toEqual('Fizz'); // 9 divisible by 3
});
test('Fizz is returned when number = 38 ', () => {
  expect(contains(38, 3)).toEqual(true);
  expect(fizzBuzz2(38)).toEqual('Fizz'); // not divisible by 3 but contains 3
});

test('Buzz is returned when number = 25', () => {
  expect(fizzBuzz(25)).toEqual('Buzz'); // 25 divisible by 5
});

test('Buzz is returned when number = 58', () => {
  expect(contains(58, 5)).toEqual(true);
  expect(fizzBuzz2(58)).toEqual('Buzz'); // not divisible by 5 but contains 5 
});

test('FizzBuzz is returned when number = 30', () => {
  expect(fizzBuzz2(30)).toEqual('FizzBuzz'); // 30 divisible by 15
});

