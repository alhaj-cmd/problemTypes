"use strict";
// problem 1
/* Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.*/
function filterEvenNumbers(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}
// Example usage
const result = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(result);
