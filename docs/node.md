the http module is part of node.js, we don't have to install it

`console.log(req.url);`
the url property is the path relative to the root domain that the user is on, or that the request hit
the req object has "/" in the url property

---

Ryan Dahl and his Node.js retrospective at JSConf in 2019, wherein he also introduces his new project Deno:
Initial goals:
Event-driven IO in JavaScript, & making server-side JavaScript a thing.
(Since JavaScript is single threaded, it requires an event loop to have non-blocking input/output operations)
In 2012 goals achieved: network support/functionality for HTTP protocols and other network protocols, worked on Windows Linux and Mac, wasn't too big, was pretty stable, community was contributing to node package manager significantly.
(list of thanks to people who did significant things for node)

He says GO was better for fast servers and he didn't think he needed Node.
but then says dynamic languages are nice. Says JavaScript is the best dynamic language.

He feels he introduced these bugs to Node.js, "design mistakes" and there's no going back because so much software relies on Node.
Should have stuck with Promises. Initially didn't like the extra object Promises intruduced. But Async Await might have been easier to adopt.
JavaScript is a secure sandbox, but there's no security in Node. Missed the opportunity to make a very secure SSR.
Biggest regret is the build system. Gyp compiles the C library to link it into Node. Chrome/V8 used GYP initially which is why he used it, but V8 moved on and now Node is the sole user. Unneccessary complexity.
Compiling extension models instead of something like a foreign function interface
Linking to system libraries was a rash choice
(idk LBUV moving to autotools?)
package.json and boilerplate noise
allowing "require" semantics in Node to look into the package.json file, requiring package.json
making npm the standard distribution (is this a regret? I can't tell if it's just the package.json bit)
module resolution algorithm requires the "require" langauge in your program to look at the package.json, and a node_modules folder to do the module resolution. Linking to a package requires a lot of systems and components
the module as a directory of files was not an initial architectural choice/preference
not a necessary abstraction
"I feel like a bookkeeper or something"
node_modules gets big
He regrets node_modules, and the "vendored-by-default" (making your own copy of a third party package and having it placed inside the project saved in the project repository)
the algorithm for resolving node modules is wildly complex

---

body-parser is Node.js middleware

---

What is the tool "Passport"?
Passport is authentication middleware for Node.js. You use Passport because you have users, and those users need to be able to do login. It is almost always used with Express.js since Express.js is also almost always used when using Node.

What is OAuth?
"access delegation"
We have the big "trustworthy & secure" companies stand between us and the user, and ask the companies who are holding the user's data to give us someof that data. Instead of having a user come up with a new username and password, we use a company that's using the OAuth standard as a middleman.
github(for instance) issues a client ID, secret, callback.
Client ID is like a public key, the secret is our password, the callback is the only place that github will send users after they have been authenticated
user goes to github with our client ID. Leaves our site, asks github to login.
Series of checks and balances to make sure somebody isn't spoofing our app so between our app and github, and then the conversation between user trying to login and github so nobody's spoofing the user, and etc.

with Passport all you have to do is put in the secret and the client id

Authorization Server, Resource Server

how does process.env function to store apikeys and what's the value of dotenv install and dotenv files
