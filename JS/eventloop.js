/*

event loop ::

Cycle :: Synchronous Code -> Asynchronous -> Web API -> Microtasks -> Macrotask

handle asynchronous operations despite being a single-threaded language.
It's the mechanism that ensures non-blocking execution

console.log('Start'); // Synchronous

setTimeout(() => {
  console.log('Timeout callback'); // Macrotask
}, 0); // Even with 0ms, it's async

Promise.resolve().then(() => {
  console.log('Promise callback'); // Microtask
});

console.log('End'); // Synchronous


o/p ::

Start
End
Promise callback
Timeout callback

*/