/*

this :: Global Context,Function Context,Method Context,Arrow function


Def : It refers to the object that 'owns' the currently executing code. The value of this is not fixed.
it's determined dynamically based on how a function is called

Global Context :: 
When this is used in the global scope (outside of any function), it refers to the global object. In browsers, that's window

Eg: console.log(this)

Function Context ::

In regular function calls, this typically defaults to the global object in non-strict mode.
However, in strict mode, this will be undefined in a regular function call.

Eg: 

function showThis() {
  console.log(this);
}
showThis(); // In a browser, logs 'window' (non-strict)

'use strict';
function showThisStrict() {
  console.log(this);
}
showThisStrict(); // Logs 'undefined'

Method Context ::

When a function is called as a method of an object, this refers to the object that the method was called on

const person = {
  name: 'Alice',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet(); // Logs: "Hello, my name is Alice"
// Here, 'this' inside 'greet' refers to the 'person' object.

Arrow function :: 

Arrow functions are a special case because they do not have their own this context.
Instead, they inherit this from their enclosing lexical scope

const user = {
  name: 'Charlie',
  greetRegular: function() {
    setTimeout(function() {
      console.log(`Regular: ${this.name}`); // 'this' refers to window/global
    }, 100);
  },
  greetArrow: function() {
    setTimeout(() => {
      console.log(`Arrow: ${this.name}`); // 'this' refers to 'user'
    }, 100);
  }
};

user.greetRegular(); // After 100ms, logs: "Regular: " (name is undefined)
user.greetArrow();   // After 100ms, logs: "Arrow: Charlie"

*/