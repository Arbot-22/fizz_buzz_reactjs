const contains = function (number, digit) {
    while (number !== 0) { // stop once all digits are cut off
        if (number % 10 === digit) { // check if the last digit matches
            return true;
        }
        number = Math.floor(number / 10); // cut off the last digit
    }
    return false;
}

export default contains;

// Hint from https://stackoverflow.com/questions/55930424/check-if-integer-contains-digit-javascript