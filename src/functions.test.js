import fizzBuzz from './functions/fizzBuzz';
import fizzBuzz2 from './functions/fizzBuzz2';
import contains from './functions/util';

test('1 is returned when number = 1', () => {
  expect(fizzBuzz(1)).toEqual(1);
});

test('Fizz is returned when number = 9', () => {
  expect(fizzBuzz(9)).toEqual('Fizz');
});

test('Buzz is returned when number = 25', () => {
  expect(fizzBuzz(25)).toEqual('Buzz');
});

test('FizzBuzz is returned when number = 30', () => {
  expect(fizzBuzz(30)).toEqual('FizzBuzz');
});