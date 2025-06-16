/*

Binding: Call , Apply, Bind

call() and apply(): "These methods execute the function immediately, allowing you to pass this as the first argument.
The difference is how you pass additional arguments (call takes them individually, apply takes an array).

const anotherPerson = { name: 'Bob' };
function sayName() {
  console.log(this.name);
}

sayName.call(anotherPerson); // Logs: "Bob"

const person1 = {
  firstName: "Alice",
  lastName: "Smith",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

const person2 = {
  firstName: "Bob",
  lastName: "Johnson"
};

// Calling person1's fullName method, but setting 'this' to person2
const person2FullName = person1.fullName.apply(person2);

console.log("Person 1 Full Name:", person1.fullName());  // Output: Person 1 Full Name: Alice Smith
console.log("Person 2 Full Name (using apply):", person2FullName); // Output: Person 2 Full Name (using apply): Bob Johnson


bind(): "Unlike call and apply, bind() returns a new function with this permanently bound to a specific value.
It doesn't execute the function immediately".

const car = {
  brand: 'Toyota',
  getBrand: function() {
    console.log(this.brand);
  }
};

const boundGetCarBrand = car.getBrand.bind(car);
boundGetCarBrand(); // Logs: "Toyota"

*/