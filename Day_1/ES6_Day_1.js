// 1) Swap the values of two variables using destructuring 
let a = 5;
let b = 10;

// Swap values using destructuring
[b, a] = [a, b];

console.log(a); // Output: 10
console.log(b); // Output: 5


// 2) Using rest parameter and spread operator return max value from any array note: array length is not fixed return min and max value and display each of them separately after function call 
function findMinMax(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}

const numbers = [1, 5, 3, 8, 2];
const [min, max] = findMinMax(...numbers);

console.log(`Minimum value: ${min}`); // Output: Minimum value: 1
console.log(`Maximum value: ${max}`); // Output: Maximum value: 8

// 3) Study new array api methods then create the following methods and apply it on this array
// var fruits = ["apple", "strawberry", "banana", "orange", "mango"] 

const fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// a. Test that every element in the given array is a string
const isEveryElementString = fruits.every((fruit) => typeof fruit === "string");
console.log(`Every element in the array is a string: ${isEveryElementString}`);

// b. Test that some of array elements starts with "a"
const isSomeElementStartsWithA = fruits.some((fruit) => fruit.startsWith("a"));
console.log(`Some of the elements start with 'a': ${isSomeElementStartsWithA}`);

// c. Generate new array filtered from the given array with only elements that starts with "b" or "s"
const filteredFruits = fruits.filter((fruit) => fruit.startsWith("b") || fruit.startsWith("s"));
console.log(`Filtered array: ${filteredFruits}`);




