(Topic: Networking)

What is a "cloud computer"?
Somebody else's computer. A network of computers talking to each other.

- What is a packet?
  Packets are data passed around, especially between client and server. If you make a server, you are responsible for handling these packets.

- What are the five layers that make up a packet?

HTTP in the application layer uses the transport layer, it uses TCP

Transport layer creates ports (65k of them!) on your computer (like localhost: 3000)
Transport layer protocols are called UDP and TCP

UDP is lightweight(8bytes) and connectionless. It just sends stuff irregardless of order, packet loss, network congestion etc. It's benefit is its speed and that it's lightweight, and you don't have to set up a connection.

- What's TCP?
  TCP Transmission Control Protocol
  TCP is connection-based. Three-way handshake. You have to initiate a connection.
  (- What's the three-way handshake?)
  3 steps: request to talk to the server, server response, if yes, connection is made and data is sent
  TCP is reliable.
  TCP has delivery acknowledgement. The server will let the client know that the data was recieved (and the client will let the server know as well).
  TCP has retransmission of data. The server can let the client know that data was not recieved.
  TCP allows us to do in-order packets. Avoids packet loss. Data rec'd in the right order regardless of the network.
  TCP has congestion control. Can introduce latency to avoid packet loss.

- What is the difference between TCP and UDP?
  TCP is reliable (HTTP), UDP is fast and can be unreliable (gaming, live communication, never latency)

TCP and IP create an environment that allow to machines to talk to each other

HTTP passes around digital files such as HTML, images, 4k videos, MP4s, etc. Originally HTML was created to pass around HTML.

HTTP is an efficient protocol. HTTP does not have to stay open, it's only connected when absolutely necessary. Once the request arrives, the machines disconnect until the responder is ready then the connection is made again.
HTTP is stateless. There is no dialogue. The machines only know about each other for as long as the connection is open. Previous "conversations" are forgotten.

- What are the components of an HTTP message?
  HTTP has a start line, header, and body.
  _there is always a blank line between the header and the body_

- What's the HTTP start line?
  The start line is a single line. Request with the method, path, protocol used. ex: `> GET / HTTP/1.1` then `< HTTP/1.1 200 OK`
  response might look something like this: http/1.1 and the status code you get back (404, 200)
- What is the HTTP header (rephrase)
  The header has meta data always in the form of key/value pairs.
  ex:

  ```bash
  > Host: www.google.com
  > User-Agent: curl/7.79.1
  > Accept: */*
  >
  ```

  response ex:

  ```bash
  < Date: Sat, 08 Jul 2023 15:50:58 GMT
  < Expires: -1
  < Cache-Control: private, max-age=0
  < Content-Type: text/html; charset=ISO-8859-1
  < Content-Security-Policy-Report-Only: object-src 'none';base-uri 'self';script-src 'nonce-JbqPWPskzC-_fbq2-nzDNA' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp
  < P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."
  < Server: gws
  < X-XSS-Protection: 0
  < X-Frame-Options: SAMEORIGIN
  < Set-Cookie: 1P_JAR=2023-07-08-15; expires=Mon, 07-Aug-2023 15:50:58 GMT; path=/; domain=.google.com; Secure
  < Set-Cookie: AEC=Ad49MVFGk2YJ8OPbUKvWwmW6APxNGYTKiRGPneCplmrRZe4tdmKtuZdix9U; expires=Thu, 04-Jan-2024 15:50:58 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=lax
  < Set-Cookie: NID=511=TPiB4b_omgYYwPe6T1uP-jn3YoX0KCod_Hj3zgGVXuRioMfSt0CHb2VOB4_-oDbklzl83kKZBLM46ywfFa1ieRJOxggq25C0x0Ua3MyJs0sgPNrYSsVJQt92qtuGchrmaVkhI0fn9-a8mrhY3P2k2Y_pyf4N6xKAshNlxUQfSIQ; expires=Sun, 07-Jan-2024 15:50:58 GMT; path=/; domain=.google.com; HttpOnly
  < Accept-Ranges: none
  < Vary: Accept-Encoding
  < Transfer-Encoding: chunked
  <
  ```

- body is the content

_another example:_

```bash
/Users/elb/Game/express/express101  $ curl -v localhost:3001
*   Trying 127.0.0.1:3001...
* Connected to localhost (127.0.0.1) port 3001 (#0)
> GET / HTTP/1.1
> Host: localhost:3001
> User-Agent: curl/7.79.1
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< content-type: text/html
< Date: Sat, 08 Jul 2023 16:29:18 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Transfer-Encoding: chunked
<
* Connection #0 to host localhost left intact
<h1>Hello, World!</h1>%
```

- list some mime-types

(kinda NodeJS and ExpressJS)

- What is our job as developers when it comes to network requests?
  It is our job to build the response object.

- What are the HTTP verbs?

- and how do they correspond to a CRUD app?
  get-READ
  post-CREATE
  delete-DELETE
  put-UPDATE
- the default for all browsers is GET

- what are some common mime-types? (HTTP)

(Topic: browser)
The browser can only read three things: HTML, JavaScript, and CSS

- What is "request-response" (aka "request-reply")?
  Request-response is one of the basic methods computers use to communicate with each other in a network: a computer first sends a request for some data, and the second responds to the request. It is a message exchange pattern in which a requestor sends a request message to a replier system, which receives and processes the request, ultimately returning a message in response. It is analogous to a telephone call, in which the caller must wait for the recipient to pick up before anything can be discussed. This is a simple but powerful messaging pattern which allows two applications to have a two-way conversation with one another over a channel; it is especially common in client-server architectures.
  This pattern

- What is CORS?
  Cross-Origin Resource Sharing is an HTTP-header based mechanism that allows a server to indicate any origins other than its own from which a browser should permit loading resources. CORS uses a mechanism where browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. CORS is a security feature providing HTTP access control.
  Same-origin requests are always allowed, Cross-origin requests are controlled by CORS.

  The CORS standard works by adding new HTTP headers that let servers describe which origins are permitted to read that information from a web browser.

- What is a 304 response code?
  "304 Not Modified" indicates theres' no need to retransmit the requested resources. It is an implicit redirection to a cached resource.

- What is a 500 response code?
  "500 Internal Server Error" is a server error response code that indicates that the server encountered an unexpected condition that prevented it from fulfilling the request. It is a generic "catch-all" response. Usually this indicates that the server can't find a better 5xx error code response.
