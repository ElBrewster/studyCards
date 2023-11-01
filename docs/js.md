JavaScript is the langauge, JQuery is JavaScript.

"JavaScript is the best dynamic language" -Ryan Dahl

JavaScript is a "multi-paradigm language"

explain the runtime concept event loop
[stack, heap, queue, etc.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop) It is never blocking
(is this technically a node thing? or both?)

what is the difference/some differences between commonjs syntax and es module syntax?
(include module.exports and require vs import/export)

what is the syntax for a ternary conditional expression?
`condition ? exprIfTrue : exprIfFalse`

## Words

- closure
  In JavaScript, functions have a reference to all variables declared in the same scope as well as any outer scopes. These scopes are known as the functions "lexical environment". The combination of the function and its environment is known as a "closure".
  A closure allows for true encapsulation.
  A class is more efficient because storing a reference to a "prototype object" takes up less space than all the copying of "methods"
- encapsulation

- "prefix" and "postfix"
- "strict equality/inequality operators" === !==

### expect function

- within the context of the EXPECT function, a restricted form of method chaining enables developers to seamlessly use methods in a single line:

```js
expect(5).toBe(5); // Returns true or throws an error
expect(5).notToBe(5); // Returns true or throws an error
```

- toBe() and notToBe() do not return the original object. Instead they return either true or throw an error. As such, the EXPECT function provides a limited form of method chaining

### Error Handling

Error handling in JavaScript is primarily accomplished through the use of THROW statements and TRY...CATCH blocks.

#### throw statement

- the THROW statement allows you to create custom error messages, which can be very useful for debugging your code.
- The throw statement throws a user-defined exception. Execution of the current function will stop, and control will be passed to the first CATCH block in the call stack. If there's no CATCH block, the program will terminate.
- the throw statement is valid in all contexts where statements can be used. Its execution generates an exception that penetrates through the call stack. (see error bubbling and handling)
- the throw keyword can be follwed by any kind of expression, like `throw error;` (throws previously defined value) or `throw new Error("Required");` (throws a new Error object)
- in practice, the exception you throw should ALWAYS be an Error object or an instance of an Error subclass, such as RangeError. Code that catches the error may expect certain properties such as "message". Web APIs typically throw DOMException instances, which inherit from Error.prototype

##### throwing a string

```js
function checkName(name) {
  if (name === "") {
    throw "Name can't be empty!";
  }
  return name;
}

try {
  console.log(checkName(""));
} catch (error) {
  console.error(error); // "Name can't be empty!"
}
```

##### throwing an Error instance:

- more common, more recommended approach is to throw an ERROR INSTANCE.
- this allows additional metadata like a stack trace to be included with the error, aiding in debugging

```js
function divide(numerator, denominator) {
  if (denominatr === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return numerator / denominator;
}

try {
  console.log(divide(5, 0));
} catch (error) {
  console.error(error.message); // "Cannot divide by zero!"
}
```

##### throwing an aggregated Error:

- throwing mutliple erros at once
- very useful when dealing with Promises
- JavaScript has a built-in `AggregateError` object that can be used in these scenarios
- `AggregateError` object takes an iterable of error objects and an optional message as parameters:

```js
let error1 = new Error("First Error");
let error2 = new Error("Second Error");

try {
  throw new AggregateError([error1, error2], "Two errors occurred.");
} catch (error) {
  if (error instanceof AggregateError) {
    console.error(error.message); // "Two errors occurred."
    for (let e of error.errors) {
      console.error(e.message); // logs "First Error" then "Second Error"
    }
  }
}
```

## this keyword

## JavaScript Objects and Limited Method Chaining

JavaScript objects serve as vital constructs that group related data and
functions together. They can hold various data types, including functions, which are considered methods of the object when they reside within it.

- in the example of using an EXPECT function, methods within it can be invoked sequentially in a chain-like manner, but this represents a restricted form of method chaining as they do not return the original object for further chaining, which is a key characteristic of method chaining in JavaScript programming

## Full Method Chaining

- FULL METHOD CHAINING is a common pattern in JavaScript that permits multiple methods to be invoked in a single statement.
- this pattern is implemented when each method returns an object, which could be the original object (for mutable objects) or a new object (for immutable objects)
- full method chaining enhances readability and conciseness of the code and is a preferred pattern in many JavaScript libraries

```js
let arr = [5, 2, 8, 1];
let result = arr.sort().reverse().join("-");
console.log(result); //"8-5-2-1"
```

- each^ of these methods returns an array, allowing the next method to be directly invoked on the result

## Leet Code

### 30 days JavaScript

#### DAY 3

- given function expression, or by constructing an additional ES6 class
  Implementation 1:
- expect function acts as a FACTORY FUNCTION, creating an object with 2 methods:

```js
var expect = function (val) {
  return {
    toBe: (val2) => {
      if (val !== val2) throw new Error("Not Equal");
      return true;
    },
    notToBe: (val2) => {
      if (val === val2) throw new Error("Equal");
      return true;
    },
  };
};
```

```ts
type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

const expect = (val: any): ToBeOrNotToBe => {
  return {
    toBe: (val2: any): boolean => {
      if (val !== val2) throw new Error("Not Equal");
      return true;
    },
    notToBe: (val2: any): boolean => {
      if (val === val2) throw new Error("Equal");
      return true;
    },
  };
};
```

Implementation 2 Using ES6 Classes

```js
class Expect {
  constructor(val) {
    this.val = val;
  }

  toBe(val2) {
    if (this.val !== val2) {
      throw new Error("Not Equal");
    }
    return true;
  }

  notToBe(val2) {
    if (this.val === val2) {
      throw new Error("Equal");
    }
    return true;
  }
}

function expect(val) {
  return new Expect(val);
}
```

```ts
class Expect<T> {
  private val: T;

  constructor(val: T) {
    this.val = val;
  }

  toBe(val2: T): boolean {
    if (this.val !== val2) {
      throw new Error("Not Equal");
    }
    return true;
  }

  notToBe(val2: T): boolean {
    if (this.val === val2) {
      throw new Error("Equal");
    }
    return true;
  }
}

function expect<T>(val: T): Expect<T> {
  return new Expect(val);
}
```

INTERVIEW TIPS:
"What does it mean when functions return objects or other functions in JavaScript?

When a function returns an object or another function, it's making use of higher-order functions and factory functions. Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them. Factory functions, on the other hand, are functions that return object instances. This concept is crucial in functional programming and provides a way to encapsulate and reuse code.

- How does method chaining work in JavaScript, and when would it be beneficial to use?
  Method chaining is a common pattern in JavaScript where multiple methods are called in a single statement. This is possible when each method returns an object, which may be the original object (for mutable objects) or a new object (for immutable objects). Method chaining makes the code more readable and concise and is especially beneficial when performing multiple transformations or operations on an object.

- What is the difference between == and === in JavaScript?
  The == operator is the abstract equality operator and will attempt to perform type coercion if the types of the two variables being compared are different. On the other hand, the === operator, known as the strict equality operator, does not perform type coercion, and it will only return true if both the value and the type of the two variables are the same.

- How would you handle errors in JavaScript functions??
  Errors in JavaScript functions can be handled using try...catch...finally blocks. The try block contains the code that may potentially throw an error, the catch block is executed if an error occurs in the try block, and the finally block is executed after the try and catch blocks, regardless of the outcome. Another way to handle errors is by using error-first callbacks, which is a common pattern in Node.js where the first argument of the callback function is reserved for an error object.

- Why would we want to throw an error instead of just returning false in the toBe and notToBe methods?
  Throwing an error provides more information about what went wrong and allows you to catch the error at a higher level in your code with a try...catch statement. In contrast, simply returning false would only inform you that the values were not equal, without giving any further context or information."

### Complexity Analysis

- for DAY 3 on Errors & returning js Objects:

Time complexity: `this.nameandI′m`, the function only creates an object with two methods and does not perform any iterative or recursive operations.

Space complexity: O(1), the function always creates an object with exactly two methods, regardless of the size or complexity of the input value. Therefore, the amount of memory required by the function does not scale with the input size, resulting in constant space complexity.
