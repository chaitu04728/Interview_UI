/*

Currying :: 

is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions,
each taking a single argument


Normal function: f(a, b, c)
Curried function: f(a)(b)(c)

// A regular function
function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3)); // Output: 6

// The curried version of 'add'
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// How to use the curried function
console.log(curriedAdd(1)(2)(3)); // Output: 6

*/