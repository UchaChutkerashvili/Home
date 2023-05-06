function myFunction(a, b) {
    if (a === b) {
        return "ტოლია";
    } else {
        return "არ არის ტოლი";
    }

};

function convertFahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit === 'number') {
        return (5 / 9 * (celcius - 32));
    } else {
        return 'false';
    }

};

function Function(a, b, operation) {
    if (typeof a === 'number' & typeof b === 'number' & operation == '+' ) {
    return a+b
    } else if (typeof a === 'number' & typeof b === 'number' & operation == '-') {
    return a-b
    } else if (typeof a === 'number' & typeof b === 'number' & operation == '*') {
    return a*b
    } else if (typeof a === 'number' & typeof b === 'number' & operation == '/') {
    return a/b
    } else if (typeof a !== 'number' || typeof b !== 'number' || operation !== '+') {
    return false
    }
  }