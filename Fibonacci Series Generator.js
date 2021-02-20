//fib series -> 0 1 1 2 3 5 8 13 21 34 55 89 

var output = [];

function fibonacciGenerator(n) {

    var c;

    if (n <= 0) {
        console.log('negative value');
        return [];
    }

    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        output = [0, 1];
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 1] + output[output.length - 2]);
        }
        //return array
        return output;
    }

}

console.log(fibonacciGenerator(10));
