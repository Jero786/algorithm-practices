function fibonacciNthRecursively(number, fibonacci = [0, 1], i = 2) {
    if (i > number) {
        return fibonacci[number - 1];
    } else {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        return fibonacciNthRecursively(number, fibonacci, i + 1);
    }
}

function fibonacciNth(number) {
    let numbers = [0, 1];

    for (let i = 2; i <= number; i++) {
        numbers.push(numbers[i - 1] + numbers[i - 2]);
    }

    return numbers[number - 1] ;
}

module.exports = {
    fibonacciNthRecursively,
    fibonacciNth
}