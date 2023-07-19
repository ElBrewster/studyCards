(Topic: Big Oh notation and "dominance relations")

- The Big Oh notation groups functions into a set of classes, such that all the functions in a particular class are equivalent with respect to Big Oh.

- List the 8 common function classes in their order of increasing dominance:
  Constant functions, Logarithmic functions, Linear functions, Superlinear functions, Quadratic functions, Cubic functions, Exponential functions, Factorial functions
  or: n!>> 2^n >> n^3 >> n^2 >> n log n >> n >> log n>> 1

- It is said that a faster growing function "dominates" a slower one. List the 8 common function classes using this terminology.

(Topic: Big Oh notation and

- simplifying expressions)
  The sum of two functions is governed by the dominant one. Dropping the smaller function from consideration reduces the value by at most a factor of 1/2, which is just a multiplicative constant.

Multiplying a function by a constant cannot affect its asymptotic behavior.

(Topic: Function types)

A logarithm (anagram of algorithm) is simplky an inverse exponential function. Logarithms arise in any process where things are repeatedly halved. While exponential functions grow at a "distressingly fast rate", logarithms grow refreshingy slowly.
"Logarithms arise whenever things are repeatedly halved or doubled"
We are usually justified in ignoring the base of a logarithm when analyzing algorithms. (on the topic of Big Oh)

(Topic: Data Structres)

What are the three fundamental abstract data types? containers, dictionairies, priority queues
