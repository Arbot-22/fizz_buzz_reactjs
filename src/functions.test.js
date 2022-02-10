import fizzBuzz from './functions/fizzBuzz';
import fizzBuzz2 from './functions/fizzBuzz2';
import contains from './functions/util';

/* 
Tests for the function fizzBuzz() :
Testing the return value of a given integer param  'number'
*/

test('1 is returned when number = 1', () => {
  expect(fizzBuzz(1)).toEqual(1); // 1 divisible by 3
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

