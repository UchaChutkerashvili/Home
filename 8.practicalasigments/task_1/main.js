function expo(number, exponent, callback) {
  if (exponent === 0) {
    return 1;
  } else {
    return number * powerOfNumber(number, exponent - 1, callback);
  }
}
function callbackFunction(result) {
  console.log("The power of the number is: " + result);
}

const number = 5;
const exponent = 3;
const result = expo(number, exponent, callbackFunction);
