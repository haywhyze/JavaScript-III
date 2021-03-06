/* The four principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding occurs when a function containing the `this` keyword was invoked on the global
 *    object without any binding. With this, the `this` keyword refers to the global object which is 
 *    window object in this case of the DOM.
 * 2. Implicit binding is when the function containing the `this` keyword was invoked on the containing
 *    object using the dot notation. The `this` keyword refers back to the object.
 * 3. New Binding occurs when the `new` keyword is used to instatiate a new instance of the object containing the 
 *    `this` keyword. In this case, the `this` keyword refers to the newly created object.
 * 4. Explicit Binding occurs when a function is specifically binded to an object using .apply(), .call() or .bind()
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

const yusuf = {
  name: 'Yusuf Ayo',
  age: 25,
  greet() {
    console.log(`Hello world, I am ${this.name} and I am ${this.age} years old`);
  }
}

const helloWorld = function() {
  console.log('hello World this is ', this);
}

helloWorld(); // this refers to the window object or undefined if you 'use strict'

// Principle 2

// code example for Implicit Binding

yusuf.greet() // this refers back to yusuf.

// Principle 3

// code example for New Binding

function Cat(name, color) {
  this.name = name;
  this.color = color;
  console.log(this);
}

Cat.prototype.meows = function() {
  console.log(this);
  console.log('meow meow');
}

const tristan = new Cat('Tristan', 'blue'); // this refers to the newly created object.
tristan.meows();

// Principle 4

// code example for Explicit Binding


const extractedMeows = tristan.meows
extractedMeows.call(tristan);