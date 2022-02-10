const fizzBuzz = (number) => {
  //if the value is divisible by 5 and 3 (by 15) FizzBuzz is printed
  if (number % 15 == 0) {
    return 'FizzBuzz';
    //if the value is divisible by 3 Fizz is printed
  } else if (number % 3 == 0) {
    return 'Fizz';
    //if the value is divisible by 5 Buzz is printed
  } else if (number % 5 == 0) {
    return 'Buzz';
    //if the value is not divisible by 15 or 5 or by 3 the value is printed
  } else {
    return number;
  }
};

export default fizzBuzz;

