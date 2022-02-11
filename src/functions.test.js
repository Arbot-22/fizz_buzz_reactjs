import fizzBuzz from './functions/fizzBuzz';
import fizzBuzz2 from './functions/fizzBuzz2';


/* 
*Tests for the function fizzBuzz() :
*Testing the return value of a given integer param 'number'
*/
test('1 is returned when number = 1', () => {
  //Given 
  var number = 1;

  // When 
  var result = fizzBuzz(number);

  //Then

  var expected = 1

  expect(expected).toEqual(result); // 1 not divisible by 3 or 5 or 15
});

test('Fizz is returned when number = 9', () => {
  //Given 
  var number = 9;

  // When 
  var result = fizzBuzz(number);

  //Then

  var expected = "Fizz"
  expect(expected).toEqual(result); // 9 divisible by 3
});

test('Buzz is returned when number = 25', () => {
  //Given 
  var number = 25;

  // When 
  var result = fizzBuzz(number);

  //Then

  var expected = "Buzz"
  expect(expected).toEqual(result); // 25 divisible by 5
});

test('FizzBuzz is returned when number = 30', () => {
  //Given 
  var number = 30;

  // When 
  var result = fizzBuzz(number);

  //Then

  var expected = "FizzBuzz"
  expect(expected).toEqual(result); // 30 divisible by 15
});


/* 
*Tests for the function fizzBuzz2() :
*Testing the return value of a given integer param  'number'   
*/

test('1 is returned when number = 1', () => {
  //Given 
  var number = 1;

  // When 
  var result = fizzBuzz2(number);

  //Then

  var expected = 1

  expect(expected).toEqual(result);; // 1 not divisible by 3 or 5 or 15 and don't contain 3 or 5;

});

test('Fizz is returned when number = 9', () => {
  //Given 
  var number = 9;

  // When 
  var result = fizzBuzz2(number);

  //Then

  var expected = "Fizz"

  expect(expected).toEqual(result); // 9 divisible by 3
});
test('Fizz is returned when number = 38 ', () => {
  //Given 
  var number = 38;

  // When 
  var result = fizzBuzz2(number);

  //Then

  var expected = "Fizz"

  expect(expected).toEqual(result); // not divisible by 3 but contains 3
});

test('Buzz is returned when number = 25', () => {
  //Given 
  var number = 25;

  // When 
  var result = fizzBuzz2(number);

  //Then

  var expected = "Buzz"

  expect(expected).toEqual(result); // 25 divisible by 5
});

test('Buzz is returned when number = 58', () => {
  //Given 
  var number = 58;

  // When 
  var result = fizzBuzz2(number);

  //Then

  var expected = "Buzz"

  expect(expected).toEqual(result); // not divisible by 5 but contains 5 
});

test('FizzBuzz is returned when number = 30', () => {
  //Given 
  var number = 30;

  // When 
  var result = fizzBuzz2(number);

  //Then

  var expected = "FizzBuzz"

  expect(expected).toEqual(result); // 30 divisible by 15
});

