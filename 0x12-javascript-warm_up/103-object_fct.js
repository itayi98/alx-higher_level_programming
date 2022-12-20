#!/usr/bin/node
<<<<<<< HEAD
// new function incr that increments the interger value.

const myObject = {
	type: 'object',
=======
//  new function incr that increments the integer value.

const myObject = {
  type: 'object',
  value: 12
};
console.log(myObject);
myObject.incr = function () {
  myObject.value++;
};
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
>>>>>>> 41e6972d8728448a9dfb43a77f8e299a04a51a1d
