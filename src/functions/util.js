const contains = function (number, digit) {
    if (number < 0) { // make sure negatives are dealt with properly, alternatively replace this if statement with number = Math.abs(number)
        number *= -1;
    }
    if (number == digit) { // this is to deal with the number=0, digit=0 edge case
        return true;
    }
    while (number != 0) { // stop once all digits are cut off
        if (number % 10 == digit) { // check if the last digit matches
            return true;
        }
        number = Math.floor(number / 10); // cut off the last digit
    }
    return false;
}

export default contains;

// Hint from https://stackoverflow.com/questions/55930424/check-if-integer-contains-digit-javascript