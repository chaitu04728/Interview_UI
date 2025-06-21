/*

Push : adds elements end of the array

let fruits = ['mango','banana']
fruits.push('apple')   
console.log(fruits)   // ['mango','banana','apple']

Pop : remove the last element

let fruits = ['mango','banana','apple']
fruits.pop('apple')   
console.log(fruits)   // ['mango','banana']

shift : remove the first element

let fruits = ['mango','banana','apple']
fruits.shift();  
console.log(fruits)   // ['banana','apple']

unshift : add element to the first

let fruits = ['mango','banana','apple']
fruits.unshift('avacado');  
console.log(fruits)   // ['avacado','mango','banana','apple']

map : iterate over each element in array and return new array

const arr = [1,2,3,4]
const multiplyArr = arr.map(n=>n*2);
console.log(multiplyArr);    // [2,4,6,8]


filter : filters values based on a condition and return new array 

const arr = [1,2,3,4]
const even = arr.filter(n=>n%2 === 0);
console.log(even);    // [2,4]

reduce : reduces the array into a single value

const sum = [1,2,3,4,5]
const reduceArr = sum.reduce((acc,value)=>acc+value,0)
console.log(reduceArr)   // 15

forEach : loops over each item in a array returns undefined

const shoppingList = ['Apples', 'Bread', 'Cheese', 'Eggs'];
shoppingList.forEach((item, index)=>{
  console.log(`${index + 1}. ${item}`);
});             // Output: 1. Apples, 2. Bread, 3. Cheese,4.Eggs

find : returns the first element that matches condition 

const fruits = ['apple', 'banana', 'grape', 'kiwi'];
const found = fruits.find(fruit => fruit.startsWith('b'));
console.log(found); // "banana"

findIndex : returns the indexof first element that matches

const fruits = ['apple', 'banana', 'grape', 'kiwi'];
const index = fruits.findIndex(fruit => fruit.length === 5);
console.log(index); //  0 (because "apple" has 5 letters)

includes : checks if the array includes the specific value returns true or false

const fruits = ['apple', 'banana', 'grape', 'kiwi'];
console.log(fruits.includes('grape')); // true
console.log(fruits.includes('mango')); // false

indexOf : returns the first index of a specific item. If not found, returns -1

const fruits = ['apple', 'banana', 'grape', 'kiwi'];
console.log(fruits.indexOf('kiwi')); // 3
console.log(fruits.indexOf('mango')); // -1

sort : sorts the array

const numbers = [4, 2, 10, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // 👉 [1, 2, 4, 10]

slice : returns a portion of array

const fruits = ['apple', 'banana', 'cherry', 'date'];
const sliced = fruits.slice(1, 3);
console.log(sliced); // ['banana', 'cherry']

splice : add / remove elements

const items = ['a', 'b', 'c', 'd'];
items.splice(1, 2); 
console.log(items); // ['a', 'd']

reverse : reverse the array in place

const nums = [1, 2, 3];
nums.reverse();
console.log(nums); // [3, 2, 1]

Join : turns array intp string

const words = ['Hello', 'world'];
const sentence = words.join(' ');
console.log(sentence); //  "Hello world"

Flat : flatens nested array

const nested = [1, 2, [3, 4], [5, [6]]];
const flattened = nested.flat(infinity);
console.log(flattened); // [1, 2, 3, 4, 5, 6]


*/