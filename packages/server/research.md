[TS Express and Prisma](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-express)
[Express examples page](https://expressjs.com/en/starter/examples.html#additional-examples)
[maybe helpful walkthrough?](https://www.youtube.com/watch?v=5xc7-uj1cxQ)
[a lot of really awesome stuff here](https://www.linode.com/docs/guides/express-js-tutorial/)
[lovely opinions](https://stackoverflow.com/questions/5778245/expressjs-how-to-structure-an-application)

1. Any super-important application-wide middleware
2. All your routes and assorted route middlewares
3. THEN error handlers

## on TS:

note: "The error you are encountering occurs because the app.use() method expects a middleware function as a parameter, but you are passing requestTime directly. To fix this issue, you need to wrap the requestTime function in another function that serves as a middleware. Here's an example of how you can modify your code"

## Consider Adding:

[PUG](https://pugjs.org/api/getting-started.html)
npm install cookie-parser [ref](https://expressjs.com/en/guide/using-middleware.html)
