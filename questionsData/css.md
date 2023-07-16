# CSS

- What is CSS?
  CSS, or, Cascading Style Sheets, is a style sheet language used for describing the presentation of a document written in markup language such as HTML or XML. It is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

- What is CSS designed to do and how does it adhere to the coding principle "separation of concerns"?
  CSS enables the separation of content and presentation, including layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content, and enables the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.

## Syntax------------------------------------

- What is a selector?
  Selectors declare which part of the markup a style applies to by matching tags and attributes to the markup itself.

- What are the kinds of selectors?

  1. all elements of a specific type/tag, like "h2" headers, or the "button" tag
  2. elements specified by their ID (don't forget each id value should be unique)
  3. elements specified by their class (multiple elements can use the same class name)
  4. attribute selectors refer to an element with a specified attribute, liek `img[src]`
  5. pseudo-class selectors select only when in the specified state like `a:hover` selects an < a > tag only when the mouse pointer is hovering over the link

- What is a pseudo-class?
  Pseudo-classes are used in CSS selectors to permit formatting based on information that is not contained in the document tree, like :hover, which identifies content only when the user "points to" the visible element, usually by holding the mouse cursor over it. A pseudo-class is appended to a selector like this: a:hover #elementId:hover

- What is a pseudo-element?
  Makes a selection that may consist of partial elements, such as ::first-line or ::first-letter. Uses two colons instead of the single colon that is used by pseudo-class.

- Describe a declaration block in CSS:
  A declaration block consists of a list of declarations in braces. Each declaration itself consists of a property, a colon (:) and a value. If there are multiple declarations in a block, a semi-colon must be used at the end of a declaration to separate it from the next declaration in the declaration block.
  How do you declare a variable in CSS?

- What is a declaration in CSS?
  A declaration is a single rule, like `color: red;` It specifies which of the elements properties you want to style.

- What are properties in CSS?
  Properties are the ways you can style an HTML element. For instance, "color" is a property of < p > tag elements. In CSS you choose which properties you want to affect in the rule.

- What is a property value in CSS?
  to the right of the property-after the colon- there is the property value. this chooses one out of many possible appearnaces for a given property. (For example, there are many "color" values in addition to "red".)
  What is a responsive layout? How do you go about creating that?

- How do you select multiple elements and apply them to the same ruleset?
  Separate each selector by a comma.
  <!-- am I going to include examples? -->

## Setup--------------------------------------------------

- How do you link a stylesheet to HTML doc?
  Add the < link > element somewhere inside your index.html's head (inbetween the < head > tags at the top of the doc)
  ex: < link href="styles/style.css" rel="stylesheet" / >

- How do you give your stylesheet access to a particular font family?
  Add the < link > element somewhere inside your index.html's head (inbetween the < head > tags at the top of the doc), and then apply the rule to a declaration (usually the body or :root selector declaration blocks) in your stylesheet (`font-family: 'JetBrains Mono', monospace;`)
  ex: < link
  href="https://fonts.googleapis.com/css?family=Open+Sans"
  rel="stylesheet" />

## Flow and Display properties--------------------------------------------------

- What is "normal flow"?
  Normal flow is the way that webpage elements lay themselves out if you haven't changed their layout.
  The boxes of individual elements are laid out in such a way that any padding, border, or margin they happen to have is added to their content. This is what we call the "box model".

- Explain the box model.
  CSS layout is mostly based on the "box model". Everything in CSS has a box around it. Each box taking up space on your page has properties like padding, border, and margin.

- What's the difference between block and inline elements?
  In CSS we have several types of boxes that generally fit into the categories of block boxes and inline boxes. The type refers to how the box behaves in terms of page flow and in relation to other boxes on the page. Boxes have an "inner display type" and an "outer display type".
  By default, a block-level element's content fills the available inline space of the parent element containing it, growing along the block dimension to accomodate its content. The size of inline-level elements is just the size of their content.

- Explain the outer display type "block" of the box model:
  if a box has an outer display type of "block":

1. then the box will break onto a new line,
2. the width and height properties are respected,
3. padding, margin, and border will cause other elements to be pushed away from the box.
4. if width is not specified, the box will extend in the inline direction to fill the space available in its container. In most cases, the box will become as wide as its container, filling up 100% of the space available.
   tags that default to "block" outer display type: < h1 >, < p >

- Explain the outer display type "inline" of the box model:
  if a box has an outder display type of "inline":

1. The box will not break onto a new line
2. the width and height properties will not apply
3. top and bottom padding, margins, and borders will apply but will not cause other inline boxes to move away from the box
4. left and right padding, margins, and borders will apply and will cause other inline boxes to move away from the box
   tags that default to "inline" outer display type: < a >, < span >, < em >, < strong >

- Explain how "inner display" type works:
  Block and inline layout is the default way things behave on the web. By default and without any other instruction, the elements inside a box are also laid out in "normal flow" and behave as block or inline boxes.
  You can change the inner display type for example by setting `display: flex;` The element will still use the outer display type block, but this changes the inner display type to flex. Any direct children of this box will become flex items and behave according to the Flexbox specification.

- List different layout methods:
  Flexbox, Grid, Floats, Positioning

- What is Flexbox?
  A one-dimensional layout method for arranging items in rows or columns. Items "flex", they expand to fill additional space or shrink to fit into smaller spaces.

- What is Grid layout and how does it differ from Flexbox?
  Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns.

- Explain the float property:
  The float property allows web developers to implement layouts involving an image floating inside a column of text, with the text wrapping around the left or right of it, like in a newspaper layout. A float is removed from "normal flow". Float is more of a "legacy" layout method and you probably want to pick grid or flexbox over this option.

- Explain "positioning":
  Positioning allows you to take elements out of normal document flow and make them behave differently, for example, by sitting on top of one another or by always remaining in the same place inside the browser viewport. Some different "position" values: static, relative, absolute, fixed, sticky. Also the properties top/left/bottom/right are used alongside the "position" property.

- In terms of "positioning", how do you determine the order in which elements overlap?
  The "z-index" property allows you to change the stacking order. It refers to the "z-axis" (alongside the x- and y-axes). Z-index accepts unitless index values. ex: `z-index: 1;` Overlapping elements with a larger z-index cover those with a smaller one. Negative number values can indicate a lower priority in the stacking context.

- What is "stacking context"?
  Stacking context is a three-dimensional conceptualization of HTML elements along an imaginary z-axis relative to the user, who is assumed to be facing the viewport or the webpage. HTML elements occupy this space in priority order based on element attributes.
  Stacking contexts can be contained in other stacking contexts, and together create a hierarchy of stacking contexts, each stackingcontext is completely independent of its siblings and only descendant elements are considered when stackign is processed; each stacking context is self-contained: after the element's contents are stacked, the whole element is considered in teh stacking order of the parent stacking context.

- What is the z-axis?
  Web pages have a z-axis, an imaginary line that runs from the surface of your screen toward the viewer's face.

## Formatting-------------------------------------

- How is whitespace handled in CSS?
  Whitespace is ignored.

- What are best practices for formatting CSS?
  Indent each property, or "rule", in a declaration block and give it its own line.

## Why use CSS?-----------------------------------

- What are some advantages to using CSS for your web application?
  CSS allows for:
  - separation of content from presentation,
  - site-wide consistency,
  - efficiency in bandwidth (since the stylesheet is usually stored in the browser cache, it can be used to render multiple pages without needing to be reloaded),
  - page reformatting simpicity,
  - accessibility optimization

## Popular frameworks and libraries-------------------------------------

- What are some popular CSS frameworks?
  (In order of popularity from results in 2022.stateofcss: ) TailwindCSS, PureCSS, Ant Design, Semantic UI/Fomantic UI, Bulma, UIKit, Materialize CSS, Bootstrap, Foundation

- What are some popular CSS-in-JavaScript libraries (libraries that help integrate CSS into JavaScript code)?
  (In order of popularity from results in 2022.stateofcss: ) CSS Modules, vanilla-extract, Stitches, Windi CSS, Styled System, Styled Components, Emotion, Theme UI, Styled JSX, JSS

## Best Practices and Higher-level Concepts----------------------------------------------------

- What is responsive web design (RWD)?
  Responsive web design is a web design _approach_ to make web pages render well on all screen sizes and resolutions while ensuring good usability. It is the way to design for a multi-device web.

- How does one implement responsive web design (RWD)?
  HTML is fundamentally responsive, or "fluid". The browser automatically reflows text to fit the viewport. RWD addresses the range of devices and device sizes, enabling automatic adaptation to the screen (tablet, phone, television, watch). This is done with fluid grids, fluid images, and media queries to create responsive content.

- What are some pratical implementations of responsive web design?
Mobile-first design: One approach is to make a simple single-column layout for narrow-screen devices, and then to check for larger screens, and to implement a multiple-column layout for screens that are wide enough to handle the content.
Another method is to set breakpoints for media queries, and best practices is to use relative units when setting these.
While media queries can help with RWD, they are not absolutely necessary. Flexible grids, relative units, and min/max unit values can be used without queries to achieve a responsive layout.
<!-- What is mobile-first design? -->

Explain "Specificity"
Explain "Inheritance"

## My Advice-------------------------------------------------------

My tip: Something that helped me become more efficient when writing CSS was to remember the order "top, left, bottom, right". Property values tend to follow this order when you're being very specific about an element's property. For instance with the grid layout, sometimes you choose to place a box on the grid in a very specific location and that requires giving the rule each axis the box falls on: `.myContainer { grid-area: 1 / 3 / 2 / 5; }` or perhaps I want padding on only one side: `padding: 0 0 0 .5rem;` Each figure represents the value for top, left, bottom, and right. If you keep going with this logic, you can simplify things to just "top, left" if you want your width properties or height properties the same. So if I want padding on the left and right sides of an item I can simplify to: `padding: 0 .5rem` which is the same as `padding: 0 .5rem 0 .5rem`.

## Other---------------------------

- What are some of the newest additions to CSS3?
  (not all these are supported across all browser yet!) subgrid, accent-color, ::marker, :has(), :where(), media query ranges using <= ex: `@media (width <= 30rem){}`
