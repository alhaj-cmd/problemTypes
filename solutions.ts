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
// input reverseString 
const resultOne = reverseString('typescript');
console.log(resultOne);

/* ---  problem 3 : Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number. */

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}

// Sample Input 1
const result1 = (checkType("Hello"));

// Sample Input 2
const result2 = (checkType(42));
console.log(result1,result2);


/* --- problem 4: Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object. */


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Sample Input
const user = {
  id: 1,
  name: "Md Alhaj Sarker",
  age: 27,
};

const userResult = (getProperty(user, "name"));
console.log(userResult);


/* --- problem 5: Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true. */


interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

// Sample Input
const myBook = {
  title: "TypeScript Guide",
  author: "Mezba vai",
  publishedYear: 2026,
};

console.log(toggleReadStatus(myBook));


/* --- problem 6: Create a class Person with a name and age. Then, create a subclass Student that adds a grade property. Include a method getDetails in the Student class that returns a string with the student's name, age, and grade. --- */
 

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Sample Input
const student = new Student("Alhaj", 27, "A");

console.log(student.getDetails());


/* --- problem 7: Create a function getIntersection that takes two arrays of numbers and returns a new array containing only the elements that are present in both arrays. */

function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) => arr2.includes(num));
}

// Sample Input
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const resultTotalArrays= (getIntersection(arr1, arr2));
console.log(resultTotalArrays);