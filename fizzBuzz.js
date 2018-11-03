/* Point of this program is to print 'fizz' to the console if the # is divisible by 3,
print 'buzz' to the console if the number is divisible by 5, print 'fizzbuzz' to the 
console if divisibile by both and otherwise print the number. Only checking for numbers 
between 1 and 100*/
let counter = 1;
function printNumbers () {
    while (counter < 101) {
        if (counter % 3 === 0 && counter % 5 === 0) {
            console.log('fizBuzz');
            counter++;
        } else if (counter % 3 === 0) {
            console.log('fizz');
            counter++;
        } else if (counter % 5 === 0) {
            console.log('buzz');
            counter++;
        } else {
            console.log(counter);
            counter++;
        };
    };
}
printNumbers();