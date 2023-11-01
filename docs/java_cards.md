# Memorize this stuff

Composition defines a "HAS A" relationship
Inheritance defines an "IS A" relationship
Encapsulation hides some of the implementation details from the calling code. We can avoid having the calling code interact with smaller parts.

## Composition

Inheritance defines an "IS A" relationship. Motherboard, ComputerCase, Monitor are all Products. A personal computer IS A product.

Now, COMPOSITION defines a "HAS A" relationship.

- Composition is actually modeling parts, and those parts make up a greater whole. So:
  Product -> PersonalComputer
  Product -> Motherboard, ComputerCase, Monitor
  PersonalComputer -> Motherboard, ComputerCase, Monitor
- we can model the "HAS A" relationship
- you can use a combination of composition and inheritance

- Java only lets you inherit from one class at a time. This is why we need composition!
- if you're using teh extends option to inherit, Java only lets you inherit from one class at a time. We'd run into difficulties and limitations quite quickly if our only tool was inheritance.
