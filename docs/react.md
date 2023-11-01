# useState

`useState` is a React Hook that lets you add a state variable to your component.
ex: `const [state, setState] = useState(initialState);`
ONLY call `useState` at the top level of your component (no loops or conditions)
follow the naming convention `[something, setSomething]`
"initialState" the value you want your initial state to be. _this value is ignored after the initial render_ _it can be any value, including a function_
You can pass an "initializer function" as the "initialState". It should be pure, should take no arguments, and should return a value of any type. To avoid running your function on every render, write it like this:

```js
function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);
}
```

and DON'T call it as initialState, as it is costly and unnecessary
(remember that "initialState" is the value you want on the FIRST render):

```js
function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos());
}
```

`useState` returns an array with exactly two values: the current state (on first render this matches the "initialState"), and the set function that lets you update the state to a different value and _trigger a re-render_.

## the set function returned by useState

- lets you update the state to a different value, the "next state", and triggers a re-render. You can pass the next/new state directly, or with a function that calculates it based on the previous state:

```js
const [name, setName] = useState("Edward");
```

```js
function handleClick() {
  setName("Taylor");
  setAge((a) => a + 1);
}
```

- set functions have no return value
- set function only updates the state variable for the **next** render. If you read the state variable after calling the set function, you will get the old value that was on the screen before your call
- if the new value is identical to the current state, React will skip re-rendering the component and its children.

## nextState parameter in setState function

"nextState" can be any a value of any type, but for functions:

- it will be treated as an "updater function"
- it must be pure,
- should take the pending state as its only argument,
- and return the next state
  _React will put your updater function in a queue and re-render your component_
  _During the next render, React will calculate the next state by applying all of the queued updaters to the previous state._
  _if you are updating a state multiple times before the next re-render is triggered, you probably want to pass an "updater function"_
  instead of:

```js
function handleClick() {
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
} //returns "43"
```

```js
function handleClick() {
  setAge((a) => a + 1); // setAge(42 => 43)
  setAge((a) => a + 1); // setAge(43 => 44)
  setAge((a) => a + 1); // setAge(44 => 45)
} //returns "45"
```

convention: name the pending state argument for the first letter of the state variable name, like "a" for "age", or use the word previous, like "prevAge": `prevAge => prevAge + 1`
_it's reasonable to always write an updater if the state you're setting is calculated from the previous state_
_if your state is calculated from the previous state of some **other** state variable, you might want to combine them into one object and use a reducer `useReducer`_

## how React handles state

- React batches state updates: it updates the screen _after all the event handlers have run_ and _have called their set functions_
- if you ever need to force React to update the screen earlier, for example to access the DOM, you can use `flushSync`. (this is a last resort)
- you can put objects and arrays into state. In React, state is considered read-only, so you should _replace_ it rather than _mutate_ your existing objects. Replace the whole object by creating a new one. If you "mutate" existing state, React will not re-render your component. Providing a new copy will do this however.
  instead of `form.firstName = "Taylor";` do `setForm({...form, firstName: "Taylor"});`
- treat React state as immutable!
- lean on copying methods like the spread syntax [...], .map() and .filter()

## storing info from previous renders

- usually you will update state with event handlers
- rarely, you might want to adjust state in response to rendering, perhaps you want to change a state variable when a prop changes

## resetting state with a key

you'll often encounter the key attribute when rendering lists. However it also serves another purpose.
You can reset a component's state by passing a different key to a component.

# useReducer

Call `useReducer` at the top level of your component to manage its state with a "reducer".

```js
const [state, dispatch] = useReducer(reducer, initialArg, init?);
```

"reducer":
The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
"initialArg":
The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.
optional "init":
The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).

`useReducer` returns an array with exactly two items: the crrent state of this state variable, initially set to the initial state, and the dispatch function that lets you change it in response to interaction.

`useReducer` is very similar to `useState`, but it lets you move the state logic from event handlers into a single function outside of your component.

a reducer is a pure function that doesn't depend on your component. You can export and test it separately in isolation. For complex state update logic it can be useful to assert that your reducer returns a particular state for a particular initial state and action.

tip: you can use `useState` and `useReducer` in the same component if you choose to do so.

## dispatch function

To update what's on the screen, call "disaptch" with an object representing what the user did, called an "action".

The dispatch function returned by `useReducer` lets you update the state to a different value and trigger a rerender. Pass the action as the only argument to the disaptch func.
React will set the next state to the result of calling the reducer function you’ve provided with the current state and the action you’ve passed to dispatch.

parameters:
the "action" performed by the user. It can be a value of any type. By convention, an "action" is usually an _object with a type property_ identifying it and, optionally, other properties with additional information.

dispatch functions have no return

the "dispatch" function only updates the state variable for the next render.

## reducer function

```js
function reducer(state, action) {
  // ...
}
```

by convention, we write a reducer function with a switch statement. For each "case" in teh "switch", calculate and return some next state. Make sure that every "case" branch copies all of the existing fields when returning the new state.

```js
function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}
```

"actions can have any shape. By convention, it's common to pass objects with a "type" property identifying the action."
Like with `useState` hook, state is read-only. Don't modify objects or arrays in state, but return new objects from the reducer instead.

"At a certain point, it is farcicle to say that React is not a framework" - Rich Harris (creator of Svelte)
