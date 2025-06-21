/*

JavaScript is dynamically typed, TypeScript is statically typed.

TypeScript helps a lot in building scalable, maintainable applications by adding static typing to JavaScript.
It catches errors at compile time, so I don’t have to wait until runtime to find bugs.

let x: any = 5;
x = "hello"; // No error


let y: unknown = "test";
if (typeof y === "string") {
  console.log(y.toUpperCase());
}


let n: null = null;
let u: undefined = undefined;


The as keyword is used to tell the compiler the expected type of a variable when you know better than it.

Union and intersection

let value: string | number;
value = "hello";
value = 42;


interface A { name: string; }
interface B { age: number; }

type Person = A & B; // Must have both name and age


import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function getUser(userId: number): Promise<User> {
  const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return response.data;
}

interface User {
  name: string;
  age: number;
  email?: string; // optional property
}

const user1: User = {
  name: "Chaitanya",
  age: 24,
};


*/