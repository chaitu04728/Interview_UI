/*

closure ::

allows an inner function to access to variables from its outer (enclosing) scope, even after the outer function has completed execution.

function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() { // This is the closure
    console.log(outerVariable);
  }

  return innerFunction; // Return the inner function
}

const myClosure = outerFunction(); // outerFunction executes and returns innerFunction
myClosure(); // Output: I am from the outer function
             // Even though outerFunction has finished, myClosure still remembers outerVariable

*/