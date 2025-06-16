/*

IIFE :: Immediately Invoked Function Expression

Is defined as an expression (not a declaration).
Executes as soon as it's defined

One-Time Execution: They run once and then their context (variables, etc.) can be garbage collected if nothing else references them

(function() {
  // Your code here
})(); // The parentheses here immediately invoke the function


(function() {
  const message = "Hello from inside the IIFE!";
  console.log(message);
})(); // The function is called right after it's defined

// Try to access 'message' here:
// console.log(message); // This line would throw a ReferenceError: message is not defined

*/