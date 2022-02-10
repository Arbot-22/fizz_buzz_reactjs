const fizzBuzz = (number) => {
  
  if (number % 15 == 0) {
    return 'FizzBuzz'; //if the number is divisible by 5 and 3 (by 15) FizzBuzz is returned 
  } else if (number % 3 == 0) {
    return 'Fizz'; //if the number is divisible by 3 Fizz is returned
  } else if (number % 5 == 0) {
    return 'Buzz';  //if the number is divisible by 5 Buzz is returned
  } else {
    return number; //if the number is not divisible by 15 or 5 or by 3 his value is returned
  }
};


export default fizzBuzz;

