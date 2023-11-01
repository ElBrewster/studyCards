# Svelte & Kit

Svelte is a tool for building web applications, a user interface framework. It allows you to build your app declaratively out of components that combine markup, styles and behaviors.
These components are compiled into small, efficient JavaScript modules that eliminate overhead traditionally associated with UI frameworks.
Svelte is a component framework, whereas SvelteKit is an app framework (or, "metaframework")
Add a `lib` directory right about `routes` in teh `src` directory.
In Svelte the lib directory is automatically mapped to a dollar sign `$lib` which means you can import from it without having to write out the full relative path in your code.
it's helpful for using reusable utilities and components that are not tied to a specific route in the application
the lib directory lets you refer to things in it without needing to type things like:
`import { user, userData } from "$lib/firebase";`

a `lib/server` will tell SvelteKit to only use this code on the server

you can put your logic in the script tag of a page, but if there's a lot you can move it to the lib folder

## components

- a reusable self-containerd block of code that encapsulates HTML, CSS, and JavaScript, written into a .svelte file
- we can put any JavaScript we want in the curly braces:
  `<h1>Hello {name.toUpperCase()}!</h1>`
- just like you can use curly braces to control text, you can use them to control element attributes:
  `<img src={src} />`
- just like in HTML, you can add a <style> tag to your component. These rules are SCOPED to the COMPONENT
- we can import our components from other files and include them in our markup
- component names are always capitalized to distinguish them from HTML elements
- {@html ...} for stuff like < > ? "blob of HTML"

## reactivity & reactive declarations

At the heart of Svelte is a powerful system ot _reactivity_ for keeping the DOM in sync with your application state - for example, in response to an event.
Svelte 'instruments' this [counter] assignment with some code that tells it the DOM will need to be updated
Svelte automatically updates the DOM when your component's state changes. Often, some parts of a component's state need to be computer from _other_ parts and recomputed whenever they change. So we have REACTIVE DECLARATIONS

```svelte
<script>
let count = 0;
$: doubled = count * 2;
</script>
```

- if a reactive statement consists entirely of an assignment to an undeclared variable, Svelte will inject a `let` declaration on your behalf
  `$: doubled = count * 2;`
- svelte interprets this Very Valid JavaScript to mean "re-run this code whenever any of the referenced values change"
  "Once you get used to it, there's no going back" (great threat hahaha)
- for this example we could have just done {count * 2} in the markup instead. Reactive values become particularly valuable when you need to reference them multiple times, or you have values that depend on *other\* values.
- Reactive declarations and statements will run after other script code and before component markup is rendered.

- along with reactive _values_ we can run arbitrary _statements_ reactively. We can easily group statements together with a block:

```svelte
  $:{
  console.log(`the count is ${count}`);
  console.log(`this will also be logged whenever count changes`)
  }
```

- you can put `$:` in front of `if` blocks:
  $: if (count >= 10) {
  alert('count is dangerously high!');
  count = 0;
  }

- Because SVELTE'S REACTIVITY IS TRIGGERED BY ASSIGNMENTS, using array methods like `push` and `splice` won't automatically cause updates.
  a workaround is to add an otherwise redundant assignment:

```svelte
function addNumber() {
    numbers.push(numbers.length + 1);
    numbers = numbers;
}
```

more idiomatic:

```svelte
function addNumber() {
    numbers = [...numbers, numbers.length + 1];
}
```

- use similar patterns to replace pop, shift, unshift, splice
- assignments to _properties_ of arrays and objects work the same way as assignments to the values themselves:
- rule of thumb: the name of the updated variable must appear on the left hand side of the assignment.

```svelte
<script>

function addNumber() {
    numbers[numbers.length] = numbers.length + 1;
}
//this won't trigger reactivity on obj.foo.bar:
const foo = obj.foo;
foo.bar = "baz";
//unless you follow up with:
obj = obj;
</script>
```

- this has been a discussion on INTERNAL STATE, or, values that are only accessible within a given component

## props

when we pass data from a component to its children, we need to declare PROPERTIES. 'props'. In Svelte we do that with the `export` keyword.

- we can specify default values for props in components:

```svelte
<script>
    export let answer = "a mystery";
</script>
```

So the <Component /> that doesn't have an "answer" prop will use the default, but a <Component answer ={42}> will use the specified value 42

### spread props

you can "spread" properties into a component where they are expected:
for

```svelte
<PackageInfo
name={pkg.name}
speed={pkg.speed}
version={pkg.version}
website={pkg.website}
/>
```

instead:

```svelte
<PackageInfo {...pkg} />
```

### if-blocks

```svelte
{#if count > 10}
    <p>{count} is greater than 10</p>
{/if}
```

### else-blocks

```svelte
{#if count > 10}
    <p>{count} is greater than 10</p>
{:else}
    <p>{count} is between 0 and 10</p>
{/if}
```

- a # character always indicates a 'block opening tag'. a `/` character always indicates a 'block closing tag'. A ":" character, as in `{:else}` indicates a 'block continuation tag'
  so # -> : -> /

### else-if-blocks

```svelte
{#if count > 10}
    <p>{count} is greater than 10</p>
{:else if count < 5>}
    <p>{count} is less than 5</p>
{:else}
    <p>{count} is between 0 and 10</p>
{/if}
```

### each-blocks

```svelte
<div>
  {#each ponies as pony}
    <Pony {...pony} />
  {/each}
</div>
```

- you can have an array or array-like object(with a .length property) and loop over `each [...iterable]`
- you can also get the3 current index as a second argument:

```svelte
<div>
    {#each ponies as pony, i}
        <Pony {...pony} />
        <button>{i + 1}</button>
    {/each}
```

- #each is weird: modified each block adds removes items at the end, updates any changed values
- so you need a unique identifier ("key") (seems familiar)

for asynchronous data, Svelte makes it easy to AWAIT the value of PROMISES directly in your markup:

```svelte
{#await promise}
    <p>...waiting</p>
{:then number}
    <p>The number is {number}</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
```

if you have your reasons, you can omit the catch block and the first block if you don't want a 'waiting' kinda message

```svelte
{#await promise then number}
    <p>The number is {number}</p>
{/await}

```

## DOM events & on:

you can listen to any DOM event on an element with the `on:` directive
you can declare event handlers in the script tags or directly inline:

```svelte
<div
    on:pointermove={(e) => {
        m = {x: e.clientX, y: e.clientY};
    }}
>
    The mouse position is {m.x} x {m.y}
</div>
```

### Event Modifiers:

full list: preventDefault, stopPropagation, passive, nonpassive, capture, once, self, trusted
you can chain modifiers tegether:
`on:click|once|capture={...}`

- components can dispatch events, but they must create an event dispatcher to do so
- `createEventDispatcher` must be called when the component is first instantiated
- component events don't BUBBLE, so the intermediate components must forward the event
- event forwarding is really cool!

bind:value directive

### pages

the most common building block is the `+page.svelte` which is a svelte component that will be rendered when the user navigates to that url

- before a +page.svelte component (and its containing +layout.svelte components) can be rendered, we often need to get some data. This is done by defining LOAD FUNCTIONS

- a `+page.svelte` file can have a sibling `+page.js` that exports a load function, the return value of which is available to the page through the `data` prop

- a LOAD FUNCTION in a `+page.js` file runs both on the server and the browser (unless you add `export const ssr = false`). If your LOAD FUNCTION should always run on the server (because it uses private environment variables, for example, or accesses a databse) then it would go in a `+page.server.js` instead

- go to "universal vs server"
- `+page.js` and `+layout.js` files export _universal_ LOAD FUNCTIONS that run both on the server and in the browser
- `+page.server.js` and `+layout.server.js` files export _server_ LOAD FUNCTIONS that only run server-side

## Kit

the foundation of sveltekit as a framework is a file-based router
the url patterns are determined by how you structure the file system in the routes directory
wrap the file name in brackets to create a dynamic route: `[dynamic route]`

- by default, SvelteKit will render(or prerender) any component first on the server and send it to the client as HTML. It will then render the component again in the browser to make it interactive in a process called HYDRATION. For this reason, you need to ensure that components can run in both places. SvelteKit will then initialize a router that takes over subsequent navigations.

### navigation

with SvelteKit the majority of navigation can be handled with regular anchor tags like in plain HTML

notice the "hover" setting in app.html and consider whether you want data to be ready on hover for navigation

there are a lot of navigation utilities that SvelteKit provides, see this fireship example:

```svelte
<script lang="ts">
import {
    afterNavigate,
    beforeNavigate,
    disableScrollHandling,
    goto, invalidate,
    invalidateAll,
    preloadCode,
    preloadData
} from "$app/navigation";
```

"from the app slash navigation namespace"

for instance, `goto()` allows you to navigate to a specific link from your javascript code

## stores are awesome!

## reactive declarations :D

## Vite plugins

checkout vite Image plugin I think?
use this to grab a whole directory of images:
import.meta.glob

also checkout the partytown [here](partytown.builder.io)

[what's this?](https://tauri.app/v1/guides/getting-started/setup/vite/)
run third-party scripts from a web worker

Best way to POST to an external API with client interaction in a SvelteKit app?

Hi! I am trying to set up address verification on the client side of my SvelteKit app using Google's Address Verification API. I am running into difficulty because my API key is stored in a .env file, but Vite won't allow me to expose the key on the client side (which I am grateful for). I need to POST my Request with a user's input on the client-side, and then ping the API with my key, then display the Response in the browser. I am not sure what the best practices is for this particular situation in SvelteKit.

I know I need a `+page.server.js` file to access and use my API key, but I am not sure what's the best way to pass the data from my client-side Svelte component, to/through SvelteKit's server functionality, to the external API, and back again. Any help here in Discord, or tutorial suggestions or search terms I could try would be greatly appreciated! I've done some basic CRUD app functionality on previous projects, but for whatever reason I'm hung up on this and trying to pinpoint where I'm confused and need to go do more learning.

### secret

[is this it? using a secret](https://stackoverflow.com/questions/76888839/how-do-i-make-a-call-to-a-protected-external-api-from-sveltekit)
1

Assuming that the SvelteKit app is not entirely pre-rendered, use <form> and [form actions](https://kit.svelte.dev/docs/form-actions).

Protected external API probably means that it has to be authenticated with a secret.
Add the secret to the .env file and import it using $env/static/private.
This secret stays in the server, and is not sent to the client at all.
When the user submits the form,

Check if the user is authenticated in the server hooks.
If authenticated, fill the event.locals in the handle fn.
In the action fn, check the event.locals and check if it's valid.
If valid, send a fetch request to the external API by including the secret.

### form actions vs on:submit:

5

A major difference between form actions and on:submit is form actions are intended to work without JS; on:submit will not work if JS is disabled/broken.

So SvelteKit encourages using form actions whenever possible to provide the optimal user browsing experience.

If you want to send JSON data to an external API, there are a few options including:

Call the external API directly from the client (browser). Probably the simplest option, but not recommended if private API keys are exposed anywhere in the URL/payload. Also this will probably not work if JS is disabled or broken.
Wrap the API with a SvelteKit +server route, which calls the external API from the server (vs. from the client above). This helps prevent leaking private API keys, but still will not work if JS is disabled or broken.
Call the API from a form action. Form actions don't take JSON as input though; they take [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) as input. So the action should construct the JSON from the form inputs.

also:
If the access to the external APIs has to happen from the server (e.g. because of non-disclosed credentials), using a form action is recommended.

Ideally with SvelteKit one should use the [enhance](https://kit.svelte.dev/docs/form-actions#progressive-enhancement) action which allows the page to be updated with response data without a full reload automatically (data is set to the form property) and with form actions the page should still work even if JS fails to load/is disabled, then with a regular form post.

There should rarely be any reason to handle submit, the enhance action can also be used to intercept the submission and e.g. add additional data to the request.

If you want to go directly to the external API from the browser, then intercepting it makes sense and allows you to send a custom JSON request if the API does not support regular form encoded data.

[convo from here](https://stackoverflow.com/questions/75610038/when-to-use-form-actions-vs-onsubmit)

#### form actions

- a `+page.server.js` file can export ACTIONS, which allow you to POST data to the server using the `<form>` element
- when using `<form>`, client-side JavaScript is optional, but you can easily PROGRESSIVELY ENHANCE your form interactions with JavaScript to provide the best user experience
- Actions always use POST requests, since GET requests should never have side-effects
- each action receives a `RequstEvent` object, allowing you to read the data `request.formData()`

ACTIONS ALWAYS USE POST REQUESTS
(GET requests should never have side-effects)

- as well as the ACTION attribute, we can use the FORMACTION attribute on a button to POST the same form data to a different action than the parent `<form>`
- we can't have default actions next to named actions, because if you POST to a named action without a redirect, the query parameter is persisted in the URL, which means the next default POST would go through the named action from before

#### loading data

Before a `+page.svelte` component (and its containing `+layout.svelte` components) can be rendered, we often need to get some data. This is done by defining `load` functions.

A `+page.svelte` file can have a sibling `+page.js` that exports a `load` function, the return value of which is available to the page via the `data` prop:

```svelte
export function load({ params }) {
	return {
		post: {
			title: `Title for ${params.slug} goes here`,
			content: `Content for ${params.slug} goes here`
		}
	};
}
```

```svelte
<script>
	export let data;
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
```

- a LOAD function in a `+page.js` runs both on server and in the browser unless otherwise specified. If it should _always_ fun on the server, then it would go in a `+page.server.js` instead (like if you have a private API key) (see "Universal vs server")
- the `+page.svelte` component, and each `+layout.svelte` component above it, has access to its own data plus all the data from its parents

- !!! Browsers are STATEFUL - state is stored in memory as the user interacts with the application. Servers, on the other hand, are STATELESS - the content of the response is determined entirely by the content of the request.

- load functions should be PURE with NO SIDE-EFFECTS (except maybe console.logs). Don't write to a store inside a load function! just return the data:

```javascript
export async function load({ fetch }) {
  const response = await fetch("/api/user");
  return {
    user: await response.json(),
  };
}
```

then, pass it around to the components that need it or use `$page.data`

#### PageData

PageData defines the comon shape of the `$page.data` store - that is, the data that is shared between all pages.
The LOAD and SERVERLOAD functions in `./$types` will be narrowed accordingly. Use optional properties for data that is only present on specific pages.
`interface PageData {}`

`$app/stores`: getStores, navigating, page, updated

```svelte
function getStores(): {
	page: typeof page;

	navigating: typeof navigating;

	updated: typeof updated;
};
```
