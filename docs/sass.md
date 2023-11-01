Sass is a pre-processor
We type in code and it compiles that code. The browser cannot understand Sass/SCSS. We will have something running in the background that will compile the code we write into CSS, which the browser can understand

- What can SASS do that CSS can't? It can create loops, groups of easily reusable code, helps us work smarter and faster and enables projects to scale up much easier.

"If you struggle with some aspects of CSS, Sass isn't here to solve those problems" (because our final output is still CSS)

Today, the only active version of Sass is Dart Sass
On versions of Sass: Node Sass was based on LibSass, which is deprecated and no longer maintained (so missing a lot of features)
There are some things that rely on Dart Sass, but KP doesn't like relying on 3rd parties anymore. (We are all realizing Ryan Dahl's regrets I guess hahaha)

`npm install -g sass`
`sass --version`
notice sass terminal command:
`sass style.scss style.css`

Sass is able to "watch" files (and folders), allowing it to run in the background and compile things automatically. (Good for dev experience)
`sass --watch style.scss style.css`
(CTR-C to stop watching)

## On Naming: "Sass" and "SCSS"

"Sass" not "SASS". Stylistically Awesome Style Sheets is a backronym (KP hates it)

SCSS stands for Sassy CSS
Sas was what came first, aka the "indented syntax" because it relies on indentation rather than {} and ;

SCSS is called Sassy CSS because it has all the superpowers of Sass but with the familiar CSS syntax

---

You can comment out multiple lines in Sass with //, and it will not be compiled into the CSS. `/*....*/` still does tho

---

"Nesting is one of the features people cite the most when it comes to Sass features that they really like"

"Nesting simply means putting a new selector within the parent's declaration"

Using nesting creates "descendant selectors" in the compiled CSS

With regular Sass, to nest something within the indented syntax, we just indent it

```.sass
.primary-navigation
  padding: 1rem

  ul
    display: flex
    gap: 1rem
    list-style: none
    margin: 0
    padding: 0

  a
    text-transform: uppercase
    text-decoration: none
```

"Nesting can create overly specific selectors with high specificity."

==> "Always be aware of what your SCSS/Sass is outputting"!

KP says, "if you wouldn't write a selector like that in your CSS, then don't use nesting to create that when writing SCSS"

the Parent Selector

the "parent selector" is "&". With the parent selector, we can create compound selectors.

We need to use the parent selector for pseudo-classes and pseudo-elements

One way we can use nesting and output CSS that doesn't have any descendant selectors is by using the parent selector &

The ampersand always refers back to the parent selector. Whatever the parent selector is, the compiler will take the ampersand and replace it with the parent selector.

You have to use class selectors with ampersand! The type selector won't work! `div__title` makes no sense!

- What is BEM?
  BEM stands for block, element, and modifier. BEM uses double underscores. So block might be .card, with `__title`, `__subtitle`, and `__body` the elements (I suppose the modifiers are the property-value statements? the CSS "declarations"c)

Using a trailing & to add to the parent selector
Like a reverse nesting? Does seem to add a kind of reverse-specificity

Regarding compiled css file bloat: He prefers to worry about optimizing the bigger fish like images and JS optimizations

---

## Kevin's Rules of Thumb:

1. start with all the styloing of that element itself when authoring SCSS
2. style nested elements, generally trying to avoid nesting more than one level deep
3. media queries at the _end_ of my parent selector, including for the nested selectors.

(ref. Kevin Powell .beyond{CSS})

## Variables

A variable looks just like a regular property: value pair, with the exception that they don't have to be declared inside of a CSS rule.
In Sass, like anything related to CSS, variables work with the cascade.
Variables can be locally scoped to selectors, but they are only available within where they are declared instide the { }, and nowhere else.

KP suggests only using global Sass variables unless you have a very specific reason to scope them inside of a CSS rule. You want to use the cascaaaade

If you want to make a locally scoped variable global you can add !global to the value:

```css
.header {
  $clr-primary: blue !global;
}
```

While Sass variables start with $, custom properties start with --
While sass variables don't have to be declared within a selector, Custom Properties do
While variables are rendered before the browser sees them, Custom Properties are live variables in the browser, which opens up new possibilities and allows us to manipulate them in more ways
While Sass variables can be used as media query breakpoints, Custom Properties cannot

CSS custom properties can be very powerful since we sometimes need to make changes in real time. Sass is a pre-processor, and so we cannot do things like switch between light and dark modes in real time. We revert to using CSS custom properties for this reason.

you can store lists in variables like this:
`$colors: red, blue, green;`
we can also create groups in lists, called "nested lists"
`$font-colors: (primary, #ff0000), (secondary, #00ff00), (tertiary, #0000ff);`

### functions

CSS functions: calc(), clamp(), var()
CSS has rgb() and hsl(), but when used in Sass, Sass has it's on version of the functionality. You can do rgba() in Sass

(Alpha indicates how opaque each pixel is and allows an image to be combined over others using alpha compositing)
Sass color functions change the output from what you might expect.)
[wiki](https://en.wikipedia.org/wiki/RGBA_color_model)

the 3 global Sass functions: hsl()/hsla(), rgb()/rgba(), if()
rgb/hsl convert to hex when possible, but if there is an alpha value it will convert rgb/hsl to rgba()

"Superpowers with rgb()"
`rgb(#334455, .5)`
alpha values can be represented with the decimal from 0 to 1, or you can put a percentage like 53%
you can also use keywords: `rgb(red, .5)`

since vanilla CSS has new syntax that looks like:
`rgb(0 0 0 / .5)`, you have to switch / for , in Sass or it won't compile

no rgb() magic with custom properties!!!
because remember Sass variables are compiled to their value _before_ the browser sees them, and custom properties are live variables that the browser can reference. Custom properties are not compiled.

Don't use hex values is the easy solution when setting up custom properties.

the ampersand selector doesn't do more descendant selectors, it just creates a more complex selector, and outputs them in a way that's a little bit faster to write and update

a placeholder starts with a % and can only be used with @extends

@extends vs @mixin
@extends will combine common properties into a single CSS rule with multiple selectors, but mixins will repeat the code each time we use it
However this might not be an issue, realistically, since most web servers compress the CSS they serve using an algorithm that's very good at handling repeated chunks of identical text

you can nest inside mixins!
you can use arguments with mixins!!!
you have to give these arguments a value when you use them or they mixin won't compile into CSS

```scss
@mixin button($bg) {
  background: $bg;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-weight: 700;
}

.btn--accent {
  @include button($bg: gray);
}
```

===> to:

```css
.btn--accent {
  background: gray;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-weight: 700;
}
```

we can include as many arguments as we want, we just need to comma separate them:

```scss
@mixin button($bg, $color) {
  background: $bg;
  color: $color;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-weight: 700;
}
```

you can put just values in the arguments and not label them if you do them in exactly the right order
you can include default values, and then overwrite those values
when we don't provide a default value for an argument, it is considered a required arcument because we are required to provide a value if we want to use the mixin
if you have both required and optional arguments, you MUST include the required ones first and optional ones afterwards

(I'm guessing optional means it's optional to use the default or change it? but required is that we require an input since we have nothing yet? so you fill missing arguments, and then if you want to change optional you do or don't include that)
!include optional arguments at the end!
Sass expects variables to be a VALUE so sometiems you need interpolation if you're labeling something

You can use interpolation to make variables into class names with `#{}`
You can do:

```scss
.#{$color-primary} {
  color: $color-primary;
  $bg: $color-secondary;
}
```

but also interpolate it into other text:

```scss
$color-primary: red;

.text-#{$color-primary} {
  color: $color-primary;
}
```

or for more logic:

```scss
$width: 100;

.width-#{$width * 2} {
  width: $width * 2px;
}
```

aaaaa:

```scss
$red: red;
$green: green;
$blue: blue;
$width: 100;

@mixin box($color, $multiplier: 1) {
  .box-#{$color}-#{$multiplier * $width} {
    aspect-ratio: 1 / 1;
    background-color: color;
    width: $width * $multiplier * 1px;
  }
}

@include box($red);
@include box($green, 1.5);
@include box($blue, 2);
```

trick to solve nexted children naming:

```scss
.hover-me {
  background: black;
  color: white;
  /* ... */

  &:hover {
    .hover-me__title {
      color: black;
    }
  }
}
```

or:

```scss
.hover-me {
  $parent: &;

  background: black;
  color: white;

  &__title {
    color: limegreen;
  }

  &:hover,
  &:focus {
    background: white;
    color: black;

    #{$parent}__title {
      color: black;
    }
  }
}cd b
```

----another example:

```scss
$size-8: 0.5rem;
$size-12: 0.75rem;
$size-16: 1rem;
$size-32: 2rem;
$size-36: 3rem;

%shadow {
  box-shadow: 0.25rem 0.25rem 1rem rgb(0 0 0 / 0.15);
}

.card {
  $parent: &;
  border-radius: 2rem;
  overflow: hidden;
  @extend %shadow;

  &[data-type="product"] {
    // fix this selector!
    #{$parent}__content {
      padding: $size-32 $size-16 $size-16;
    }
  }
}
```

```css
.card {
  box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 0.15);
}

.card {
  border-radius: 2rem;
  overflow: hidden;
}
.card[data-type="product"] .card__content {
  padding: 2rem 1rem 1rem;
}
```

---Composition and Architecture----------------------

"composition class"
What controls layout
We want to separate the idea of "layout" from what the things in the layout are doing

In Sass, we use 'abstracts' to talk about code that we werite that does not get compiled into CSS. It's code that we've written that is not compiled.

the html style attribute looks at the compiled CSS

best practices:
.selector {
declarations
@extend
nested stuff
}

## built in Sass functions

built-in Sass modules: color, list, math, maps, seelctor, meta, string
`@import` is deprecated, we do`@use` and `@forward`

the `@use` rule must come before anything that is compiled into CSS
prefix a sass function with the module name like so: `color.scale()`

### scale()

`@use "sass:color";`

### loops

for, each, while
(KP says that "while" loops tend to not be used, because you can usually solve those cases in an easier-to-understand way with a for loop)(he has never run into a situation where he needed to use a while loop)

- for loop
  needs variable, starting num, end num
  "from" and "to"
  "from" and "through"

(the `$i` variable is a very common convention)

note: for division, use calc() or math.div() since / is not going to continue being supported
[ems rems](https://zellwk.com/blog/media-query-units/)

`*=` selector
`[class*="col-"]`

```scss
@use "sass:color";

$clr-primary: #2553db;
$clr-steps: 10;
/* lightness for each step should increase by 10% */
@for $i from 0 to $clr-steps {
  .clr-primary-#{$i + 1} {
    color: color.scale($clr-primary, $lightness: $i * 10%);
  }
}
```

Do you want to loop _a number of times_, or do you want to loop _through a set of things_?
`@each $variable in var1, var2, var3 { ... }`

```scss
$font-colors: (primary #ff0000) (secondary #00ff00) (tertiary #0000ff);

@each $name, $color in $font-colors {
  .#{$name} {
    color: $color;
  }
}
```

produces:

```css
.primary {
  color: #ff0000;
}

.secondary {
  color: #00ff00;
}

.tertiary {
  color: #0000ff;
}
```

### if

`@if` directive
or `if()` function

If statements check if something is true. If it's true, it runs the code inside that statement. If it's not true, it skips that code.

`@if 1 == 1 { ... }`
(you can write it like JavaScript if you want: `@if (1==1) {...}`)
you can use > < == !=

no `|| &&` !!
but the keywords `or`, `and`

@if $number >= 3 and $number <= 6 {...}

[for now](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/)

```scss
@use "sass:color";

$colors: (primary, #4287f5), (secondary, #3a128a), (accent, #f59c42);

@each $name, $color in $colors {
  $color-lightness: color.lightness($color);

  @if $color-lightness > 50 {
    .clr-#{$name} {
      background: $color;
      test: color.lightness($color);
    }
  }
}
```

gives:

```css
.clr-primary {
  background: #4287f5;
  test: 60.9803921569%;
}

.clr-accent {
  background: #f59c42;
  test: 60.9803921569%;
}
```

The bigger the font-size, the tighter the line-height (what does that mean???)

### if()

Unlike @if, if() functions can ONLY output a value

```scss
@use "sass:color";

$colors: (primary, #4287f5), (secondary, #3a128a), (accent, #f59c42);

@each $name, $color in $colors {
  .clr-#{$name} {
    background: $color;
    color: if(color.lightness($color) < 50, white, black);
  }
}
```

KP is more often using @if since usually that means an @else. But it comes down to preference since the compiled code will be (in theory) the same.

```scss
@mixin ui-component(
  $size,
  $color,
  $bg,
  $hover-color: $color,
  $hover-bg: $bg,
  $hover: true
) {
  display: inline-block;
  padding: $size ($size * 3);
  color: $color;
  background-color: $bg;
  @if $hover {
    &:hover,
    &:focus {
      color: $hover-color;
      background-color: $hover-bg;
    }
  }
}

.button {
  @include ui-component(1em, white, black, black, white);
}

.badge {
  @include ui-component(0.25em, red, blue, $hover: false);
}
```

### @function

to create your own function:

```scss
@function name-of-function($arguments) {
  //functionality here
}
```

We need to explicitly tell Sass what we want the output to be:

```scss
@function add($num1, $num2) {
  @return $num1 + $num2;
}

body {
  font-size: add(1rem, 0.5rem);
}
```

for multiple args:
`@function example($args...){ }`

### you can do error handling!

`@error` (will not compile the CSS)
`@warn` (will compile the CSS)
`@debug` will show what the output is "What value is this giving me?"
`@debug color.lightness{$color);`

`@use "sass:meta";`
`@debug meta.type-of(10px);` (look at terminal output)(string, number, list etc.)

## Advanced Mixins

### "arbitrary arguments"

you do a "..."
@mixin gradient($color...){
    background-image: linear-gradient($color...)
}

1. They must be the last definied argument
2. They are defined by including `...` after the argument's name

```scss
@mixin gradient($deg, $colors...) {
  background-image: linear-gradient($deg, $colors);
}

.one {
  @include gradient(50deg, red, blue);
}

.two {
  @include gradient(50deg, red, blue, green, yellow, orange);
}
```

3. This can tell Sass that a variable represents more than one arg in a situation that requires more than one arg like `$default-clr-scheme...`

### @content

`@content` is a lot like "slot" and you use it with `@includes`
A big advantage Sass holds over CSS is the ability to use custom properties in media queries.

you can use `@content` to create pseudo-elements so that you never have to remember to include "content: '' ;"

## maps

`@use "sass:map";`
list of key value pairs separated with commas
map.get() vs -map-get()-
-map-get() has been deprecated-

```scss
@use "sass:map";

$colors: (
  "primary": #1b6db5,
  "secondary": #4a1ab0,
  "accent": #d97614,
);

@function clr($color) {
  $output-color: map.get($colors, $color);
  @debug $output-color;
  @if $output-color != null {
    @return $output-color;
  } @else {
    @error "That is not one of your color keys";
  }
}

.example {
  // should output color: #1b6db5;
  color: clr(primary);
}

.example-2 {
  // should throw an error
  color: clr(purple);
}
```

gives:

```css
"That is not one of your color keys"
   ╷
26 │   color: clr(purple);
   │          ^^^^^^^^^^^
   ╵
  - 26:10  root stylesheet
```

### mapception

```scss
$colors: (
  primary: (
    light: lightblue,
    normal: blue,
    dark: darkblue,
  ),
  secondary: (
    light: pink,
    normal: red,
    dark: firebrick,
  ),
);

@each $color, $shade in $colors {
  @each $shade in $color {
    .test {
      color: $shade;
    }
  }
}
```

gives:

```css
.test {
  color: primary;
}

.test {
  color: secondary;
}
```

## Syntax

`@each $variable in <expression> { ... }`

## @use and @forward to create our own modules

## and "partials:

to tell Sass that something is a partial,and shouldn't be compiled into its own CSS file, we start the filename with an underscore: `_mixins.scss`

`@use "layout/_container.scss` works out the same as
`@use "layout/container`

you can mix and match file endings. `"_container.css"` will work with `@use "container"`
this can be helpful when migrating a project over to Sass
(regular CSS is valid SCSS)

you can cast the imported files to a variable and use dot notation!
`@use 'colors' as c;`
then

```scss
h1 {
  color: c.$clr-primary;
}
```

you can do away with name-spacing by using "_"
`@use 'font-sizes' as _;`

seems like @forward is just an aggregate file
(@use and @forward are only in Dart Sass. node-sass is deprecated and still uses @import)

the default shortcut to search for files in VS Code is ctrl+p/cmd+p

## VITE VITE VITE

A BUILD TOOL THAT MAKES DEVELOPMENT AND DEPLOYMENT OF PROJECTS EASY!
It starts up a dev server with Hot Module Replacement (browser updates on save without refreshing the page), supports a lot of langauges and tools.

It bundles things behind the scenes. We won't see the final compiled CSS while we are working, but maybe we don't need those training wheels anymore.

npm i -D sass
(-D is the same as --save-dev)

build vs dev environments

`npm run build` will build for production
gives this message:
"/styles/main.scss doesn't exist at build time, it will remain unchanged to be resolved at runtime"
and "5 modules transformed"

creats a dist folder
the dist folder is what will be out on the internet, not our dev environment with sass and all that. So you can see the JavaScript file, the css file, and the html file in that dist folder plus logos and things

## architecture

THE 7-1 PATTERN

KP's structure:
sass/
|
|-abstracts/
| |- \_breakpoints.scss
| |- \_functions.scss
| |- \_mixins.scss
| |- \_index.scss
|
|-base/
| |- \_root.scss
| |- \_reset.scss
| |- \_general.scss
| |- \_index.scss
|
|-components/
| |- \_forms.scss
| |- \_buttons.scss
| |- \_navigation.scss
| |- \_index.scss
|
|-layout/
| |- \_single-column.scss
| |- \_with-sidebar.scss
| |- \_index.scss
|
|-utilities/
| |- \_colors.scss
| |- \_text.scss
| |- \_spacing.scss
| |- \_index.scss
|
|-vendor/
| |- \_prism.scss
| |- \_index.scss
|
|- main.scss

in main.scss the order of imports is important, since cascade applies

Don't forget you can use a "data attribute" as a selector:
`button[data-type="inverted"]`

KP: "If I can have a gui, I'm going to use a gui"

KP: What is a design system?
"The idea of a design system is basically to create a system made up of reusable patterns and components, making it easy to maintain and scale."
& adding layers of abstraction

KP: What are design tokens?
"The building blocks that we need to build out and maintain our design system"
layers of tokens

- global tokens, "high-level", the first layer. the color: red;
- contextual tokens: adds context to how we are going to be using our (global?) variables (aka "alias tokens") like "primary" and "secondary" colors. it's not about the color itself but how it's being used.
  each layer has different impact, global has a huge impact, contextual less, and then specific to the project even less
- the more abstracted contextual tokens take these color abstractions and apply them to more specific uses like `$color-text-body` or `$color-background-body`
- 4th level is component-specific tokens

global-->contextual-->component

preference to change tokens rather than components. Then only a property gets changed and trickles down to the component files
this provides granular control while abstracting away the style rules that don't need to be changed

consider naming globals, the ones you want touched less, differently, perhaps do "long-hand" for the abstracted tokens and "shorthand" for globals (don't touch globals, touch the abstracted stuff) (example: `clr-` vs `color-`)

seems like naming things well helps

"private members" is Sass allowing us to use variables only within a file and nowhere else. It can provide a safety net and force folks to use contextual tokens rather than global tokens
you can prefix tokens to keep them inside your abstracts:
$-clr-red: red;
or
$\_clr-red: red;
then you count on variable reassignment to move them forward out of abstracts file
you can hide something if you don't want to `@forward` something:
`@forward "colors" hide $color-primary, $color-secondary;`
or show
`@forward "colors" show $color-primary;` to expose specific ones. It only "shows" what you direct it to show
