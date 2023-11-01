- What is Express.js?

It is a web framework for Node.js.
Express is a Node module. You cannot have Express without Node.js.

- Node.js is the language. When we are writing Express, we are writing Node.
  Google, in the Chromium project, made the v8 engine. (Chakra is IE engine, Spidermonkey is Mozilla -> everybody has their own JavaScript engine) Ryan Dahl took the v8 engine out of Chrome and turned it into Node.js.
  Node.js is not written in JavaScript, it's written in C. It reads/runs JavaScript.
- Express is fast. It is a thing, lightweight layer over Node.
  Express is unopinionated. (As opposed to Rails, which is opinionated. It corrals you into using Postgres, Coffeescript, Webbrick, makes lots of decisions for you.)
  If you already know what you want, then an unopinionated framework can be preferable.
  Express is minimalist, very little is forced on the dev.

Express is a routing and middleware web framework that has minimal functionality of its own.
Express allows us to hijack the process of changing the request and response objects any time that we want to.

- How does Express work? (rework this)
  express works from the top of the file down
  (have list of methods included in the questions)
  `app` is used to mount middleware
  methods
  'all':
  `app.all("*", () => {})`
  'listen':
  `app.listen(port, optional cb)`

- `app.use` ? mounts the specified middleware function(s) at the specified path. The middleware function is executed when the base of the requested path matches the path arg
  use takes one arg, the middleware you want to run

`express.static(root, [options])`
The root argument specifies the root directory from which to serve static assets. For instance: `express.static("public")`
call the directory "public" to remind yourself that it's only things that should be exposed to the public
app.use(express.static(" "))

---

Express claims to be two things:
Express is a router.
Express is a series of middleware that comprises a web framework.

Req -----MIDDLEWARE----> Res
-->all the stuff that happens in between the actually networking stuff
-->a function that has access to the req, res, and next objects as arguments

- A middleware function is any function that has access to the req, res, next objects
- Express is just a bunch of tiny little functions that work on the request and response objects

Req -----MIDDLEWARE----> Res

1. request comes in
2. we need to validate the user, sometimes.
3. we need to store some things in the DB.
4. If there is data from the user we need to parse it and store it.
5. respond however we need to with json, a template, or some basic html

2-4 are middleware and can be done with app.use

response object has a property called locals
locals is a property pre-built into express attached to every response. It will live through the life of this response. It's very useful for passing data over to a template.

why do we call `next();` in our middleware?

This will run validateUser on All paths, all methods:
`app.use(validateUser)`
This will run validateUser on /admin, all methods:
`app.use("/admin", validateUser)`
This will run validateUser on /, only on get methods:
`app.get("/", validateUser)`
Which also can be written like this:

```javascript
app.get("/", (req, res, next) => {
  res.locals.validated = true;
  console.log("VALIDATED RAN!");
  next();
});
```

- List the express() methods:
  express.json();
  express.static();
  express.Router();
  express.urlencoded();

- express.json() is a built-in middleware function in Express. it parses incoming requests with JSON payloads and is based on body-parser.

-express.json() followed by express.urlencoded() create req.body
app.use(express.json());
app.use(express.urlencoded());
these two methods will collect almost any form of data, parse it for you, and give it to you in JSON format

Robert Bunch says it's good practice to have thewe three on almost any app: static, json, and urlencoded methods:

```javascript
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
```

- What is one of the most important Express middlewares for security best practices?
  use helmet
  it sets HTTP headers right up front and protects you from well-known vulnerabilities
  `npm install helmet --save`
  const helmet = require("helmet");
  app.use(helmet)

  sending a response:
  res.send, res.json, res.render

(Topic: what is going on inside the server?)
bottomt layer is Operating system (Linux, Windows, Unix)
second layer is Web Server: Apache, Node, iis, nginx, ws, tomcat
nextlayer: database layer, SQL option stuff(MySQL, Oracle, NoSQL, Postgress etc)
Programming Layer: C, C++, Java, Python, Ruby, Php, R, ...
(maybe on the very top a FE UI layer, like react or Vue or Angular or something)

res.render is SSR
how does res.render work in express?
we create/respond with a template to do server side rendering
the server is going to respond fresh with HTML, CSS, JavaScript every time, like Wikipedia
(you can make use of session variables and cookies)

but res.json is mostly for API/json needs
as the user you hit the server, first time the server sends back the HTML/CSS/JavaScript, but ever subsequent time it will send json, and the DOM will update itself accordingly (however your framework does it), like Facebook
(this solution is very fast and creates a really cool uI/UX)(downside is you have to start storing things on the browser)

to use res.render:

1. set up boilerplate express with routes
2. we define a view engine (EJS, Mustache, Handlebars, PUG)
3. Inside one of our routes, we have a res.render
4. we pass that res.render 2 things:

- the file we want to use
- the data we want to send to that file

5. express uses the node module for our specified view engine and parses the file (it takes the HTML,JavaScript, and CSS and combines it with whatever "node" is in the file)
6. the final result of this process is a compiled product of the things the browser can read (HTML, CSS, JavaScript)

the templating engine serves as a bridge inbetween node and the front end stuff. Think about what data we want to pass to the template, like a user's avatar, name, pictures
`app.set("view engine", "ejs");`

create views directory,
create index.ejs inside the views directory (or whatever templating engine you're using),
app.set view engine to yoru view engine and then app.set views to (`path.join(__dirname, "views")`)
name of the file, type of the file, location of the file

You wouldn't use a templating library unless you wanted to send data over?
the browser only sees the compiled finished project

I want to run vs I want to print
embedding javascript alongside html

the view files have access to all of the locals
you don't have to put locals in dot notation, but you can

<h1><%= msg %></h1>
<h1><%= locals.msg %></h1>
"escaped"
if express or the templating engine doesn't know where the html came from, it will not be evaluated or "escaped", 
it will literally print of html as text

you can use a dash

"<%= %>" prints non-escape stuff
<%- %> is the only way to get escaped data to print
<%# %> lets you do a purely EJS comment into the code itself like in JSX with

<!-- { */ /* } -->

<%- include("navbar"); %>
from navbar.ejs

how can you print ...(good question here?)
explain res.render and view

explain "escaped data"
in hbs you can do triple handlebars {{{}}} to escape data you trust (like <%- %> in ejs)

handlebars work off the concept of "helpers" like "each" and "if"

a comment in handlebars is {{!-- each, if --}}
{{#each something}}

<p></p>
{{/each}}

"Pug is the most extreme version," you can write a lot of code fast but it has a very high learning curve
indented
you don't write the tag with the karats
they get turned into html tags, we don't have to close them we just have to get indentation right

"body is a peer of head" (I like the way he talked about html here?)

explain req.body

save login info in a cookie to make it readily available
you can do the same with a session
cookie data is stored entirely on the browser, and the browser will send it up to the server every time a request is made
session data is stored on the server, and the browser is given basically a key for that data
cookies are built into express
every time this browser, whoever the response is sent to, every time they make a request they're going to send a cookie up so the server will have all that data available

"appended by urlencoded"

Cookie flow from form submission:
We'll have a cookie called "username" set to the username, which is coming from req.body.username, which is coming from the req object(request object, as in the app.post), which was appended by urlencoded (`app.use(express.urlencoded()`), which parsted the data that came from the form that the user submitted in login.ejs.
So the username submitted in the form got sent, urlencoded added it to req.body, by the time we got to the app.post function it was accessible in req.body, and now we stash it in a cookie in that post function, so that going forward we can access it on any page and we don't need to remember it since it's stored in the cookie.
Because when the user comes back we won't have access to req.body, since we have sent them to a different path. We will have gotten a totally different req and res object. Because HTTP IS STATELESS.

res.cookie
res.redirect

req.cookies (plural!)
need a cookie parser, cookie-parser middleware is an npm module install

"an anchor tag always points to a GET route"

where can I view cookies in dev tools? Application > Storage > Cookies > domain.name.com

Query String: a way to pass insecure data (since people can watch http traffic/internet traffic/router stuff). People can see URLs

the question mark "?" is almost like a delimiter inside of a URL where it says 'everything after me is part of the query string' 'everything before me is part of the path/domain/protocol whatever' then you have key=value pairs after the query separated by ampersands

ways to pass data around: through the URL (tokens in the query string), cookies

In a route, anytime something has a colon in front, it is a wildcard. Wildcard will match anything in that slot. app.get("/story/:storyId", (req, res, next) => {})
":" is just "something"
(Topic: there's a fine line between what's about networking and HTTP requests in general, and what's about Express.js. Combine both under Express, something like "Express and network requests?" idk)

req.params
res.download

express.Router()
the router object is kinda like a microservices architecture inside of your express app. It creates a little mini application. It's only job is to handle middleware and routes. It behaves like midleware, but its a really nice way to modularize your app.
Router works in its own little container, own folder.
express.Router() allows you to keep your app very clean. It also allows for smaller route-specific environments that can have middleware only available to those specific route files

app.use goes at the top of the application, and it is available at an application level. you set up the app calling express() and then put your app.use statements so that every req/res has access to these methods, is worked on by these methods
app.use: "we're about to add some middleware to our application"

app can do anything, but router allows us to modularize our application and create a nicer long-term modular architecture

the express-generator is a utility module you install globally and access from the command line with npm i express-generator -g
`which express` gives express commands
`express [newAppName]` will start the express project for you (a lot like `npm create vite@next`ls
kinda)
/bin is the actual entry point for the application. It will have your port info and imports app.js from module.exports = app;

express handles http traffic via node.js

we send http messages (start line, headers, blank line, body). We do not have control over what the other side will do with the message. curl might just print your message instead of making a website, a browser may not make a website. All we can do is follow the rules, the protocol
most of the important stuff is inside the headers
the response is an http message with a start, headers, body. other side can do whatever they want with that response, they can honor the headers/body, or they can not. all you can do is follow the rules inside the headers so the other side that made the request will know what to do with the data you sent
express.js methods for headers: req.accepts, req.acceptsCharsets, req.acceptsEncodings, req.acceptsLanguages, req.get, req.is, req.range, req.fresh, req.ip

res.set is how you set a header, res.get is its corresponding partner, that's how you get the value of a header
ex:

```js
router.get("/", function(req,res,next) => {
  const date = new Date(1969,6,20);
  res.set("Date", date);

})
```

- what are the most common general headers (ref: HTTP header)?
  Date, Cache-Control, Connection

- what's caching?

  the Cache-Control header is unidirectional, case-sensitive, different directives based on whether it's a request or a response

- what's fresh/stale?
  These belong to the request object: req.fresh, req.stale

the Accept HTTP header field (google's is Accept: `*/*`) (star slash star)

habit of using "req" instead of "request" because there is a very good and popular npm package called "request"

data accross an http message always comes back as a string, it doesn't come back as an object
http is not JavaScript. We don't get json back. It needs to tbe parsed.

Important Question: What has access to res.locals?

a form action will tell the browser where to send the form when it's submitted. It's submitted when someone hits enter on an input or uses the input tag that has the attribute submit.

use encodeURI() to avoid things like spaces that will not allow a url string to work

as soon as app is defined, call helmet with `app.use(helmet())`

- what is an endpoint? (this term confuses me)

explain req.params
any time you pull something out of the URL (for example, with `req.params.something`), it's going to be a string (so plan accordingly and cast the param as Number or use parseInt, etc.) or use "==" instead of "===". (This is a perfect usecase for == since an id number will be a string when we grab it from the url)

Q. How do you indicate something is a "wild card route" in express?
When defining a route, using the colon indicates anything after the colon in that segment(?) of the path is the part of the path. This is particularly useful for a route that goes to dynamic data, such as an id for a particular product.

What is "cast into a number"? Not familiar with this way of referring to data types (referring to Number(movieId))

(note the best practices of using "req" and "res" instead of the full word since there is an npm package called "request" that is typically used with Express)

what express middleware response function is used to render a javascript template engine such as EJS, Pug, Mustache, etc.?
`res.render(view)`. You also need `app.set("view engine", "ejs/pug/etc.")` to establish application setting properties.

res.render takes how many possible parameters and what are they?
`res.render(view [,locals] [,callback])`
(and a default for locals is sometimes a title variable for the view)
