## instanceof

The `instanceof` operator tests to see if the `prototype` property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

```javascript
const myDate = new Date();
myDate instanceof Date; //true
myDate instanceof Object; //true
myDate instanceof String; //false
```

## Array.prototype.filter()

`filter(callbackFn)`
callbackFn: a function to execute for each element in the array. It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
The function is called with the following arguments: (element, index, array)

RETURNS a shallow copy of a portion of the given array (just the elements that pass the callbackFn test)

the filter method is a COPYING METHOD
(note that the callbackFn can mutate the array, depends on what you put in there)

## Array.prototype.indexOf()

`indexOf(searchElement)` or `indexOf(searchElement, fromIndex)`
element to locate, and where to start searching
RETURNS the first index of the element in the array, or -1 if not found

## Array.prototype.sort()

sorts elements in place and returns reference to the same array, now sorted
default sort order is ascending

## String.prototype.match()

subcategory: RegExp

`match(regexp)`
the match() method retrieves the result of matching a string against a regular expression
if regexp is not a RegExp object and does not have a `Symbol.match` method, it is implicitly converted to a RegExp by using `new RegExp(regexp)`

## Math.max()

using `Array.prototype.reduce()`:
`const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);`

Q. What are Function.prototypes ?? and what the hell is 'prototype' for ???

## Array.prototype.reduce()

cool:

```JavaScript
  let freq = files.reduce((obj, file)=>{
    let ex = file.match(/\.\w+$/);
    obj[ex] ? obj[ex] += 1 : obj[ex] = 1;
    return obj;
  }, {});
```
