import fizzBuzz from './fizzBuzz';

test('1 is returned when number = 1', () => {
  expect(fizzBuzz(1)).toEqual(1);
});

test('2 is returned when number = 2', () => {
  expect(fizzBuzz(2)).toEqual(2);
});

test('Fizz is returned when number = 3', () => {
  expect(fizzBuzz(3)).toEqual('Fizz');
});

test('Fizz is returned when number = 9', () => {
  expect(fizzBuzz(9)).toEqual('Fizz');
});

test('Buzz is returned when number = 5', () => {
  expect(fizzBuzz(5)).toEqual('Buzz');
});

test('Buzz is returned when number = 25', () => {
  expect(fizzBuzz(25)).toEqual('Buzz');
});

test('FizzBuzz is returned when number = 15', () => {
  expect(fizzBuzz(15)).toEqual('FizzBuzz');
});

test('FizzBuzz is returned when number = 30', () => {
  expect(fizzBuzz(30)).toEqual('FizzBuzz');
});