/*  ---- problem 1: Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.*/

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter((num) => num % 2 === 0);
}
// Even Numbers usage
const result = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(result);


/* -------- problem 2 : Write a function reverseString that takes a string as input and returns the reversed version of that string. ----- */


function reverseString(text: string) {
    return text.split("").reverse().join("");
}
const resultOne = reverseString('typescript');
console.log(resultOne);

