/*

// Reverse a String

const string = 'hello'
let reverse = ''

for (let i = string.length - 1; i >=0; i--) {
    reverse = reverse + string[i]
}
console.log(reverse)  // hello

// Count vowels/consonants

const string = 'chaitanya kumar batchu'
const vowles = 'aeiou'
let count = 0

for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowles.length; j++) {
        if (string[i] === vowles[j]) {
            count++
            break
        }
    }
}
console.log(count)  // 8

// Check for palindrome

const string = 'mam'
let reverse = ''

for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i]
}

if (reverse === string) {
    console.log('Given string is palindrome')
} else {
    console.log('Not a Palindrome')
}

// Remove Duplicates

const string = 'banana'
let string1 = ''

for (let i = 0; i < string.length; i++) {
    if (!string1.includes(string[i])) {
        string1 += string[i]
    }
}

console.log(string1) // ban

// count of char

const string = 'banana'
let freq = {}

for (let i = 0; i < string.length; i++) {
    const char = string[i]

    if (freq[char]) {
        freq[char] += 1
    } else {
        freq[char] = 1
    }
}

console.log(freq); // 

// Capitalize first letter of each word

const str = 'hello world this is js';
let result = '';

for (let i = 0; i < str.length; i++) {
  if (i === 0 || str[i - 1] === ' ') {
    result += str[i].toUpperCase();
  } else {
    result += str[i];
  }
}

console.log(result); // "Hello World This Is Js"


Find first non-repeating character

const str = 'aabbcdeffg';
let found = false;

for (let i = 0; i < str.length; i++) {
  let count = 0;
  for (let j = 0; j < str.length; j++) {
    if (str[i] === str[j]) {
      count++;
    }
  }
  if (count === 1) {
    console.log('First non-repeating char:', str[i]); // c
    found = true;
    break;
  }
}

if (!found) console.log('No non-repeating character');


Check if two strings are anagrams


Replace a character in string

const str1 = 'listen';
const str2 = 'silent';
let isAnagram = true;

if (str1.length !== str2.length) {
  isAnagram = false;
} else {
  for (let i = 0; i < str1.length; i++) {
    let count1 = 0, count2 = 0;
    for (let j = 0; j < str1.length; j++) {
      if (str1[i] === str1[j]) count1++;
      if (str1[i] === str2[j]) count2++;
    }
    if (count1 !== count2) {
      isAnagram = false;
      break;
    }
  }
}

console.log(isAnagram ? 'Anagram' : 'Not anagram'); // Anagram


const str = 'banana';
let replaced = '';

for (let i = 0; i < str.length; i++) {
  if (str[i] === 'a') {
    replaced += '*';
  } else {
    replaced += str[i];
  }
}

console.log(replaced); // b*n*n*


Toggle case (upper <-> lower)

const str = 'HeLLo WoRLd';
let toggled = '';

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  if (char >= 'a' && char <= 'z') {
    toggled += char.toUpperCase();
  } else if (char >= 'A' && char <= 'Z') {
    toggled += char.toLowerCase();
  } else {
    toggled += char;
  }
}

console.log(toggled); // hEllO wOrlD




*/