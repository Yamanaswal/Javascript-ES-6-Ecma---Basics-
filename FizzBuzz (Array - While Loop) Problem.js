var output = [];
var count = 1;

function fizzBuzz() {

    while (count <= 100) {

        //code here
        if (count % 3 === 0 && count % 5 === 0) {
            output.push('Fizz-Buzz');
        } else if (count % 3 === 0) {
            output.push('Fizz');
        } else if (count % 5 === 0) {
            output.push('Buzz');
        } else {
            output.push(count);
        }

        //increase its value.
        count++;
    }

    //print the array.
    console.log(output);
}
