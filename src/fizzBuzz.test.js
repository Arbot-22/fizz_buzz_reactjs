import fizzBuzz from '../src/fizzBuzz';
import fizzBuzz2 from '../src/fizzBuzz2';

//Tests for fizzBuzz()
test('1 is returned when number = 1', () => {
  expect(fizzBuzz(1)).toEqual(1);
});

test('Fizz is returned when number = 9', () => {
  expect(fizzBuzz(9)).toEqual('Fizz');
});

test('Buzz is returned when number = 25', () => {
  expect(fizzBuzz(25)).toEqual('Buzz');
});
