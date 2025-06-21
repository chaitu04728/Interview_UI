/*

FOR :: 

PART 1: Starting Point
PART 2: Stopping Condition
PART 3: What to do after each step

PART 4: What to do in each step (inside {})



Reverse an Array Without Using :: 

const arrayOriginal = [1,2,3,4,5,6]

const reverse = [];

for(let i=arrayOriginal.length-1;i>=0;i--){
    reverse.push(arrayOriginal[i])
}

console.log(reverse); // [6, 5, 4, 3, 2, 1]

Remove Duplicates From an Array ::

const duplicatedArray = [1,1,2,3,4,5,6,3,4,5,5]
const notDuplicate = [];

for(let i =0;i<duplicatedArray.length;i++){
    if(!notDuplicate.includes(duplicatedArray[i])){
        notDuplicate.push(duplicatedArray[i])
    }
}
console.log(notDuplicate); // [1, 2, 3, 4, 5, 6]

Print All Even Numbers in an Array ::

const numbers = [1,2,4,3,5,6,7,8,9,10]

const evenNum =[];

for(let i=0;i<numbers.length;i++){
    if(numbers[i] % 2 === 0){
        evenNum.push(numbers[i])
    }
}

console.log(evenNum) // [2, 4, 6, 8, 10]

Find the Maximum Value ::

const maxArray =[111,22,333,44,55]

let max = maxArray[0];

for(let i=1;i<maxArray.length;i++){
    if(maxArray[i] > max){
      max = maxArray[i];
    }
}

console.log(max) // 333

Count Occurrences of a Target Number ::

const occArray =[1, 2, 3, 2, 4, 2];
const target = 2;
let count = 0;

for(let i=0;i<occArray.length;i++){
  if(occArray[i] === target){
    count++ ;
  }
}

console.log(count)

---------------------------------------------------------------------

Find the Index of a Target Element else return -1 ::

const array = [1,2,34,45,67]

const element = 349;

let index = -1;

for (let i = 0; i < array.length; i++) {
  if (array[i] === element) {
    index = i;
    break;
  }
}

console.log(index); // -1


Check if an Array Contains a Value ::

const array = [3, 6, 9, 12]

const target =6;

let found = false;

for(let i=0;i<array.length;i++){
  if(array[i] === target){
    found = true;
    break;
  }
}

console.log(found);


Count Odd and Even Numbers ::

const array = [1, 2, 3, 4, 5, 6];
let even = 0
let odd = 0

for(let i=0;i<array.length;i++){
  if(array[i] %2 === 0){
    even++
  }
  else{
    odd++
  }
}

console.log('even:',even);
console.log('odd:',odd);


Create a New Array with Squares of Each Number ::

const number = [1,2,3,4,5,6]
const square = []

for (i=0;i<number.length;i++){
  square.push(number[i]*number[i])
}

console.log(square) // [1, 4, 9, 16, 25, 36]

Sum of All Positive Numbers ::

const array = [-1, 2, -3, 4, -5, 6,-6,5,6,7,-20];
let sum =0

for(i=0;i<array.length;i++){
  if(array[i]>0 && array[i] % 2 === 0){
    sum = sum + array[i]
  }
}

console.log(sum) // 18

-----------------------------------------------------------

Check for Duplicates Using Nested Loops ::

const array = [1,2,34,45,67]
let flag = false;

for (let i=0;i<array.length;i++){
  for (let j = i+1; j < array.length; j++) {
        if(array[i] === array[j]){
          flag = true;
          break
        }
  }
}

console.log(flag)  // false


// Find Duplicate Elements and Print Them Once

const array = [1, 2, 2, 3, 3, 3, 4,6,5,6,7,8,9,9,6]
const duplicates = []

for (let i=0;i<array.length;i++){
  for (let j = i+1; j < array.length; j++) {
        if(array[i] === array[j]){
          if(!duplicates.includes(array[i])){  
          duplicates.push(array[j])
          }
          break;
        }
  }
}

console.log(duplicates);  // [2, 3, 6, 9]

Count How Many Times Each Element Appears ::

const array = [1, 2, 2, 3, 3, 3, 4, 6, 5, 6, 7, 8, 9, 9, 6];

for (let i = 0; i < array.length; i++) {
  let count = 1;
  let checked = false;
  for (let j = 0; j < i; j++) {
    if (array[i] === array[j]) {
      checked = true;
      break;
    }
  }
  if (checked) continue;
  for (let k = i + 1; k < array.length; k++) {
    if (array[i] === array[k]) {
      count++;
    }
  }
   if (count > 1) {
    console.log(array[i], "appears", count, "times");
 }
}


*/