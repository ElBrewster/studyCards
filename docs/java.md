# Java

## Resources

[effective java book pdf](https://ia801009.us.archive.org/16/items/effectivejava2017addisonwesley/Effective%20Java%20%282017%2C%20Addison-Wesley%29.pdf)
[docs](https://docs.oracle.com/en/java/javase/17/docs/api/index.html)

## Mems

- In Java, a software object stores its state in fields (aka attributes, instance variables)

## why do I like Java?

- it lends itself to testing, it's easy to map up what you want your code to do in Main and then to have confidence in what you've written, very easy to troubleshoot
- lends itself to readable code, I don't find it too verbose
- I love encapsulation, that you can call one method and that method will do a ton of work with subclasses and override methods and you don't have to see that, it is all in the background if you've written it well

## Course Notes

- What is a statement?
  A statement is a complete command to be executed. It can include one or more expressions.

- Is Java case-sensitive?
  In Java all code is case-sensitive, including keywords, language syntax, variable names, and data types.
  "int" is not the same as "Int"

- What is a declaration statement?
  A declaration statement is used to define a variable by indicating the data type, and the name, then optionally to set the variable to a specific value.

- What is an expression?
  An expression is a coding construct, that evaluates to a single value.
  The expression is the code segment that is on the right side of the equals sign in an assignment or declaration statement.

- What is a keyword?
  A keyword is any one of a number of reserved words, that have a predefined meaning in the Java language.

- List the reserved keywords from Java 17:
  abstract, assert, boolean, break, byte, case, catch, char, class, const, |
  continue, default, do, double, else, enum, extends, final, finally, float, |

  for, if, goto, implements, import, instanceof, int, interface, long, native, |

  new, package, private, protected, public, return, short, static, strictfp, super, |

  switch, synchronized, this, throw, throws, transient, try, void, volatile, while |

_---jshell --------------------------------------------------------_

To execute multiple lines of code as a set in JShell, put multiple statements on one line, or start with an opening curly brace and press enter.

```java
jshell> {
   ...>     String numberStr = "250.55";
   ...>     numberStr = numberStr + "49.45";
   ...>     System.out.print(numberStr);
   ...> }
250.5549.45
jshell>
```

if you want to emulate a Java program, which will only output the final result of the lines of code run, use the curly braces

Comments are ignored by the computer and are added to a program to help describe something. We used two forward slashes in front of any code, or on a blank line. Anything after the two forward slashes, right through the end of the line, is ignored by the computer.

_---IntelliJ IDEA --------------------------------------------------------_

IntelliJ IDEA, is one of several IDE's available for Java. It's also written in Java, developed by JetBrains, and simply known as IntelliJ.

_---variables --------------------------------------------------------_

What are variables?

Variables are a way to store information in our computer.
Variables that we define in a program can be accessed by a name we give them, and the computer does the hard work of figuring out where they get stored in the computers random access memory (RAM).

- How do you specify a variable?
  In jshell, specify the data type and then give the variable a name (, and optionally assign it to a value). ex: `int myFirstNumber = 5;`

Once you declare a variable, you cannot redeclare it in a normal Java code block even if you're redeclaring it with the exact same data type.
By declaring a variable again, we are effectively re-declaring a variable, and in normal Java programming, that would not be allowed, and would throw an error.

Rules for declaring multiple variables in one statement:

1. You cannot declare variables with different data types in a single statement.
2. If you declare mutliple variables of the same data type in a single statement, you must specify the data type only once before any variable names.

_---casting -------------------------------------------------------------_

Casting means to treat or convert a number, from one type to another. We put the type we want the number to be in parentheses:
`(byte) (myMinByteValue / 2)`

```java
jshell> float myOtherFloatVal = (float) 5.25;
myOtherFloatVal ==> 5.25
```

_---primitive data types ------------------------------------------_

- What are primitive types in Java?
  In Java, primitive types are the most basic data types. There are 8 primitive data types in Java:

* Whole number: byte, short, int, long
* Real number (floating point or decimal): float, double
* single character: char
* Boolean value: boolean

primitive data types are simply placeholders in memory for a value

- What are the primitive data type keywords?
  boolean, byte, char, double, float, int, long, short

---numbers-------------------------------------

- What is an integer?
  An integer is a whole number, meaning it doesn't contain a fractional element or a decimal. There's a specified range of values allowed for the int, a defined minimum and maximum value. The allowable range of values is not infinite.

( What is a "numeric literal"?? )

- What are the four primitive data types used to store whole numbers in Java?

1. byte (Wrapper Class "Byte") -has the smallest range-
2. short (Short)
3. int (Integer) -Java's default data type for whole numbers-
4. long (Long) -has the largest range-

Size, or Width, is the amount of space that determines/limits the range of these whole number values.

1. byte. width: 8 bits -128 to 127
2. short. width: 16 bits -32768 to 32767
3. int. width: 32 -2147483648 to 2147483647

- When is L required?
  A numeric literal that exceeds Integer.MAX VALUE must use the "L" suffix.
  We cannot create a numeric literal in Java, that exceeds Integer.MAX_VALUE, without using the "L" suffix, we'll always get the error "integer number too large".

- What's Overflow and Underflow?
  If you try to put a value larger than the maximum value into an int, you'll create an "Overflow situation". Same with a value smaller than the minimum value of int, you create an "Underflow situation". These are known as integer wraparounds.

  The maximum value, when it overflows, wraps around to the minimum value, and just continues processing without an error. The minimum value, when it underflows, wraps around to the maximum value, and continues processing.

  If you assign a numeric literal value to a data type that is outside of the range, the console gives you an error. If you assign an expression, the compiler will try to evaluate it and will create an overflow/underflow situation.

Floating-point numbers have fractional parts that we express with a decimal point.
The "float" and the "double" are two primitive types in Java used to express floating-point numbers.
The "double" is Java's default type for any decimal or real number.

"Precision" refers to the format and amount of space occupied by the relevant type.

Java's Scientific Notation. Replace the E with the phrase "times 10 to the power of"
so 1.4E-45 is 1.4 _ 10^-45, 3.4E38 is 3.4 _ 10^38

A "double" can represent a much smaller decimal value, and a much larger decimal value. This makes it more precise. Since it's more precise, the double is the default for floating point numbers.
---> Any number with a decimal is a double by default in Java
optionally you can you can use the suffix d or D for clarity

The float data type can be specified as a numeric literal with a suffix of lowercase 'f' or uppercase 'F'. The suffix is required if you are assigning a real number to a variable that was declared with a float type.
`float myFloatVal = 5.25f;`
Floats are not preferred, double is the preferred data type
A common exam gotcha: `float myFloatVal = 5.25;` since 5.25 here is a double. Assigning it to a float will raise an error.

for whole numbers, the output is never in scientific notation, but for real numbers it can be. Instead of 50000000.0, it might be 5.0E7

for floats and doubles, the number stored in memory is more precise than the output

with division, as long as one of the operands is a double, the output will be a double:

```java
jshell> myDoubleValue = 5.00/3;
myDoubleValue ==> 1.66666666666666667
```

best practices to use the suffix d/D even when assigning the datatype with "double"

- Why is the double a better choice in most circumstances?
  First, it's actually faster to process on many modern computers. Computers have, at the chip level, the functionality to deal with these double numbers faster than the equivalent float.
  Java libraries, particularly with math functions, are often written to process doubles, and not floats, and to return the result as a double.
  The creators of Java selected the double because it's more precise, and it can handle a larger range of numbers.

on Precision:
In general float and and double are great for general floating point operations. But neither should be used when precise calculations are required. This is due to a limitation with how floating point numbers are stored, and not a Java problem as such.
Java has a class called BigDecimal that overcomes this.

---char-------------------------------------

char is different from a string. Char holds one, and only one character, literal enclosed in single quotes.
Whereas a string can hold multiple characters and literal enclosed in double quotes.

- Why would you want to use a variable that only allows you to store one character?
  Perhaps to store the last key pressed by a user in a game, to loop programmatically through the letters in an alphabet. This was more relative in the 90s when we needed to save memory.

A char occupies two bytes of memory, so 16 bits, and thus has a width of 16. A char is stored as a 2 byte number.
This number gets mapped to a single character by Java.When you print a char, you will see the mapped character and not the representative number.

- What are the three ways to assign a value to char?
  Use the literal character, a Unicode value, or the integer value for the character you want to assign to your char variable.

You can use unicode to assign a symbol to your char variable like so:

```java
jshell> char myUnicode = '\u0044';
myUnicode ==> 'D'
```

You can use the decimal or digit already assigned to it:
char myChar = 68;

and of course the single quote with the letter typed out
char myChar = 'D';

[possibly helpful unicode list from Wikipedia](https://en.wikipedia.org/wiki/List_of_Unicode_characters)

When you use the plus operator with chars, it is the numbers in memory that get added together.

```java
jshell> char charOne = 'd';
charOne ==> 'd'

jshell> char charTwo = 'd';
charTwo ==> 'd'

jshell> System.out.print(charOne + charTwo);
200
jshell> char charThree = 'r';
charThree ==> 'r'

jshell> System.out.print("" + charOne + charTwo + charThree);
ddr
jshell>
```

---boolean-------------------------------------
In Java terms, we've got a boolean primitive type, and it can be set to two values only, either true or false. The wrapper for boolean is Boolean.

Developers often use prefixes to ask the boolean question, like "is". Some boolean variable best practices name examples:
isCustomerOverTwentyOne
isEligibleForDiscount
hasValidLicense
isMarried
hasChildren
These clearly define what condition is being tested.

_---handling data in Java ------------------------------------------_

int, double, and boolean are the most probable primitive data types we will see on the job

We'll use Java's primitives, built-in Classes (Wrappers, BigDecimal, String), your custom classes, and others' custom classes

---string-------------------------------------

- What is a String?
  A String is a class that contains a sequence of characters.
  You can use unicode just like with char:

```java
jshell> myString = "I wish I had \u00241,000,000,000.00";
myString ==> "I wish I had $1,000,000,000.00"
```

When applied to a String, the "+" operator means concatenation. A String + anything else, gives us a String as a result, concatenating anything after the String as text to the initial String.

```java
jshell> String str = "50";
str ==> "50"

jshell> int strInt = 50;
strInt ==> 50

jshell> System.out.print(str + strInt);
5050
jshell> str = str + strInt;
str ==> "5050"
jshell>
```

Strings are immutable: you can't change a String after it's created. When concatenating more text to a pre-existing declared String, Java creates a new string from the concatenated value and discards the previous value of the String variable.
The String class is immutable, but can be used much like a primitive data type.
The StringBuilder class is mutable, but does not share the String's special features, such as being able to assign it to a String literal or use the + operator on it.

Both String and StringBuilder are classes, but the String class is in a special category in the Java language.

"The String is so intrinsic to the Java language, it can be used like a 9th primitive type."
However, it's not a primitive type at all, it's a class.

_---readability--------------------------------------------------------------_

Rule: In Java, you cannot put commas in a numeric literal.
You can however use an underscore to achieve the same goal of readability.

You can use parenthese to make your code more readable:

```java
longTotal = 50000L + (10 * sumOfThree);
short shortTotal = (short)(1000 + 10 * (byteVal + shortVal + intVal));
```

_-----------------------------------------------------------------------------_

_---operators ----------------------------------------------------------_

- "=" is an assignment operator

- What are operators?
  Operators perform an operation on a variable or value. Addition, subtraction, division and multiplication are four common operators.

- the "+" can be used with System.out.print to print different data types together as a single line of text.
  For instance if we want to print a label, whatever follows the plus sign in the System.out.print is converted to a String by Java and concatenated to teh String before it.
  `System.out.print("Integer Minimum Value =" + myMinIntVal);`

operators, operands, expressions

- What are operators in Java;
  Operators in Java are special symbols that perform specific oprations on one, two, or three operands, and then return a result.

- What is an operand?
  An operand is a term used to describe any object that is manipulated by an operator.

  the operands in the following code are 15, 12, 50000L, 10L, byteValue, shortValue, intValue

```java
int myVar = 15 + 12;
long longTotal = 50000L + 10L * (byteValue + shortValue + intValue);
```

- What is an expression?
  An expression is formed by combining variables, literals, method return values, and operators. They are a way of forming and combining those values to produce a result. in `int myVar = 15 + 12;` "15 + 12" is the expression

modulus/modulo/mod is the remainder operator %

the most common operators are + - `*` `/` % and require 2 operands

Incrementing by one: we can use the Post-fix increment operator ++ `result++;`
or the Compound Assignment Operator with the + sign `result+=1;`

Post-fix decrement operator --
and the Compound Assignment Operator with the - sign `result-=1;`

What is a pitfall using the compound assignment operators?
x -= y
is really x = (data type of x)(x - y)
an implicit cast is done when using this operator
Example:
`result -= 5.5;` is really
`result = (int) (result - 5.5);`

```java
jshell> {
   ...>     double res = 10;
   ...>     res -= 5.5;
   ...>     System.out.print("result = " + res);
   ...> }
result = 4.5
jshell>
```

you can also use `*=` and `/=` compound operators
_---class--------------------------------------------------------------_

- What is a class?
  A class is a building block for object-oriented programming, and allows us to build custom data types.

- What is a wrapper class?
  Java uses a wrapper class for each of its eight primitive data types. A wrapper class provides simple operations, as well as some basic information about the primitive data type, which cannot be stored on the primitive itself.

- List the primitive types and their Wrapper Classes:
  byte/Byte
  short/Short
  char/Character*
  int/Integer*
  long/Long
  float/Float
  double/Double
  boolean/Boolean

32n30w

g3, e2 f2
_-----------------------------------------------------------------------_

```java
jshell> long myLongVal = 50000 + 10 * ((byte) myByteVal + (short) myShortVal + (int) myIntVal);
myLongVal ==> 1161470
```

his answer:

```java
jshell> long longTotal = 50000L + 10L * (byteVal + shortVal + intVal);
longTotal ==> 50800
```

---8-10-23

He recommends using PascalCase for project names

`psvm` + tab shortcut for `public static void main(String[] args){}`

"0" frequently used to indicate there's no problem, so "Process finished with exit code 0" in the printout of the terminal means everything went well

access modifier

The `public` Java keyword is what's called an "access modifier". An access modifier allows us to define which parts of our code, or even someone else's code, can access a particular element.

CLASS
The "class keyword" is used to define a class. The class name will be the text following the keyword, so FirstClass would be like:

```java
public class FirstClass {

}
```

^ the left and right curly braces are used to define the 'class code block' or 'class body'

a "method" is a collection of statements, one or more, that perform an operation.
We're learning a special method called the "main method" that Java looks for when running a program. It's the entry point for any Java code, and Java looks for the main method to start and run the program when we use it.

"static" is something for object oriented concepts (unexplained so far)
"void" is used to indicate the method won't return any information
parens are mandatory for method declaration

a class has got the body block of code, the method has its own code block
System.out.print();
System.out.println(); "printlin" makes the next print go to the next line instead of concatenating all your system.out.prints

## if-then

The if-then statement is the most pasic of all the control flow statements. It tells your program to execute a certain section of code, only if a particular test evaluates to true. It uses "conditional logic".

"Conditional logic" uses specific statements in Java to allow us to check a condition, and execute certain code based on whether that condition (the expression) is true or false.

one = is an asignment operator. It assigns the value of an expression to the variable to the left of the operator

two =, == is the Equality Operator. It tests to see if two operands are considered equal, and returns a boolean value.
isAlien == false is like !isAlien

A code block allows more than one statement to be executed. if (expression) { };

he showed this clunky version first:

```java
if (isAlien == false)
  System.out.println("It is not an alien!");
```

(I feel like this was a weird way to show an exception first? always use {}?)

!= is 'not equal to'

<= >=

&& is the Logical 'and' which operates on boolean operands - Checking if a given condition is true or false
the & is a bitwise operator

|| is the Logical 'or' which operates on boolean operands, checking if a given condition is true or false
| is a bitwise operator like &, and I think he's just being thorough by sharing these?

The exclamation mark(!), or NOT operator, aka the "Logical Complement Operator". It can be used with a boolean variable, to test for the opposite value.

using the ! is more concise and more readable

the "Ternary Operator" is (Condition?: Operator)
The ternary operator (Java officially calls it the "Conditional Operator") has three operands, the only operator currently in Java that does have three.
The structure of this operator is:
operand1 ? operand2 : operand3

The ternary operator is a shortcut to assigning one of two variables to a variable, depending on a given condition. It is a shortcut of the _if-then-else_ statement

Java Operator Precedencce Table

### Java's Code Units

- EXPRESSION: an expression computes to a single value (no semicolon)
- STATEMENT: statements are stand alone units of work
  (can be assignment expressions. we add the data type and a semicolon)
  4 complete statements:

  ```java
  int myVariable = 50;
  myVariable++;
  myVariable--;

  System.out.println("This is" +
            " another" +
            " still more"
            );
  ```

- CODE BLOCKS: a code block is a set of zero, one, or more statements, usually grouped together in some way to achieve a single goal

### Whitespace

Whatspace is any extra spacing, horizontally or vertically, placed around Java source code.
It's ususally added for readability. All extra spaces are ignored in Java.

## Control Flow, Control Flow Statements

We must be able to determine the flow of our program: what should be executed, and under what conditions?

switch stmt, for stmt, while stmt, do while stmt

- switch:

```java
int switchValue = 1;
switch(switchValue) {
  case 1:
    System.out.println("Value was 1");
    break;
  case 2:
    System.out.println("Value was 2");
    break;
  case 3: case 4: case 5:
    System.out.println("Was a 3, a 4, or a 5");
    System.out.println("Actually it was a " + switchValue);
    break;
  default:
    System.out.println("Was not 1, 2, 3, 4, or 5");
    break;
}
```

- default is a lot like the else block
- if/if else/else is more flexible because you can test different criteria, a different variable altogether;
- switch is good to use if we are testing the same variable and we want to test different values for that variable
- you can group cases together on one line; we can group our case tests together into one line effectively, which makes it a lot easier to group values which will have the same behavior
- limited value types for switch stmt: byte, short, int, char, Byte, Short, Integer, Character, String, enum
- (can't use long, float, double, boolean!)
- once a switch case label matches the switch variable, no more cases are checked
- any code after the case label where there was a match found, will be executed, until a break statement, or the end of the switch statement occurs
- without a break statement, execution will continue to fall through any case labels declared below the matching one, and execute each case's code
- if you forget the break statement, you may get unexpected/unwanted results

- enhanced switch statement:
- no colons, break statement not neaded, commas in lists instead of additiona case keyword use
- if your code needs to be backwards compatable stick to traditional switch

```java
switch(switchValue) {
  case 1 -> System.out.println("Value was 1");
  case 2 -> System.out.println("Value was 2");
  case 3, 4, 5 -> {
    System.out.println("Was a 3, a 4, or a 5");
    System.out.println("Actually it was a " + switchValue);
  }
  default -> System.out.println("Was not 1, 2, 3, 4, or 5");
}
```

- instead of with a primitive type, a String for our switch and case values:
- also instead of a `break;` statement, a `return` statement. This works like a break since the code will exit the switch statement and the method at this point. there's no chance to fall through the switch:
- we don't need a default statement because we can use the one in the method

```java
public static String getQuarter(String month) {
  switch (month) {
    case "JANUARY":
    case "FEBRUARY":
    case "MARCH":
        return "1st";
    case "APRIL":
    case "MAY":
    case "JUNE":
        return "2nd";
    case "JULY":
    case "AUGUST":
    case "SEPTEMBER":
        return "3rd";
    case "OCTOBER":
    case "NOVEMBER":
    case "DECEMBER":
        return "4th";
  }

  return "bad";
}
```

- enhanced switch statement version:
- notice the return in front of the switch statement:
- what's sublte here, but very important, is that this switch statement is really an expression, meaning it resolves to a single expression, meaning it resolves to a single value and can be assigned to a variable, or in this example, returned from a method:

```java
public static String getQuarter(String month) {
  return switch(month) {
    case "JANUARY", "FEBRUARY", "MARCH" -> "1st";
    case "APRIL", "MAY", "JUNE" -> "2nd";
    case "JULY", "AUGUST", "SEPTEMBER" -> "3rd";
    case "OCTOBER", "NOVEMBER", "DECEMBER" -> "4th";
    default -> "bad";
  }
}
```

- it's a good idea in almost all cases to include a default label so that you cover all possible returns

- "We can use method results anywhere the expression is used"
- (an expression resolves to a single value and can be assigned to a variable)

### yield in a switch stmt

- yield keyword:

```java
public static String getQuarter(String month) {
  return switch(month) {
    case "JANUARY", "FEBRUARY", "MARCH" -> "1st";
    case "APRIL", "MAY", "JUNE" -> "2nd";
    case "JULY", "AUGUST", "SEPTEMBER" -> "3rd";
    case "OCTOBER", "NOVEMBER", "DECEMBER" -> "4th";
    default -> {
      String badResponse = month + " is bad";
      yield badResponse;
    };
  }
}
```

- when to use yield in a switch:

  - your switch stmt is being used as a switch expression returning a value
  - your case label uses a code block, with opening and closing curly braces
  - ex: `case "JANUARY", "FEBRUARY", "MARCH" -> { yield "1st"; }`

- if the switch stmt permits fallthrough to occur, it can't be used as an expression

- because we are assigning the switch statement to a variable, we put a semicolon at the end of the switch statement:

```java
public static void printWeekDay(int day) {
  String dayOfWeek = switch (day) {
    case 0 -> "Sunday";
    // also valid syntax (but generally for a code block where are we doing additional calculations):
    case 1 -> { yield: "Monday"; }
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    case 4 -> "Thursday";
    case 5 -> "Friday";
    case 6 -> "Saturday";
    default -> "Invalid Day";
  };
}

```

see also this loop:

```java
public class Main {
  public static void main(String[] args) {
    for(int i=1; 9 <= 5; i++) {
      Student s = new Student("S92300" + i,
      switch (i) {
        case 1 -> "Marry";
        case 2 -> "Carol";
        case 3 -> "Asher";
        case 4 -> "Harold";
        case 5 -> "Arun";
        default -> "Anonymous";
      },
      "05/11/1985",
      "Java Masterclass");
    }
  }
}
```

you need a `default` case label defined. In this loop default will never be true, but the default label is required for the switch expression when it's used with a numeric switch value. It requires that all possible values be resolved. And with numeric switch value the only way to do this is whit a default label like this

### Looping

for, while, do while

- the for loop is more complex to set up but is commonly used when you are iterating over a set of values.
- the while loop executes until a specified condition becomes false
- the do while loop always executes at least one and continues until a specified condition becomes false

#### the for statement

aka, the for loop

```java
for(init; expression; increment) {

}
```

- the initialization section declares or sets states, usually declaring and initializing a loop variable, before the loop begins processing.
- the expression section, once it becomes false, will end the loop processing.
- the increment section is executed after the expression is tested, and is generally the place where the loop variable is incremented

```java
public static void main(String[] args) {
    for(int counter = 1; counter <= 5; counter++;) {
      System.out.println(counter);
    }

}
    public static double calculateInterest(double amount, double interestRate) {
      return (amount * (interestRate / 100));
    }
```

- i is short for "the iteration variable", and j then k are also used for loop variables (it's very common practice in many languages)
- the break statement transfers control out of an enclosing statement
- we used it in the switch statement, but it can also be used in the loop statement

- don't forget best practices to use "is" in method naming if you're returning a boolean: `isPrime(7)`

### while loops

while: continue executing code block until the loop expression becomes false
do while: execute the code block once, then continue executing until the loop condition becomes false

the while statement only supports one expression, and doesn't support initialization or the increment code as part of the declaration
there is also no place for the declaration of a temporary variable in the declaration of the while statement
so usually do it right before the while loop:

```java
int j = 1;
while (j <= 5) {
  if ( j > 5 ) {
    break;
  }
  System.out.println(j);
  j++;
}
```

the do while statement will always execute the code block at least once, and that's because the loop expression isin't tested until after the loop code block executes:

```java
do {
  // block of statements
} while (expression);
```

```java
int j = 1;
boolean isReady = true;
do {
  if (j > 5){
    break;
  }
  System.out.println(j);
  j++;
  isReady = (j > 0);
} while (isReady);
```

do while needs a semicolon at the end!!!
do while seems good when you want a boolean in the 'while' argument, like for validations

#### the continue statement

this will skip 25:

```java
int number = 0;
while (number < 50) {
  number += 5;
  if (number % 25 == 0) {
    continue;
  }
  System.out.print(number + "_");
}
```

(reference "REMAINDER OPERATOR" same as modulo? )

with 'while loop incrementing' you often want the increment to be the first thing you do becasue it's easy to end up with an endless loop

while statement compared to for loop, where initialization, condition and increment are merely on different lines:

```java
int count = 1; // init
while ( count >= 5) { //condition
  System.out.println("count = " + count);
  count++; //increment
}
// init, condition, increment
for(int i = 0; i <= 5; i++) {
  System.out.println("i = " + 1);
}
```

### Local Variable

A local variable is called local, because it is available for use by the code block in which it was declared. It is also available to code blocks that are contained by a declaring block.

```java
{ // starts on outer block, for example a method block:
  int firstVariable = 5;
  int secondVariable = 10;

  if (firstVariable > 0) { // flow statement block starts inner block
  //inner block code has access to outer block's variables
    System.out.println(secondVariable);
  }
}
```

This accessibility is also known as "variable scope"
Scope describes the accessibility of a variable.
'In scope means the variable can be used by an executing block or any nested blocks.
'Out of scope' means the variable is no longer available.
Local variables are always in scope, in teh block they are declared.
They are also in scope for any nested blocks, or blocks contained within the outer block.
A method block can declare local variables, and any flow statements contained in teh method block will have access to the method's local variables.
This is also true for the parameters.

(Consider replacing deeply nested code blocks with method calls )

```java
public static void aMethod(boolean aBoolean) {

  if (aBoolean) {
    int myCounter = 10;
  }

  System.out.println(myCounter); //myCounter is out of scope, because it is declared in the if statement code block. It would need to be declared in the aMethod code block for the println statement to have accessd to it.
}
```

### Scope Best Practices

- declare and initialize variables in the same place if possible.
- declare variables in the narrowest scope possible. (if your variable is only used in a nested block, declare it there)

variables declared in initialization or insie loops only exist and are accessible in memory while the loop is executing, and only to the loop code block

- in a switch statement, variables are available in the case lable code blocks, but only in the code after the variable is declared

```java
public static void aMethod(int value) {
  switch (value) {
    case 1:
      int i = 10;
      break;
    default:
      i = value; // default code block has access to 'i' declared in case 1 block
      System.out.println(i);
      break;
  }
  System.out.println(i); //this will resolve in an error, as 'i' is only accessible inside the switch statement
```

## class, object, static, and instance fields and methods

In addition to local variables, we can set up data to be defined, and used as part of a class or an object
Attributes on classes is another way to store data
(analogies of class: form, template, cookie-cutter)

- a class can be described as a custom data type, a special code block that contains methods, unique role of creating objects in memory
- a class is like an empty form. It describes information, or placeholders, for data that'll be filled in, when that form is given to a unique individual
  (analogy:)
- the empty form (the class) is the template for the data to be collected
- the populated form (teh object) may be completely different each time because of the values used to fill in the data
- the data being collected is determined by the class ("form")

an object is called an instance of a particular class (using instance and object interchangeably)
an object is created by instantiating a class

#### new keyword

- the new keyword creates an instance, and you can sometimes pass data, when creating an instance, to set up data on that object

these are effectively the same:

```java
String s = "Hello";
String w = new String("Hellow");
```

#### static and instance fields & methods

static field:

- requires 'static' keyword when declared on the class
- value of the field is stored in special memory location and only in one place
- value is accessed by ClassName.fieldname (ex: Integer.MAX_VALUE)

instance field:

- omits 'static' keyword when declared on the class
- value of the field is not allocated any memory and has no value until the object is created
- value is accessed by ObjectVariable.fieldname (ex: myObject.myFieldName)(myObject is our variable name for an object we create and myFieldName is an attribute on the class)

(using dot notation suddenly, glad i know it)

So with the Integer wrapper, we had methods stored on the class, not the instance of it: Integer.MAX_VALUE, Integer.MIN_VALUE, Integer.SIZE

static method:

- requires 'static' keyword when declared on the class
- method is accessed by ClassName.methodName
- ex: Integer.parseInt("123");
  ^ a method called parseInt is called directly from the Class 'Integer'

instance method:

- omits 'static' keyword when declared on the class
- method is accessed by ObjectVariable.methodName
- ex: "hello".toUpperCase();
  ^ a method called toUpperCase is called on the instance of a String with value "hello"

to use an instance method, you have to create an instance/object first

what operators are applicable to strings?
( + )
if you " + " an int and a String, they are concatenated not added

static method on the wrapper class Integer: parseInt(String)
static method on the wrapper class Double: parseDouble(String)

## Reading data from the console

`System.in` like `System.out`, Java provides System.in which can read input from the console/terminal
`System.console` reading a single line and prompting user for information. Doesn't worth with IDEs
"Command Line Arguments" : This is calling the Java program nad specifying data in the call. this is very commonly used but doesn't let us create an interactive application in a loop in Java
`Scanner` the Scanner class was built to be a common way to read input, either using System.in or a file. Much easier for beginners to understand than the bare bones System.in

"System.console().readLine() method" "System dot console dot readline method"
`String name = System.console().readLine("Hi, What's your Name?")`
then in terminal do java src/Main.java and it runs the console command? and you type in your name and it prints out the next line that uses the String name assignment?

Exception handling and using Scanner
normally System.console() would return an object that is a wrapper to System.in, but IDEs disable this
so we have to catch and handle this exception

- an exception is an error that happens in code. Some types of errors can be predicted and named
- there are many named exceptions, and you can go see these on the JDK's exception API page
- an exception is caught by creating a code block around the code that might get the error. This is done with a try statement code block.

### try statement

- the try statement has two code blocks: the try block and the catch block
- the first is declared directly after the try keyword, and this code block ends, and is followed by the declaration of the catch keyword
- the catch keyword includes the declaration of variables, in parentheses, and then has its own code block
- the catch delcaration includes the type of error and a variable name. See here the type declared is "Exception" with variable name "e" (can be any variable name)

```java
try {
  //statements that might get errors
} catch (Exception e) {
  //code to "handle" the exception
}
```

(in his example the Exception is "NullPointerException" so `catch (NullPointerException e) {}`)

### the Scanner class

- the Scanner class is described as a simple text scanner, which can parse primitive types and strings
- to use the Scanner class we have to create an instance of Scanner
- this is creating an object of type Scanner
- we use the keyword 'new' to do this

- the new keyword is used in what Java calls a _"Class Instance Creation Expression"_
  `ClassName variableName = new ClassName();`
- we can in many cases pass parameters in the parentheses:
  `ClassName variableName = new ClassName(arg1, arg2);`
  we can do this with the String class, passing text in the parentheses
- for reading input from the console or terminal, we instantiate a scanner object using new, followed by the Scanner class name, and passing in System.in, in the parentheses:
  `Scanner sc = new Scanner(System.in);`
  ^^ !! remember ^^
- for reading input from a file, we instantiate a scanner object using new, again with the Scanner class name, but pass in a File object, in the parentheses
  `Scanner sc = new Scanner(new File("nameOfFileOnFileSystem"))`
  (File is another class provided by Java, for reading and writing files)

#### the import statement

- the import statement lets us use classes from other people's code.
- Java provides a library of code, which includes the Scanner class, in a library called "java.util" :
  `import java.util.Scanner;`
  (there is an IntelliJ Auto-import setting:
  "Add unambiguous imports on the fly" and "Optimize imports on the fly")

it's common/best practice to use "-1" to describe an invalid value

## Scanner code

```java
Scanner scanner = new Scanner(System.in);
String nextNumber = scanner.nextLine();
```

## -----OOP--------------------

gonna learn about the fundamentals of OOP, starting first with the strufctures: Classes, Objects, Constructors
and some fundamental features: Inheritance, Encapsulation, Polymorphism, Composition

- Object Oriented Programming is a way to model real world objects, as software objects, which contain both data and code
- aka "Class-based programming", which starts with classes, which become the blueprints for objects
- metaphor, real world objects. Real world objects have two major components: STATE and BEHAVIOR
- if the metaphorical object is a physical computer, state for a computer object might be:
  - the amount of RAM it has
  - the operating system it's running
  - the hard drive size
  - the size of the monitor
    these are characteristicts about the computer object that describe it
- the ant might have this state:

  - the age
  - the number of legs
  - the conscious state
  - whether the ant is asleep or awake

- in addition to state, objects may also have behavior, or, actions taht can be performed by the object or upon the object
- the metaphorical computer object might have these behaviors:
  - booting up
  - shutting down
  - beeping, or outputting sound
  - drawing something on the screen
- for an ant object:
  - eating
  - drinking
  - fighting
  - carrying food

"modelling real world objects as software objects is a fundamental part of Object Oriented Programming"

a software object stores its state in fields, which can also be called variables, or attributes
and "objects expose their behavior with methods"
"a class is a template, or a blueprint for creating objects"
"the class describes the data (fields), and the behavior (methods), that are relevant to the real world object we want to describe"
"these are called class members"

- a class member can be a field, or a method, or some other type of dependent element
- if a field is static, there is only one copy in memory and this value is associated with the class, or template, itself
- if a field is not static, it's called an instance field, and each object may have a different value stored for this field
- a static method can't be dependent on any one object's state, so it can't reference any instance members
- any method that operates on instance fields needs to be non-static
- these class or member fields can be thought of as variables, although it's more common to call them fields or attributes
- a class could kinda sorta be defined as a powerful, user-defined data type

classes can be organized into logical groupings which are called packages
you declare a package name in the class using the package statement
if you don't declare a package, the class implicitly belongs to the default package
you need to understand that classes are grouped into packages in order to understand access modifiers

a class is a top-level class if it is defined in the source code file, and not enclosed in the code block of another class, type, or method
a top-level class has only two valid access modifier options: public, or none.

- public means any other class in any package can access this class
- when the modifier is omitted, this has special meaning, called package access, meaning the class is accessible only to classes in the same package

- an access modifier at the member level, allows granular control over class members
- the valid access modifiers are public, protected, (none), and private
- "public" means any other class in any package can access this class
- "protected" allows classes in the same package, and any subclasses in other packages, to have access to the member
- when the modifier is omitted, this has special meaning, called package access, meaning the member is accessible only to classes in the same package
- "private" means that no other class can access this member

"as a general rule, all your fields should be private, unlike the class, where we'll usually use public"

why make all the fields on a class private?
this practice is known as encapsulation

### Encapsulation

encapsulation in OOP usually has two meanings:
one is the bundling of behavior and attributes on a single object
the other is the practice of hiding fields, and some methods, from public access
"When we make our attributes private, we can then create methods to access the data, each with different degrees of access allowed, as needed"

fields are defined in the class's code block, or the body of the class, and not in a method

```java
public class Car {
  private String make;
  private String model;
  private String color;
  private int doors;
  private boolean convertible;
}
```

when we create an object from this class, then the values we assign to these fields represent the state of the object

unlike local variables, class variables should have some type of access modifier declared for it
if you don't declare one, Java declares the default one (package private), implicitly

we've set all the access modifiers to private in our class Car, and that will help us encapsulate this class
we want to controll access to these fields and that starts by making them private
we are not assigning any values yet because we don't knwo what they will be and they'll likely be different for each instance

our method describeCar is not static, because we are accessing instance fields on the class.
methods, unlike fields, will often be public, because we want to give users a way to interact with the object

```java
public class Car {
  private String make;
  private String model;
  private String color;
  private int doors;
  private boolean convertible;

  public void describeCar() {
    System.out.println(doors + "-Door " +
      color + " " +
      make + " " +
      model + " " +
      (convertible ? "Convertible" : ""));
  }
}
```

```java
public class Main {
  public static void main(String[] args) {
    Car car = new Car();
    car.describeCar();
  }
}
```

(outputs `0-door null null null`)
a field with a primitive data type will get assigned a default value by Java
"Fields on classes are assigned default values, intrinsically by Java, if not assigned explicitly"
boolean - false
byte/short/int/long/char - 0
double/float - 0.0
any other type - null

assigning default attributes:

```java
public class Car {
  private String make = "Tesla";
  private String model = "Model X";
  private String color = "Gray";
  private int doors = 2;
  private boolean convertible = true;

  public void describeCar() {
    System.out.println(doors + "-Door " +
      color + " " +
      make + " " +
      model + " " +
      (convertible ? "Convertible" : ""));
  }
}
```

every object Car that's instantiated will get assigned the default values we declared instead of Java's default values for primitive types

but we want to set these every time we instantiate a class

```java
public class Main {
  public static void main(String[] args) {
    Car car = new Car();
    // car.make = "Porsche"; -> none of these work since these fields are private
    // car.model = "Carrera"; -> so we can't assign data to fields with dot notation
    // car.color = "Red";
    // System.out.println("make = " + car.make); -> or access to print
    // System.out.println("model = " + car.model); -> these lines will make errors
    car.describeCar();
  }
}
```

### getters and setters

A getter is a method on a class that retrieves the value of a private field and returns it
A setter is a method on a class that sets the value of a private field
the purpose of these methods is to control, and protect, access to private fields
Another important aspect is that the getter and setter method signatures are part of car's public interface, but the attribute names and types aren't
this means that we can change things internally, like the name or type of an attribute,
but as long as we use the same getter and setter method, these changes should have no effect on code that uses our class. Our internal changes are hidden from our users

- a getter is a method on a class, that retrieves the value of a private field, and returns it
- a setter is a method on a class that sets the value of a private field

the purpose of getters/setters is to control, and protect, access to private fields

it's usual to name a getter method with the get prefix, followed by the field name, in lower camel case, but this is not required (this is what Maeve said!)

sometimes you won't need the setter method, as the data in the instance field is only used internally to the class

when writing methods that use non-static fields, your method cannot be declared static
the getter will usually return the type that the field is

```java
public class Car {
  private String make = "Tesla";
  private String model = "Model X";
  private String color = "Gray";
  private int doors = 2;
  private boolean convertible = true;

  public String getMake() {
    return make;
  }

  public String getModel() {
    return model;
  }


  public void describeCar() {
    System.out.println(doors + "-Door " +
      color + " " +
      make + " " +
      model + " " +
      (convertible ? "Convertible" : ""));
  }
}
```

instead of 'get' use 'is' for a method that returns a boolean field, so 'isConvertible' not 'getConvertible'
so now:

```java
public class Main {
  public static void main(String[] args) {
    Car car = new Car();
    // car.make = "Porsche"; -> none of these work since these fields are private
    // car.model = "Carrera"; -> so we can't assign data to fields with dot notation
    // car.color = "Red";
    System.out.println("make = " + car.getMake());
    System.out.println("model = " + car.getModel());
    car.describeCar();
  }
}
```

The setter methods set data, they don't retreive it
this doesn't work, it will not update this field:

```java
public void setMake(String make) {
  make = make;
}
```

we need the `this` keyword in Java

### this

`this` is a special keyword in Java that refers to the instance that was created when the object was instantiated. 'this' is a special reference name for the object or instance, which it can use to describe itself.

- we can use `this` to access fields on the class
  so,

```java
public void setMake(String make) {
  this.make = make;
}
```

^this says to update this variable, private String make, with the contents of the parameter make, which was passed to us

- so this is a way of updated the make attribute on Car, using a method, instead of trying to access it directly

```java
public class Main {
  public static void main(String[] args) {
    Car car = new Car();
    car.setMake("Porsche");
    System.out.println("make = " + car.getMake());
    System.out.println("model = " + car.getModel());

    car.describeCar();
  }
}
```

Intellij shortcuts:

To generate these setters with Intellij, set our cursor after the last method, setMake, but before the describeCar method, select 'Code' from teh toolbar items, then select 'Generate' and then select 'Setter'

- we can add validation to our setter functions:

```java
public void setMake(String make) {
  if(make == null) make = "Unknown";
  String lowercaseMake = make.toLowerCase();
  switch(lowercaseMake) {
    case "holden", "porsche", "tesla" -> this.make = make;
    default -> {
      this.make = "Unsupported ";
    }
  }
}
```

- so this has been the whole concept of encapsulation, that we are not letting people access the field directly
- we force them to go through a controlled way of setting up the data on the object
- using a setter method, we can really make sure that the data in our objects is valid data

- we can't run a method on null and we couldn't set or get attributes on null
- distinction between an uninitialized variable and a variable with a null reference
- an uninitialized variable causes a compile time error
- but a variable with a null reference can be used in code, without compiler errors
- so that's why you always need to use the keyword `new` and then in clude the name of the class + parenthesis
- you HAVE TO initialized with the `new` keyword
- (phrasing) user defined data type, and then super data type (type Car), that has five fields: make model color doors
- both the state and behavior are part of the class

a second car object:

```java
Car targa = new Car();
targa.setMake("Porsche");
targa.setModel("Targa");
targa.setDoors(2);
targa.setConvertible(false);
targa.setColor("red");
```

- when we use the new keyword, we've said that creates the object, and is called instantiation:
- but another term you'll hear for this process is constructing the object

---Object Oriented Challenge---
the challenge is to create the Bank Account Blueprint, that has five instance fields

- create a new class for a bank account
- create fields for account characteristics like:
- account number, account balance, customer name, email, and phone number
- create getters and setters for each field
- create two additional methods:
- one for depositing funds into the account
- one for withdrawing funds from the account

- a customer should not be allowed to withdraw funds, if that withdrawal takes their balance negative

- create a new project called Classes Challenge, with the usual Main class and main method
- you'll create an instance of an Account class, and then test your withdraw and deposit methods
- you'll print information to the console, that confirms what the balance is after the methods are called

- set up a Main class, with a main method, that creates at least one instance of Bank Account class,
- and simulates depositing and withdrawing money from teh account

- include class encapsulation: make all your attributes private,
- and set up getter and setter methods for your attributes
- include two behavioral methods:
- one for depositing funds,
- and one for withdrawing funds

---

he prefers to put functional methods before the getter and setter methods
in print statements, you can put `this.balance` instead of just `balance` to improve readability

(note `balance -= withdrawalAmount < 0` is so concise, but is it hard to read)
^ ask Maeve

### constructor

- A constructor is used in the creation of an object, that's an instance of a class.
- It is a special type of code block that has a specific name and parameters, much like a method
- it has the same name as the class itself, and it doesn't return any values.
- you never include a return type from a constructor, not even void
- you "can and should" specify an appropriate access modifier, to control who should be able to create new instances of the class:

```java
public class Account { // this is the class declaration
  public Account() { //this is the constructor declaration
    // constructor code is code to be executed as the object is created
  }
}
```

- a constructor is created for you implicitly by java.
- "When we say things are implicit in Java, we mean you can't see the code in the source, but it's in the byte code, generated during the compilation process
- when you type "new" and the constructor() this is actually calling the constructor (`new Account()`)
- if you don't explicitly create the instructor, Java creates one for us, called the "default constructor"
- if a class contains no constructor declarations, then a default constructor is implicitly declared
- the implicit constructor has no parameters and is often called the "no-args constructor" (no arguments)
- if a class contains any other constructor declarations, then a default constructor is not implicitly declared
- "a constructor exists whether you explicitly create one or not"
- this is why creating an object with the new keyword and passing no arguments in the parentheses is supported in nearly all cases

- for starters we will use the access modifier "public" and no return type, not even void
- "the purpose of the constructor is to essentially initialize the object that we are creating, and do whatever else we need to happen, while the object is being instantiated"
- it's only ever called once, at the start, when we are creating the object
- a class can have one or many constructors, one of which can be a No Args constructor

```java
public Account(String number, double balance, String customerName, String email, String phone) {
  System.out.println("Account constructor with parameters called");
  this.number = number;
  this.balance = balance;
  this.customerName = customerName;
  customerEmail = email;
  customerPhone = phone;
}
```

- it is common practice to make the parameter names the same as the field names, but not required
- if you do make them the same, you have to use "this" just like in setter methods
- (from example above) When we set `this.number = number`, we're assigning the number attribute on the instance, that's being created (known as this), to the argument value, passed in the number parameter
- we don't need 'this' on `customerEmail` or `customerPhone` because those are different names than the parameters "email" and "phone"

```java
Account bobsAccount = new Account("12345", 1000.00, "Bob Brown", "myemail@bob.com", "(087)123-4567)");
```

- having multiple constructors is called "constructor overloading"
- "it looks a lot like method overloading, doesn't it"
- "constructor overloading" is declaring multiple constructors, with different formal parameters
- the number of parameters can be different between constructors
- or if the number of parameters is the same between two constructors, their types or order of the types must differ

#### constructor chaining

- the process of calling one overloaded constructor from another
- "constructor chaining is when one constructor explicitly calls another overloaded constructor"
- you can call a constructor only from another constructor
- you must use the special statement `(this)` to execute another constructor, passing it arguments if required
- `this()` must be the first executable statement, if it's used from another constructor

```java
public Account() {
  this("56789", 2.50, "Default name", "Default address", "Default phone");
  System.out.println("Empty constructor called");
}
```

- this is a special use of 'this' that you won't see anywhere else
- this code sets up a situation where a new class object is created, but we haven't been given parameters. So it gives these default parameters
- constructor chaining is option, but there can be situations where you want to do this
- if you use 'this()' to call another constructor, it has to be the very first line that you write, before System.out.println(): "Call to `this` must be the first statement in constructor body"
- rules: "using the this statement with parameters, can only be called in a constructor, and it has to be the very first line that's called"

```java
public Account() {
  this("56789", 2.50, "Default name", "Default address", "Default phone");
  System.out.println("Empty constructor called");
}
```

prints:
Account constructor with parameters called
Empty constructor called

- because, the 'this' is run first, which calls the constructor that takes 5 args, and then the rest of the no-args constructor is run, so we get the messages in the order the constructor chaining happens
- GENERAL RULE of thumb is it's always better to assign the values directly to the field, rather than calling the setter, in a constructor (because of inheritance, haven't learned that yet)(so in theory you could do `setNumber(number);` instead of `this.number = number;` with validation in the setter function, but best practices is probably to refer to `this` in a constructor)(there can be situations where the setter is never executed)
- this is the point in the code where the object is being created. So consequently, some aspects of the initializatoin, may not have been finished while you're in the constructor. this is why there's the 'best practices' opinion that you shouldn't be calling other methods ore ven setters within the constructor code
- set field values directly in the constructor!
- you can use the Code -> Generate -> Constructor in Intellij

```java
public Account(String number, double balance, String customerName, String email, String phone) {
  System.out.println("Account constructor with parameters called");
  this.number = number;
  this.balance = balance;
  this.customerName = customerName;
  customerEmail = email;
  customerPhone = phone;
}

public Account(String customerName, String customerEmail, String customerPhone) {
  this("99999", 100.55, customerName, customerEmail, customerPhone);
}
```

^often you do all your initialization in the one constructor, and all other constructors can call that major constructor, passing default values or null references as arguments. This is "a good way of doing things" and often "leads to really good coding" because you're not having to duplicate code or duplicate initialization in more tha one place

// constructor challenge //

- create a new class "Customer" with three fields: name, credit limit, email address
- create the getter methods for each field (no setters)
- create three constructors for this class:
- 1. constructor for all three fields which should assign the arguments directly to the instance fields
- 2. no-args constructor that calls another constructor, passing some literal values for each argument
- 3. create a constructor with just the name and email parameters, which also calls another constructor
- test and confirm it works by writing code in the usual main class and main method
  //

- if you create any constructor, the no-args one has to be created manually because Java won't do it for you when you explicitly make any constructors
- note that IntelliJ doesn't do constructor chaining for you

his solution was a bit different than mine because he passed his no-args to the 2-args...kinda? confusing. The 2-args then added the default and called the 3-args which sets the fields

```java
public Customer() {
  this("nobody", "nobody@nowhere.com");
}

public Customer(String name, String email) {
  this(name, 1000, email);
}

public Customer(String name, double creditLimit, String email) {
  this.name = name;
  this.creditLimit = creditLimit;
  this.email = email;
}
```

his personal style is to organize the least amount of args to greatest when chaining constructors, but it's not a rule or best practices
then you only need to change the defaults in one place, instead of several constructors

### references vs objects vs instances vs classes

let's clear up any confusion!
a class is a blueprint -> we can make many with the blueprint -> each creation(`new`) from the blueprint is an object -> an object aka an instance "we have an instance of the Class/blueprint"

- the line `House blueHouse = new House("blue");` creates a new INSTANCE of the House CLASS
- House is a blueprint, and we are assigning it to the blueHouse VARIABLE. It is a REFERENCE to the OBJECT in memory.
- an OBJECT of type House
- 'blueHouse' is the VARIABLE, we're creating a new INSTANCE of the House Class, and assigning it the color blue

- the line `House anotherHouse = blueHouse;` creates another REFERENCE to the same OBJECT in memory. So,

```java
House blueHouse = new House("blue");
House anotherHouse = blueHouse;
```

^this is two REFERENCES pointing to the same object in memory. There's still only one house, but two REFERENCES to that one OBJECT. (his metaphor is we have an address written down on two different peices of paper for the same house)

```java
House blueHouse = new House("blue");
House anotherHouse = blueHouse;

anotherHouse.setColor("yellow");
```

^ both blueHouse and anotherHouse will be yellow, because we have two REFERENCES that point to the same OBJECT in memory. Once we change the color of one, both REFERENCES still point to the same OBJECT.

```java
public class Main {
  public static void main(String[] args) {
    House blueHouse = new House("blue");
    House anotherHouse = blueHouse;
    System.out.println(blueHouse.getColor()); //prints blue
    System.out.println(anotherHouse.getColor()); //prints blue

    anotherHouse.setColor("yellow");
    System.out.println(blueHouse.getColor()); //prints yellow
    System.out.println(anotherHouse.getColor()); //prints yellow

    House greenHouse = new House("green");
    anotherHouse = greenHouse;

    System.out.println(blueHouse.getColor()); //prints yellow
    System.out.println(greenHouse.getColor()); //prints green
    System.out.println(anotherHouse.getColor()); //prints green
  }
}
```

^in this we are DEREFERENCING `anotherHouse` by assigning `greenHouse` to `anotherHouse`. `anotherHouse` will now point to a different OBJECT in MEMORY. Before it was pointing to a house that had the "yellow" color, but now it points to the house that has the "green" color. We now have three REFERENCES and two OBJECTS in MEMORY: blueHouse points to one OBJECT while anotherHouse and greenHouse point to the same OBJECT in memory

this statement `new House("red")` gets created in memory, but we have no way to access it or communicate with it after execution since we didn't create a REFERENCE to it

this statement `House myHouse = new House("beige");` creates a House OBJECT in memory and it's location (REFERENCE) is assigned to `myHouse`
Our REFERENCE, `myHouse`, lets us have access to that beige house, as long as our variable `myHouse`, stays in scope

three INSTANCES of CLASS House but only two REFERENCES:

```java
new House("red");
House myHouse = new House("beige");
House redHouse = new House("red");
```

the first object will stay in memory, with no reference to it, until Java's automatic process (appropriately called garbage collection), figures out there is no running code with a reference to that object, and deletes it
"That first object is said to be eligible for garbage collection immediately after that first statement"
It's useless to the code because it's no longer accessible
There are times we might want to instantiate an object, and immediately call a method on it, and not assign the object to a variable reference (??? wild)
but 99% of the time we'll want to reference the objects we create

### differences between static variables and instance variables

a STATIC variable is declared by using the keyword `static`
static variables are aka "static member variables"
every instance of the class shares the same static variable
if changes are made to that variable, all other instances of that class will see the effect of that change

- it is considered best practice to use the Class name, and not a reference variable to access a static variable:

```java
class Dog {
  static String genus = "Canis";

  void printData() {
    Dog d = new Dog();
    System.out.println(d.genus); // eww no
    System.out.println(Dog.genus); // yes please
  }
}
```

- this makes it clearer that the variable is associated with the Class and therefore shared, and the value is not stored with the instance
- an instance isn't required to exist to access the value of a static variable:

```java
class Dog {
  static String genus = "Canis";
}

class Main {
  public static void main(String[] args) {
    System.out.println(Dog.genus); //no instance of Dog needs to exist to access this static variable 'genus'
  }
}
```

- static variables are not used very often, but can sometimes be very useful
- they can be used for:
  1. storing counters,
  2. generating unique ids,
  3. storing a constant variable that doesnt change, like PI for example,
  4. creating and controlling access to a shared resource like a log file, database, or some other type of input or output stream

static variables are shared between instances!!!

```java
class Dog {
  private static String name;

  public Dog(String name) {
    dog.name = name;
  }

  public void printName() {
    System.out.println("name = " + name); //use Dog.name instead? for clarity
  }
}

public class Main {
  public static void main(String[] args) {
    Dog rex = new Dog("rex"); //create instance (rex)
    Dog fluffy = new Dog("fluffly"); //create instance (fluffly)
    rex.printName(); // prints fluffly
    fluffly.printName(); // also prints fluffly
    // we changed the static variable, so it changes it for all instances!
  }
}
```

^ rex and fluffly share the same static variable 'name'. This scenario is a bad candidate for using a static variable, and using a REGULAR INSTANCE VARIABLE would make more sense.

---> INSTANCE VARIABLES
don't use STATIC keyword
INSTANCE Variables are aka FIELDS or MEMBER VARIABLES
INSTANCE VARIABLES belong to a specific INSTANCE of a class
each INSTANCE has its own copy of an INSTANCE VARIABLE
every INSTANCE can have a different value
INSTANCE VARIABLES represent the STATE of a specific INSTANCE of a class

```java
class Dog {
  private String name;

  public Dog(String name) {
    this.name = name;
  }

  public void printName() {
    System.out.println("name = " + name);
  }
}

public class Main {
  public static void main(String[] args) {
    Dog rex = new Dog("rex"); //create instance (rex)
    Dog fluffy = new Dog("fluffly"); //create instance (fluffly)
    rex.printName(); // prints rex
    fluffly.printName(); // also prints fluffly
  }
}
//every dog has got its own copy of the name FIELD
```

^ each instance of the class has its own state, or its own values, for any variables that have been defined. 'name' is no longer a shared FIELD

in most cases we will be using INSTANCE VARIABLES

### static and instance methods

STATIC METHODS are

- declared using a static modifier
- they can't access instance methods and instance variables directly
- they're usually used for operations that don't require any data from an instance of the class ( from `this`)
- (remember!) the `this` keyword is is the current instance of a class
- can't use the `this` keyword inside a static method
- if a method doesn't use instance variables, it should probably be declared a STATIC METHOD
- example: main is a static method, and it's called by the Java virtual machien when it starts the Java application
- static methods are called as `ClassName.methodName();` or `methodName();` only if in the same class

```java
class Calculator{
  public static void printSum(int a, int b) {
    System.out.println("sum= " + (a + b));
  }
}

public class Main {
  public static void main(String[] args) {
    Calculator.printSum(5, 10);
    printHellow(); //shorter form of Main.printHello();
  }

  public static void printHello() {
    System.out.println("Hello");
  }
}
```

- static methods don't require an instance to be created
- we can just type the class name and use the dot notation with the method name to access them

INSTANCE METHODS

- Instance methods belong to an instance of a class
- to use an instance method, we have to instantiate the class first, usually by using the `new` keyword
- Instance methods can access instance methods and instance variables directly.
- Instance methods can also access static methods and static variables directly.
- "directly" meaning, we don't usually haveto sue the keyword this wit hteh dot notation to use them. and we don't have to use the Class name with the d ot notation to access static variables

```java
class Dog {
  public void bark() {
    System.out.println("woof");
  }

  public class Main {
    public static void main(String[] args) {
      dog rex = new Dog(); //create instance
      rex.bark(); // call instance method
    }
  }
}
```

how do you decide when to do static method or instance method?

1. should a method be static?

- does it use any fields (instance variables) or instance methods?
- if yes, it should probably be an instance method
- if no, it should probably be a static method

### Plain Old Java Object

- "POJO"
- a POJO is a class that generally only has instance fields
- it's used to house data, and pass data, between functional classes
- it usually has few-if any-methods other than getters and setters
- many database frameworks use POJO's to read data from, or to write data to, databases files or streams
- remember, a class can be thought of as a super data type
- a POJO is just that, it lets you extend, and combine your definition of data types.

#### Examples of POJOs

- A POJO might be called a bean, or a JavaBean
- A JavaBean is just a POJO, with some extra rules applied to it
- these rules are in place so that Java frameworks have a standard way to manipulate and manage these objects
- a POJO is sometimes called an Entity, because it mirrors database entities.
- another acronym is DTO, for Data Transfer Object
- it's a description of an object, that can be modeled as just data

#### Support for POJO creation

- many tools will turn a data model into generated POJO's or JavaBeans
- we did this a little with IntelliJ, which allowed us to generate getters, setters, and constructors in a uniform way
- a POJO in its simplest form, requires a way to populate data, and we can do this with a constructor
- public String toString() {}
- statements that start with `@`, like `@Override`, are called an annotation. An annotation is a type of metadata, a way of formally describing additional information about our code. They are more structured and have more meaning than comments, because they can be used by the compiler or other types of pre-processing functions to get information about the code. Metadata doesn't affect how the code runs, it will run with or without the annotation
- @Override tells the compiler that this is a special type of method in Java, an overridden method

- an "overridden method" is a special method in Java that other classes can implement if they use a specified method signature
- every object when passed to System.out.println, will have the toString method implicitly executed if you've created such a method on your class

- "boilerplate code" is code that's repetitive and follows a pattern, which is why code generation tools can create it for us

#### the POJO vs the Record

so Plain Old Java Objects have a lot of boilerplate code, repetitive code that follows certain rules
once created this code is rarely looked at or modified

- the Record type was introduced in JDK 14 and officially added to Java in JDK 16
- its purpose is to replace the boilerplate code of the POJO but to be more restrictive
- Java calls them "plain data carriers"
- the word carrier is an important term because it means the record has more rules built-in than a POJO would
- the record is a special class that contains data that's not meant to be altered: it seeks to achieve immutability for the data in its members
- it contains only the most fundamental methods, such as constructors and accessors

- what does Java tell us about what is implicitly created when we declare a record?
  `public record MyLittlePony(String color, String name, String yearOfBirth, String family) {}`
- the content of the parentheses is called the "record header"
- the record header consists of record components, a comma delimited list of components
- for each component in the header, Java generates:

  1. a field with the same name and declared type as the record component
  2. the field is declared private and final (can't be modified)
  3. the field is sometimes referred to as a component field
  4. Java generates a toString method that prints out each attribute in a formatted String.
  5. in addition to creating private final field for each component, Java generates a public accessor method for each component
  6. this method has the same name and type of the component, but it doesn't have any kind of special prefix, no get, or is, for example
  7. the accessor method for "id" would be `id()`

- why is the record built to be immutable?
- there are more use cases for immutable data transfer objects, and keeping them well encapsulated
- you want to protect the data from unintended mutations

- if you want to modify data on your class, you won't be using the record
- while you can use the code generation options for the POJO, if you're reading a whole lot of records from a database or file source, and simply passing data around, then the record is a big improvement

### Inheritance

- inheritance is a form of code re-use
- inheritance is a way to organize classes into a parent-child hierarchy, which lets the child inherit(re-use), fields and methods from its parent

animal kingdom example:
animal -> vertebrates -> warm-blooded -> mammal -> dog
animal -> vertebrates -> warm-blooded -> mammal -> cat
animal -> vertebrates -> warm-blooded -> bird
animal -> vertebrates -> cold-blooded -> fish -> salmon
animal -> vertebrates -> cold-blooded -> fish -> goldfish
animal -> vertebrates -> cold-blooded -> reptiles

- the most generic, or base class, starts at the top (animal)
- all other classes can be said to be subclasses of Animal
- a parent can have multiple children
- a child can only have one direct parent in Java (<--)
- but it will inherit from its parents class's parent and so on

so for class Animal, we include attributes we think every kind of animal has, and we also have methods for behavior that we think animals have in common

- Dog class inherits from Animal, Dog "IS A" type of Animal
- when we create a Dog object, it will inherit Animal's attributes (type, size, weight), and it will inherit Animal's behavior/methods.
- we can specialize the Dog class with its own fields and behavior
- we can say Dog is a subclass, or child class of Animal
- we can say Animal is a parent, or super class, of Dog

#### extends keyword

- Using extends specifies the superclass(or the parent class) of the class we're declaring
- a class can specify one, and only one, class in its extends clause

#### super()

- this() in our constructors is a lot like super()
- super() is a way to call the constructor on the parent/super class, directly from the sub class's constructor
- like this(), it has to be the first statement of the constructor
- because of this rule, this() and super() can never be called from the same constructor
- so with Dog extends Animal, we're calling Animal's constructor by using the keyword super, and then parentheses, which calls the default constructor on Animal

```java
public class Dog extends Animal {
  public Dog() {
    super("Mutt", "Big", 50);
  }
}
```

- if you don't make a call to super(), then Java makes it for you, using super's default constructor
- if your super class doesn't have a default constructor, then you must explicitly call super() in all of your constructors, passing the right arguments to that constructor

- Dog inherits from Animal, it's a type of Animal, as we've said, and so we can pass a Dog instance to any method that takes an Animal
- since super() must be the first statement, we can put logic in the parentheses and pass direclty to the super constructor
- we can do it directly, like this as an expression in the argument list:
  `super(type, weight < 15 ? "small" : (weight < 35? "medium" : "large"), weight);`
- this is one way to do calculations in your constructor and pass the result to the super call

```java
    @Override
    public String toString() {
        return "Dog{" +
                "earShape='" + earShape + '\'' +
                ", tailShape='" + tailShape + '\'' +
                "} " + super.toString();
    }
```

^ this IntelliJ generated toString() method adds a call to super.toString(), and this is different than the call super() in our constructor

- it's a lot like when we use the this keyword with the dot notation to access a field on the current instance
- this code lets us call a super class's method

in our Main class this:

```java
            Dog yorkie = new Dog("Yorkie", 15);
            doAnimalStuff(yorkie, "fast");

            Dog retriever = new Dog("Labrador Retriever", 65);
            doAnimalStuff(retriever, "slow");
```

prints this:

```
Yorkie makes some kind of noise
Yorkie moves fast
Dog{earShape='Perky', tailShape='Curled'} Animal{type='Yorkie', size='medium', weight=15.0}
- - - -
Labrador Retriever makes some kind of noise
Labrador Retriever moves slow
Dog{earShape='Perky', tailShape='Curled'} Animal{type='Labrador Retriever', size='large', weight=65.0}
- - - -
```

We get all the fields that are specific for Dog, and the fields that are more general to the Animal. That's because our toString method printed out the Dog fields then made a call to super.toString(), which was Animal's toString method

#### code re-use

- all subclasses can execute methods, even though the code is declared on the parent class
- the code doesn't have to be duplicated in each subclass
- we can use code, out of the box, from the parent,
- or we can change that code for the subclass

```java
    public static void doAnimalStuff(Animal animal, String speed) {
        animal.makeNoise();
        animal.move(speed);
        System.out.println(animal);// <--
        System.out.println("- - - -");
    }
```

- The toString method (above in `super()` section) that was called in the doAnimalStuff method, of the Main class, didn't actually call the Animal toString method.
- It called the Dog toString method, when animal is an instance of a Dog
- "it's one of the best parts about this inheritance feature"
  "We told this method that we were dealing with an Animal class, and we called the toString method, which is declared as a method on Animal. At run time, Java figures out the Animal object is even more specific than Animal, it's really a Dog, and it actually calls the toString method on Dog (if one exists on Dog) (if the toString method doesn't exist on Dog, it just uses the toString method that's on Animal)

if we add `public void makeNoise(){}` to our Dog, a method already in Animal class, Java will run what's in Dog because we've overridden Animal's makeNoise method

##### overriding a method

The override method can do one of three things:

1. it can implement completely different behavior, overriding the behavior of the parent
2. it can simply call the parent class's method, which is somewhat redundant to do (this is the default behavior of the parent method)
3. the method can call the parent class's method, and include other code to run, so it can extend the functionality for the Dog, for that behavior

- Overriding a method is when you create a method on a subclass, which has the same SIGNATURE as a method on a super class
- remember that a METHOD SIGNATURE consists of the method name, and the number and types of parameters
- you override a parent class method, when you want the child class to show different behavior for that method
- InteeliJ will leave a notice in the margin if we are overwriting a parent class's method, it's an icon consisting of blue concentric circles and a red arrow
- you can also select override methods from the Code generation menu, like so:

```java
    @Override
    public void move(String speed) {
        super.move(speed);
    }
```

- IntelliJ adds the @Override symbol to indicate it's overriding a method that's in the superclass
- the auto-generated code simply makes a call to the parent class's method, move, using the keyword super and dot move
- what that means is, we're calling the move method on teh parent class, the Animal class

while we can do this:

```java
public void makeNoise(){}
```

- ^ we add this method to make the dog silent, since it overrides the parent method `makeNoise` with nothing
- we can also extend functionality in an override method:

```java
    @Override
    public void move(String speed) {
        super.move(speed);
        System.out.println("Dogs walk, run and wag their tail");
    }
```

prints:

```java
Yorkie moves fast
Dogs walk, run and wag their tail
// Dog{earShape='Perky', tailShape='Curled'} Animal{type='Yorkie', size='medium', weight=15.0}
```

- when we called the move methd, we did what Animal had us do with that statement "Yorkies move fast", but we added another line of text to the output about Dogs
- we extended the behavior of Animal for Dogs
- we used what was there, with the call to `super.move(speed)`, but then added our own code to it

in this subclass Dog, we have this method:

```java
    public void makeNoise() {
        if(type == "Wolf") {
            System.out.print("Ow Wooooo!");
        }
        bark();
        System.out.println();
    }
```

"type" throws an error in IntelliJ because that is a private field in the Animal class. We can change it to `protected` to let any class that is a subclass access the field

- this is CONDITIONAL ENCAPSULATION
- we are allowing some limited access to our internal fields, and that's to subclasses
- "protected" access also means that any classes in the same package will also have access
- in the above example we simply referenced the field 'type' and didn't add any other qualifier, not `this` or `super`, and we didn't have to call type from a different instance of Dog
- this is another advantage of inheritance, for fields and methods that aren't private
- they can be accessed directly, as if they really were declared on the subclass itself
- Java fist looks on teh subclass for a method or field with that name, then it'll go up the inheritance tree looking for a match

```java
public class Fish extends Animal{
    private int gills;
    private int fins;

    public Fish(String type, double weight, int gills, int fins) {
        super(type, "small", weight);
        //"assignments for Fish's more specialized fields"
        this.gills = gills;
        this.fins = fins;
    }
}
```

- let's add fish's "custom behavior", and add the method `moveMuscles`
- let's make it private because we only want the move method to call it
- in other words, we won't "expose this behavior" "for any outside code to call it directly"

```java
    private void moveMuscles() {
        System.out.println("muscles moving ");
    }
    private void moveBackFin() {
        System.out.println("backfin moving ");
    }
```

- then let's override the move method from Animal, so that our fish moves/swims

```java
    @Override
    public void move(String speed) {
        super.move(speed);
        moveMuscles();
        if(speed == "fast") {
            moveBackFin();
        }
        System.out.println();
    }
```

so we've used Animal's fields and behaviors, the ones we wanted to use, and then added some more specific elements to the Fish class. And we passed fish to a method, that never had to know a Fish class existed. Polymorphism!

#### Polymorphism

- Polymorphism simply means "many forms"
- just now we demonstrated that Animal can take many forms, like a Dog or a Fish, or simply the base class Animal
- advantages of Polymorphism:

1. Polymorphism makes code simpler. We can write code once, and that code doesn't have to even know about subclass types
2. encourages code extensibility. it's very easy to subclass and override or extend the method that'll be called

in Java, we've been using INHERITANCE all along without even knowing it
every class you create in Java intrinsically extends a special Java class

#### java.lang.Object ... Class Object

the special java class that all classes inherit from is named Object, found in the java.lang package

"Class Object is the root of the class hierarchy. Every class has Object as a superclass. All objects, including arrays, implement the methods of this class.

- all classes extend Object
- every class that we create or use is automatically inheriting from [this](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Object.html#method-summary) Java-supplied class called the Object class

Every Class Inherits From Object

Object
clone(): Object
equals(obj:Object): boolean
hashCode(): int
toString(): String
^
Main
static main()

Object
clone(): Object
equals(obj:Object): boolean
hashCode(): int
toString(): String
^
String (60 meth0ds) --> this class overrides equals() and toString(), for instance
charAt(int, index): char
equals(obj:Object): boolean
toString(): String
static valueOf(Object obj): String

in IntelliJ right click on the Object word in `Main extends Object` -> Go to -> Declaration or Usages

##### hash codes

Student max = new Student("Max", 21);
System.out.println(max.toString());
prints: ClassName@-a bunch of random numbers
class + @sign + hashCode of the object

- a hashCode is an integer that is unique to an instance in the currently executing code
- when an instance is created, it's assigned a hashCode,
- that hashCode is what can tell us if our multiple references are pointing to a single instance

so, in order to actually print out our Student class instance, we have to override the toString method

```java
public class Main extends Object {
    public static void main(String[] args) {
        Student mar = new Student("Mar", 21);
        System.out.println(mar);

        PrimarySchoolStudent jimmy = new PrimarySchoolStudent("Jimmy", 8, "Carole");
        System.out.println(jimmy);
    }
}

 class Student {
    private String name;
    private int age;

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

     @Override
     public String toString() {
        return name + " is " + age;
     }
 }

 class PrimarySchoolStudent extends Student {
    private String parentName;
    PrimarySchoolStudent(String name, int age, String parentName) {
        super(name, age);
        this.parentName = parentName;
    }

     @Override
     public String toString() {
         return parentName + "'s kid, " + super.toString();
     }
 }
```

the inheritance tree is cumulative, so PrimarySchoolStudent inherits both Student members, and Object members
Object members are accessible as long as Student doesn't override them. Since Student overrode toString(), we no longer can simply call the toString implementation on Object from PrimarySchoolStudent.

- all classes that do not explicitly extend another class will implicitly extend the class Object
- Object is the base class, or root class, of every class in Java, which means all classes can use or override, Object's methods

- using a class name when using a static field helps people reading this code understand what's occuring:

```java
private static int employeeNo = 1;

public Employee(...) {
  super(name, birthDate);
  this.employeeId = Employee.employeeNo++;
}
```

- remember, a static field is a place that lets you share data among all your instances
- as long as the parent class doesn't override methods above themselves in the hierarchy, these methods can be called by the descendants

### this vs super

the keyword super is used to access or call the parent class members(both variables and methods)
the keyword this is used to call the current class memebers(variables and methods)
this is required, when we have a parameter with the same name as an instance variable or field
we can use this and super anywhere in the class, except for with static elements, like a static method

#### Keyword this

```java
public class House {
  private String color;
  public House(String color) {
    //this keyword is required, as it's the same parameter name as the field
    this.color = color;
  }

  public  String getColor() {
    //this is optional
    return color; //same as `return this.color;`
  }

  public void setColor(String color) {
    //this keyword is required, same parameter name as field
    this.color = color;
  }
}

```

#### Keyword super

commonly used with method overriding, when we call a method with the same name, from parent class

```java
class SuperClass { //parent class aka superclass
  public void printMethod() {
    System.out.println("Printed in SuperClass.");
  }
}

class SubClass extends SuperClass { //subclass aka child class
// overrides methods from the parent class:
  @Override
  public void printMethod() {
    super printMethod(); //calls the method in the SuperClass (parent)
    System.out.println("Printed in Subclass.");
  }
}

class MainClass {
  public static void main(String[] args) {
    SubClass s = new SubClass();
    s.printMethod();
  }
}
```

#### this() vs super() call

in Java we've got this() and super() call. Notice the parentheses.
These are known as calls, since it looks like a regular method call, although we're calling certain constructors

- you use this() to call a constructor, from another overloaded constructor in the same class
- the call to this() can only be used in a constructor, and it must be the first statement in a constructor
- it is used with constructor chaining, in other words when one constructor calls another constructor, and it helps to reduce duplicated code

- the only way to call a parent constructor, is by calling super(), which calls the parent constructor
- the Java compiler puts a default call to super(), if we don't add it, and it's always a call to the no argument constructor, which is inserted by the compiler
- so, it's a call to the constructor that hasn't got any arguments
- the call to super() must be the first statement in each constructor

- a constructor can have a call to super() or this() but never both!

BAD BAD BAD:

```java
class Rectangle {
  private int x;
  private int y;
  private int width;
  private int height;

  public Rectangle() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  }

  public Rectangle(int width, int height) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
  }

  public Rectangle(int x, int y, int width, int height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}
```

^ all three of these constructors initialize variables, and there is repeated code in each
^ we are initializing variables in each constructor, with some default values.
^ never write it like this!!! use this()

GOOD:

```java
class Rectangle {
  private int x;
  private int y;
  private int width;
  private int height;
//1st constructor:
  public Rectangle() {
    this(0, 0); //calls 2nd constructor
  }
//2nd constructor:
  public Rectangle(int width, int height) {
    this(0, 0, width, height); //calls 3rd constructor
  }
//3rd constructor:
  public Rectangle(int x, int y, int width, int height) {
    //initialize variables
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}
```

^ here, the 3rd constructor does all the work, initializing the instance variables.
^ the 1st calls the 2nd, and the 2nd calls the 3rd
^ no matter what constructor we call, the variables will always be initialized in the 3rd
^ this avoids duplicate code, which avoids bugs

- this is known as "constructor chaining": the last constructor has the responsibility to initialize the variables

example using super() and this() in one class

```java
class Shape {
  private int x;
  private int y;

  public Shape(int x, int y) {
    this.x = x;
    this.y = y;
  }
}

class Rectangle extends Shape {
  private int width;
  private int height;

  public Rectangle(int x, int y) {
    this(x, y, 0, 0);
  }

  public Rectangle(int x, int y, int width, int height) {
    super(x, y);
    this.width = width;
    this.height = height;
  }
}
```

^ 1st Rectangle constructer calls the 2nd
^ 2nd rectangle constroctur calls the parent Shape, with parameters x and y
^ the parent constructer Shape will initialize the x and y variables, while the 2nd Rectangle constructor will initialize the width and height variables

### Method Overloading

- METHOD OVERLOADING means providing two or more separate methods, in a class, with the same name, but different parameters
- the method return type may or may not be different, and that allows us to reuse the same method name
- OVERLOADING is very handy because it reduces duplicated code, and we don't have to remember multiple method names
- we can overload static, or instance methods
- while the code calling an overloaded method looks like a single method is being called with a different set of arguments, each call that's made with a different set of arguments is actually calling a separate method
- Java devs often refer to method overloading as COMPILE-TIME POLYMORPHISM
  -> the compiler is determining the right method to call, based on the method name and argument list
- usually overloading happens within a single class, but methods can also be overloaded by subclasses
  -> because a subclass inherits one version of the method from the parent class, and then the subclass can have another overloaded version of that method

#### Method Overloading Rules

to be considered an "overloaded" method:

- methods must have the same method name
- methods must have different parameters
- they may or may not have different return types
- they may or may not have different access modifiers
- they may or may not throw different checked or unchecked exceptions

### Method Overriding

METHOD OVERRIDING means defining a method in a child class, one which already exists in the parent class, and doing this with the same SIGNATURE (the same method name, the same arguments)

- by extending the parent class, the child class gets all the methods defined in teh parent class(those methods are also known as DERIVED METHODS)
- METHOD OVERRIDING is also known as RUNTIME POLYMORPHISM or DYNAMIC METHOD DISPATCH, because the method that is going to be called is decided at runtime by the Java virtual machine
- it's good to put @Override over an overrided method definition so that the compiler can flag an error if you don't properly override the method
- you can't override static methods, only instance methods can be overridden

#### Method Overriding Rules

for a method to be considered overridden:

- it must have the same name and arguments
- the return type can be a subclass of the return type in the parent class
- it can't have a lower access modifier: it can't have more restrictive access privileges
- if the parent's method is protected, the child's overridden method cannot be private. the child's method can be public, however, since that is less restrictive

- only inherited methods can be overridden, so only in child classes
- constructors and private methods cannot be overridden
- methods that are final cannot be overridden
- a subclass can use `super.methodName()` to call the superclass version of an overridden method

#### Overriding vs Overloading example

```java
class Dog {
  public void bark() {
    System.out.println("woof");
  }
}

class GermanShepherd extends Dog {
  @Override
  public void bark() {
    System.out.println("woof woof woof");
  }
}
```

```java
class Dog {
  public void bark() {
    System.out.println("woof");
  }

  public void bark(int number) {
    for(int i = 0; i < number; i++) {
      System.out.println("woof");
    }
  }
}
```

METHOD OVERLOADING

- provides functionality to reuse a method name with different parameters.
- usually in a single class but may also be used in a child class
- must have different parameters
- may have different return types
- may have different access modifiers
- may throw different exceptions

METHOD OVERRIDING

- used to override a behavior which the class has inherited from the parent class
- always in two classes that have a child-parent or IS-A relationship
- must have the same parameters and same name
- must have the same return type or covariant return type(child class)
- must not have a lower modifier but may have a higher modifier
- must not throw a new or broader checked exception
- so, can't have weaker access privileges, but CAN have greater access privileges

#### Covariant Return Type

the return type of an overridden method can be the same type as the parent method's declaration
but it can also be a subclass
the return type can be a class, subclass, and also other types that are not classes, so we use the term COVARIANT RETURN TYPE
the term COVARIANT RETURN TYPE can include interfaces and generic types, for instance

there's a clone method on the class Object that all classes inherit
`protected Object clone() throws CloneNotSupportedException`
if you overrode this ^ it would generate this:

````
@Override
protected Object clone() throws CloneNotSupportedException {
  return super.clone();
}```
````

in general when you're cloning an instance, you're going to want to return an Object, that's the same type as the Object you are cloning
all classes ultimately have the Object as a base class, so every class can be said to be a covariant of Object

the clone method is overridden in a Person class:

```java
class Person {
  private String name;
  private String birthDate;

  public Person(String name, String birthDate) {
    this.name = name;
    this.birthDate = birthDate;
  }
  @Override
  public Person clone() {
    return new Person(name, birthDate);
  }
}
```

(this is a valid override of Object's clone method)
(Person is a valid covariant return type for Object, so this clone method in the Person class is a valid overriding method, overriding Object's clone method )
(notice 'public' accessor on the overridden method)

## Text Block & System.out.printf & String.format & String.formatted

A TEXT BLOCK is just a special format for multi-line String literals
it's simply a String, with a new representation in the source code
(became part of official Jva langauge as of JDK 15)
the old way:

```java
public class Main {
    public static void main(String[] args) {
        String bulletIt = "Print a Bulleted List: " +
                "\u2022 First Point " +
                "\u2022 Sub Point ";
        System.out.println(bulletIt);
    }
}
```

- so this doesn't reallyl print multiple lines of code sadly, but puts it all on one line:
  `Print a Bulleted List: • First Point • Sub Point `
- we can use ESCAPE SEQUENCES
- Java has several, and the most common are:

1. \t 'insert a tab character'
2. \n 'insert a new line character'
3. \" 'insert a double quote character'
4. \\ 'insert a backslash character'
   so with more formatting:

```java
public class Main {
    public static void main(String[] args) {
        String bulletIt = "Print a Bulleted List:\n " +
                "\t\u2022 First Point\n " +
                "\t\t\u2022 Sub Point ";
        System.out.println(bulletIt);
    }
}
```

the output is:

```
Print a Bulleted List:
 	• First Point
 		• Sub Point
```

for a text block, you use " " " to open, and then to close:

```java
        String textBlock = """
                Print a Bulleted List:
                            \u2022 First Point
                                \u2022 Sub Point
                """;
```

- the text encased in tripe quotes is the text that's part of the String, and is the text block itself, doesn't need additional quotes or plus signs, and we also got rid of the tab and newline escape sequences

- the text block lets us format text in the source code the same way we want to see it in teh output
- so we can get the exact same output we did when we concatenated strings and used escape sequences

System.out.printf
printf is like print, in that it doesn't end with a newline character
but this method has several arguments, the string to be printed to the console, and values that will be used in the String
%d is a special indicator called a "format specifier"
this is a placeholder for other data, which should replace this specifier in the text

```java
        int age = 35;
        System.out.printf("Your age is %d", age);
        int yearOfBirth = 2023 - age;
        System.out.printf("Age = %d, Birth year = %d", age, yearOfBirth);
```

## Format Specifiers

at their most complex, format specifiers take the form shown here:
%[argument_index$][flags][width][.precision]conversion
[docs](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Formatter.html)

specifying precision:
`System.out.printf("Your age is %.2f%n", (float) age);`

```java
        for (int i = 1; i <= 100000; i *= 10) {
            System.out.printf("Printing %6d %n", i);
        }
```

we used System.out.printf, and remember System.out.format can be used anywhere System.out.printf is used
but what about when you want to format Strings and output them to a file or error log, or a database?
the String class has 2 methods to support this type of formatting

1. static method called format:
   `String formattedString = String.format("Your age is %d", age);`
2. String instance method formatted

```java
        String formattedString = String.format("Your age is %d", age);
        System.out.println(formattedString);
        formattedString = "Your age is %d".formatted(age);
        System.out.println(formattedString);
```

## the String pt 2

- if a String is empty, its length will be 0
- the String has over 60 methods
- the String is a sequence of characters, meaning its characters are ordered and indeed
- the index starts at 0:
  012345678910
  Hello World
- three basic categories in String's methods:

1. String Inspection Methods

- these provide some information about the string, like length(), isEmpty() and isBlank()

length: Returns the number of characters in the String
charAt: returns the character at the index that's passed
indexOf, lastIndexOf: returns an integer, representing the index in the sequence where the String or character passed, can be located in the String
isEmpty: returns true of length is zero
isBlank: returns true if length is zero OR the string only contains whiespace characters (added in JDK 11)

2. Methods for Comparing String Values

contentEquals: returns a boolean if the String's value is equal to the value of the argument passed. This method allows for arguments other than String, for any type that is a character sequence
equals: returns a boolean if the String's value is equal to the value of the argument passed
equalsIgnoreCase: returns a boolean if the String's value is equal(ignoring case), to the value of the argument passed
contains: returns a boolean if the String contains the argument passed
endsWith/startsWith: these return a boolean, and are much like the contains method, but more specific to the placement of the argument in the String
regionMatches: returns a boolean if defined sub-regions are matched
(compareTo and matches coming up later)

the contentEquals isn't limited to comparing just String objects. It can be used to compare a StringBuilder's value

```java

public class Main {
    public static void main(String[] args) {
        printInformation("Hello World");
        printInformation("");
        printInformation("\t \n");

        String helloWorld = "Hello World";
        System.out.printf("index of r = %d %n", helloWorld.indexOf('r'));
        System.out.printf("index of World = %d %n", helloWorld.indexOf("World"));
        System.out.printf("index of l = %d %n", helloWorld.indexOf("l"));
        System.out.printf("index of l = %d %n", helloWorld.lastIndexOf("l"));

        System.out.printf("index of l = %d %n", helloWorld.indexOf("l", 3));
        System.out.printf("index of l = %d %n", helloWorld.lastIndexOf("l", 8));

        String helloWorldLower = helloWorld.toLowerCase();
        if(helloWorld.equals(helloWorldLower)) {
            System.out.println("Values match exactly");
        }
        if(helloWorld.equalsIgnoreCase(helloWorldLower)) {
            System.out.println("Values match ignoring case");
        }

        if(helloWorld.startsWith("Hello")) {
            System.out.println("String starts with Hello");
        }

        if(helloWorld.endsWith("Hello")) {
            System.out.println("String ends with Hello");
        }

        if(helloWorld.contains("Hello")) {
            System.out.println("String contains Hello");
        }

        if(helloWorld.contentEquals( "Hello World")) {
            System.out.println("Values match exactly");
        }
    }

    public static void printInformation(String string) {
        int length = string.length();
        System.out.printf("Length = %d %n", length);
        if(string.isEmpty()) {
            System.out.println("String is empty");
            return;
        }
        if(string.isBlank()) {
            System.out.println("String is Blank");
        }
        System.out.printf("First char = %c %n", string.charAt(0));
        System.out.printf("Last char = %c %n", string.charAt(length - 1));
    }
}
```

3. String Manipulation Methods

Set A: don't actually change the underlying meaning of the text value, but perform some kind of cleanup:

indent: this method was added in JDK 15, and adds or removes spaces from the beginning of lines in multi-line text
strip/stripLeading/stripTrailing/trim: the difference between the strip method and trim method is that the strip() supports a larger set of white space characters. It and the corresponding stripLeading and stripTrailing methods added in JDK 11
toLowerCase/toUpperCase: returns a new String, either in lower case or in upper case

Set B: this set of string manipulation methods transform the String value, and return a String with a different meaning than the original String

concat: similar to the plus operator for strings, it concatenates text to teh String and returns a new String as the result
join: allows multiple strings to be concatenated together in a single method, specifying a delimiter
repeat: returns the String repeated by the number of times specified in the argument
replace/replaceAll/replaceFirst: these methods replace characters or strings in the string, returning a new String with replacements made
substring/subSequence: these return a part of the String, its range defined by the start and end index specified

METHOD CHAINING:
`newDate = "25".concat("/").concat("11").concat("/").concat("1982");`

FUCKING INEFICIENT:
newDate = "25";
newDate = newDate.concat("/");
newDate = newDate.concat("11");
newDate = newDate.concat("/");
newDate = newDate.concat("1982");
System.out.println("newDate = " + newDate);

just, like, so many String methods:

```java
public class StringMethods {
    public static void main(String[] args) {
        String birthDate = "25/11/1982";
        int startingIndex = birthDate.indexOf("1982");
        System.out.println("startingIndex = " + startingIndex);
        System.out.println(("Birth year = " + birthDate.substring(startingIndex)));

        System.out.println("Month = " + birthDate.substring(3, 5));
        String newDate = String.join("/", "25", "11", "1982");
        System.out.println("newDate = " + newDate);

        newDate = "25";
        newDate = newDate.concat("/");
        newDate = newDate.concat("11");
        newDate = newDate.concat("/");
        newDate = newDate.concat("1982");
        System.out.println("newDate = " + newDate);

        newDate = "25" + "/" + "11" + "/" + "1982";
        System.out.println("newDate = " + newDate);

        newDate = "25".concat("/").concat("11").concat("/").concat("1982");
        System.out.println("newDate = " + newDate);
        System.out.println(newDate.replace("/", "-"));
        System.out.println(newDate.replace("2", "00"));
        System.out.println(newDate.replaceFirst("/", "-"));
        System.out.println(newDate.replaceAll("/", "---"));

        System.out.println("ABC\n".repeat(3));
        System.out.println("-".repeat(20));


        System.out.println("ABC\n".repeat(3).indent(8));
        System.out.println("-".repeat(20));

        System.out.println("    ABC\n".repeat(3).indent(-2));
        System.out.println("-".repeat(20));

    }
}
```

## String vs StringBuilder

because String is immutable, each method call returns a new instance of a String
as an alternative, Java provides a mutable class that lets us change its text value(or, character sequence)
this is the StringBuilder class!
Creating Instances:
Instantiating String Objects:

```java
String hello = "Hello";
String helloWorld = "Hello" + "World";
String badHello = new String("Hello");//valid, but redundant code
```

Instantiating StringBuilder Objects:

```java
StringBuilder helloBuilder = new StringBuilder("Hello");
StringBuilder emptyBuilder = new StringBuilder();
StringBuilder emptyBuilder5 = new StringBuilder(5);
StringBuilder stringBuilder = new StringBuilder(helloBuilder);
```

there are 4 ways to create a new StringBuilder object, using the new keyword:

- pass a String
- pass no args
- pass an int value
- pass some other type of character sequence (like StringBuilder)

Some methods unique to teh StringBuilder class:
delete/deleteCharAt: you can delete a substring using indices to specify a range, or delete a single character at an index
insert: you can insert text at a specified position
reverse: you can reverse the order of the characters in the sequence
setLength: setLength can be used to truncate the sequence, or include null sequences to 'fill out' the sequence to that length

to recap, String is one of the most used classes in Java, and it's mutable version StringBuilder
we use Strings very often, but the StringBuilder class is often the better choice when creating and manipulating text

## --OOP-PT2------------------

COMPOSITION, ENCAPSULATION, POLYMORPHISM

### Composition

Inheritance defines an "IS A" relationship. Motherboard, ComputerCase, Monitor are all Products. A personal computer IS A product.

Now, COMPOSITION defines a "HAS A" relationship.

- Composition is actually modeling parts, and those parts make up a greater whole. So:
  Product -> PersonalComputer
  Product -> Motherboard, ComputerCase, Monitor
  PersonalComputer -> Motherboard, ComputerCase, Monitor
- we can model the "HAS A" relationship
- you can use a combination of composition and inheritance

- Java only lets you inherit from one class at a time. This is why we need composition!
- if you're using teh extends option to inherit, Java only lets you inherit from one class at a time. We'd run into difficulties and limitations quite quickly if our only tool was inheritance. Here, the PersonalComputer consists of three other classes:

```java
public class PersonalComputer extends Product {
    private ComputerCase computerCase;
    private Monitor monitor;
    private Motherboard motherboard;

    public PersonalComputer(String model, String manufacturer) {
        super(model, manufacturer);
    }
    public PersonalComputer(String model, String manufacturer, ComputerCase computerCase, Monitor monitor, Motherboard motherboard) {
        super(model, manufacturer);
        this.computerCase = computerCase;
        this.monitor = monitor;
        this.motherboard = motherboard;
    }
}
```

- we started talking about COMPOSITION and compared it to inheritance
- INHERITANCE is a way to reuse functionality and attributes
- COMPOSITION is a way to make the combination of classes act like a single coherent object
- computer assembly:

```java
public class Main {
    public static void main(String[] args) {
        ComputerCase theCase = new ComputerCase("2208", "Dell", "240");
        Monitor theMonitor = new Monitor("27inch Beast", "Acer", 27, "2540 x 1440");
        Motherboard theMotherboard = new Motherboard("BJ-200", "Asus", 4, 6, "v2.44");

        PersonalComputer thePC = new PersonalComputer("2208", "Dell", theCase, theMonitor, theMotherboard);

    }
}
```

- so here^ we've created thePC object by passing those three other objects to it, as well as the model and manufacturer
- before we've used INHERITANCE to use a method from the base class. How do we get acces to a COMPOSITE OBJECT's methods?
- we can tell one of the parts to do something
- how do we access drawPixelAt() in our Monitor class, for instance?
- we can get thePC's Monitor object, using the getter method, and then call drawPixelAt() on that object:
  `thePC.getMonitor().drawPixelAt(10, 10, "red");`
  ^this is one way of executing functionality, by using the getter method from thePC/PersonalComputer to get the instance of the Monitor class that PersonalComputer contains
- from that returned object, we're chaining the call to the method drawPixelAt()
  `thePC.getMotherboard().loadProgram("Windows OS")`

```java
public class Main {
    public static void main(String[] args) {
        ComputerCase theCase = new ComputerCase("2208", "Dell", "240");
        Monitor theMonitor = new Monitor("27inch Beast", "Acer", 27, "2540 x 1440");
        Motherboard theMotherboard = new Motherboard("BJ-200", "Asus", 4, 6, "v2.44");

        PersonalComputer thePC = new PersonalComputer("2208", "Dell", theCase, theMonitor, theMotherboard);

        thePC.getMonitor().drawPixelAt(10, 10, "red");
        thePC.getMotherboard().loadProgram("Windows OS");
        thePC.getComputerCase().pressPowerButton();
    }
}
```

here ^ in all three cases we're ultimately accessing functions in other classes (theCase, theMotherboard, theMonitor) but we're accessing them through thePC object

- this is what COMPOSITION is, this is the difference from INHERITANCE

"Composition is creating a whole from different parts"

- we built this personal computer by passing objects to the constructor, like assembling the computer
- now, what if we don't want anyone to access the parts directly?
- what if we only want PersonalComputer to call methods, and not the parts (with chaining) to be calling methods?

```java
        private void drawLogo() {
            monitor.drawPixelAt(1200, 50, "yellow");
        }

        public void powerUp() {
            computerCase.pressPowerButton();
            drawLogo();
        }

```

so when we call thePC.powerUp() in Main, from the calling code's perspective, this code in Main didn't have to know anything about PersonalComputer's parts, to get the PC to do something

- Composition is actually creating objects within objects
- it's like creating a boss object with worker objects
- PersonalComputer is managing and looking after all its parts(workers), and it uses composition to achieve that

- as a general rule, when you're designing your programs in Java, you probably want to look at composition first
  -> Look at composition before implementing inheritance!!!
- all of our parts were able to inherit a set of attributes, like the manufacturer and model. The calling code didn't have to know anything about these parts, to get PersonalComputer to do something

#### composition is preferred over inheritance in many designs:

- because it is more flexible. You can add parts in, or remove them, and these changes are less likely to have a downstream effect
- it provides functional reuse outside of the class hierarchy, meaning classes can share attributes and behavior, by having simliar components, instead of inheriting functionality from a parent or base class
- Java's inheritance breaks encapsulation, because subclasses may need direct access to a parent's state or behavior

#### Inheritance is less flexible

- adding a class to, or removing a class from a class hierarchy may impact all subclasses from that point
- a new subclass may not need all the functionality or attributes of its parent class

Before:
Product(model, manufacturer, width, height, depth) -> Motherboard(ramSlots, cardSlots, bios)
Product(model, manufacturer, width, height, depth) -> DigitalProduct(version, releaseDate)

- a digital product doesn't need these dimensions, so our hierarchy no longer works as previously intended
- we can use composition to revise our class hierarchy:
- if we make our base class Product less specific, more generic and add in a Dimensions class:
  Product(model, manufacturer) -> Motherboard(ramSlots, cardSlots, bios, dimensions)
  Dimensions(widht, height,depth)^

We've removed the width, height, and depth attributes from Product and made a new class Dimensions with those attributes
By pulling width, height, and depth into a dimension class, we can use composition to apply those attributes to any product as we did with our Motherboard example, but we're not requiring that all subclasses be defined with those attributes.

#### Smart Kitchen Challenge

Methods on my SmartKitchen class:

1. `addWater()` will set the CoffeeMaker's `hasWorkToDo` field to true
2. `pourMilk()` will set Refrigerator's `hasWorkToDo` to true
3. `loadDishwasher()` will set the `hasWorkToDo` flag to true on that appliance
   (3. Or, you could have a single method called `setKitchenState` that takes three boolean values, which could combine the three methods above)

4. application will access each appliance by using a getter and execute a method
5. appliance methods:
   Refrigeratr.orderFood()
   DishWasher.doDishes()
   CoffeeMaker.brewCoffee()
6. these methods should check the hasWorkToDo flag, and if true, print a message out about what work is being done
7. your application won't access the appliances directly
8. it should call doKitchenWork() which delegates the work to any of its appliances

"five classes with associated member vairables and methods"
"accepts five member variables as parameters"
(saving for verbage)

### Encapsulation

- we mentioned ENCAPSULATION when we went over getter methods
- in Java, encapsulation means hiding things by making them private or inaccessible:
- to make an interface simpler, we may want to hide unnecessary details
- to protect the integrity of data on an object, we may hide or restrict access to some of the data and operations
- to decouple the published interface from the internal details of the class, we may hide actual names and types of class members
- (this gives us more flexibility if we have to change the class in the future)

#### Interface

when we talk about a class's public or published interface, we're really talking about the class members that are exposed to, or can be accessed by, the calling code

- everything else in the class is internal, or private to it
- an application programming interface, or API, is teh public contract that tells others how to use the class
- when fields are set to public, we can't control when they get accessed
- if we use a constructor, we can make sure that the data is valid and the object is valid before the game (in this example) even starts
- if you're doing everything manually, there's no way to guarantee certain things are set up, like a player's health for example
- we want the ability to ensure certain conditions are met
- and that access to the (player) data during the code running (game) is controlled and protected

to recap:
Problem 1: Allowing direct access to data on an object can potentially bypass checks, and additional processing that your class has in place to manage the data
Problem 2: Allowing direct access to fields means calling code would need to change, when you edit any of the fields
Problem 3: Omitting a constructor that would accept initialization data may mean the calling code is responsible for setting up this data on the new object

The problems when classes aren't properly encapsulated

- Allowing direct access to data on an object can bypass checks and operations
- it encourages an interdependency, or coupling, between the calling code and the class.
- For the previous example, we shouled that changing a field name broke the calling code
- And we also showed that the calling code ahd to take on teh responsibility for properly initializing a new Player

One of the huge benefits of encapsulation is taht you're not actually affecting any other code. It's sort of like a black box in many ways
We want to protect access to our members' data!!!
We protect members of the class and some methods from external access
this prevents calling code from bypassing the rules and constraints we've built into the class
for our example, we ensured that a new instance of Player was initialized with valid data
we are also making sure there's no direct access to the fields

#### Encapsulation Principles

To create an encapsulated class, you want to:

- create constructors for object initialization, which enforces that only objects with valid data will get created
- use the private access modifier for your fields
- use setter and getter methods sparingly, and only as needed
- use access modifiers that aren't private, only for the methods that the calling code needs to use

Challenge: Printer
this is good encapsulation: we are using our constructor and getter, and not accessing the fields directly:

```java
public class Main {
    public static void main(String[] args) {
        Printer myPrinter = new Printer(50, true);
        System.out.println("initial page count = " + myPrinter.getPagesPrinted());
    }
}
```

### Polymorphism

- polymorphism lets us write code to call a method, but at runtime, this method's behavior can be different, for different objects.
- this means that the behavior that occurs while the program is executing depends on the runtime type of the object
- and the runtime type might be different from the declared type in the code
- the declared type has to have some kind of relationship to the runtime type, and inheritance is one way to establish this relationship
- "inheritance to support polymorphism"
- "inheritance tree" for movies with 3 subclasses, incoming:

```java
public class Movie {
  private String title;
  public Movie(String title) {
    this.title = title;
  }
  public void watchMovie() {
    String instanceType = this.getClass().getSimpleName();
    System.out.println(title + " is a " + instanceType + " film.");
  }

}

```

using the keyword `this`, referring to the current instance, and now we are calling a method on that `getClass()`. This method is on java.lang.object. This method returns class type information about the runtime instance on which this method is executing. And from that, we can get the name of the class using the `getSimpleName()` method

- This prints out the class which will be movie, if we execute this method on a runtime movie object
- but when we implement the subclasses and run this method, the runtime object could be an instance of one of those classes (movie type subclasses)

```java
public class Main {
    public static void main(String[] args) {
        Movie theMovie = new Movie("Star Wars");
        theMovie.watchMovie();
    }
}
```

For this ^ we get the output `Star Wars is a Movie film` because the runtime instance of the movie variable is the Mvoie class. It's the object we created in our main method when we did new Movie, which means it's really an instance of a Movie
"Here we've created the object using the new Movie statement and passed it the title of Star Wars. And then we assigned our movie instance to a movie reference variable, and here we just called it theMovie"

- remember if you don't give something an access modifier, meaning it has PACKAGE or, DEFAULT ACCESS
- to ensure your OVERRIDE METHOD SIGNATURE is right, you can use IntelliJ's override generation tool

```java
public class Adventure extends Movie {
    public Adventure(String title) {
        super(title);
    }
    @Override
    public void watchMovie() {
        super.watchMovie();
        System.out.printf(".. %s%n".repeat(3),
        "Pleasant Scene",
        "Scary Music",
        "Something Bad Happens");
    }
}
```

here ^ is IntelliJ's default code
it gives us the `@Override` annotation, and simply calls teh method on the Movie class, which is super, or base class for Adventure

- let's include major functionality for the Adventure class:
- we are using the format specifiers `%s` and `%n`. `%s` is used to replace any String (not super commonly used), and `%n` puts in a new line. the repeat method makes sure the string is repeated three times, so each stage plot gets printed on its own line

```java
public class Main {
    public static void main(String[] args) {
        Movie theMovie = new Movie("Star Wars");
        theMovie.watchMovie();

        Movie theAdventureMovie = new Adventure("Princess Bride");
        theAdventureMovie.watchMovie();

    }
}
```

- notice how we only have to change Movie to Adventure in one place! Because Adventure is really a type of Movie, a subclass, inheritance lets us say Adventure is a Movie. We can assign an Adventure object to a Movie variable
- at runtime, the method that gets run is determined by the Java Virtual machine based on the runtime object and not this variable type. Compare output for these two movies:

````
Star Wars is a Movie film
You're watching a movie! Yay!
Princess Bride is a Adventure film
You're watching a movie! Yay!
.. Pleasant Scene
.. Scary Music
.. Something Bad Happens```
````

- when we called watchMovie on the Adventure class, the behavior was the Adventure movies behavior. It wasn't just the base class's behavior. It first called Movie's method `Princess Bride is a Adventure film`, and then the plot stages for an Adventure film from the Adventure class's override of the method in Movie class
- this has been a simple example of Polymorphism
- "We've assigned an adventure movie instance to a Movie variable reference and saw that when it ran Java figured out which method to run, not on the compile time code, but on the runtime instance's method"

FACTORY METHOD:

```java
    public static Movie getMovie(String type, String title) {
        return switch (type.toUpperCase().charAt(0)) {
            case 'A' -> new Adventure(title);
            case 'C' -> new Comedy(title);
            case 'S' -> new ScienceFiction(title);
            default -> new Movie(title);
        };
    }
```

- this method passes in the type, and gets a different type of Movie subclass:
- in software programming design patterns, this is a FACTORY METHOD, it returns a new instance object
- FACTORY METHODS give us a way to get an object without having to know the details of how to create a new one, or specify the exact class we want
- the getMovie method returned an instance, which we maybe didn't know what it was and maybe we don't really care
- because the runtime object was an instance of the Adventure class, the method on that class was executed
- with our `watchMovie` method, the calling code doesn't need to know about each subclass or how to create different instances of movies. we can just call this method, passing the type and name, and the right object type is instantiated, and returned, but it's assigned to a variable with the Movie type. So this code will work for any Movie, or any of its subclasses, including subclasses that haven't even been created yet
- this keeps all the information about Movie and its subclasses in the control of the Movie class, and simplifies the work that needs to be done by the calling code
- this is a really nice ENCAPSULATION technique!!!

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        while(true) {
            System.out.print("Enter Type (A for Adventure, C for Comedy, " +
                    "S for Science Fiction, or Q to quit): ");
            String type = s.nextLine();
            if ("Qq".contains(type)) {
                break;
            }
            System.out.print("Enter Movie Title: ");
            String title = s.nextLine();
            Movie movie = Movie.getMovie(type, title);
            movie.watchMovie();
        }
    }
}
```

- the code called the method watchMovie() using a Movie reference variable
- but at runtime, the Movie wasn't really a Movie, it was an instance of the subclass - the Comedy class (or whichever was entered, A, C, or S)
- and it was the methot watchMovie() that's actually declared on the (Comedy) subclass that really got executed
- this is POLYMORPHISM in action!
- our compiled code in the main method of the main class never knew anything about the Comedy class or any of the other subclasses
- but at run time, we got an object of type Comedy back from the factory method
- and when the method watchMovie() was called on that, it called watchMovie on the ScienceFiction class
- the watchMovie() method on the Comedy subclass first called the method on Movie, which gave us the line, the first output statement, "Duck Soup is a Comedy film"
- that was printed because we called super.watchMovie() when we overrode the watchMovie() method in our Comedy subclass
- if we added a new subclass Documentary, the code in the main method would not have to change at all. All we would need to do is add a case 'D' to our factory method in Movie class
- This is the beauty of POLYMORPHISM as well as ENCAPSULATION

- the statement `movie.watchMovie()` is doing quite a lot of work! Java uses the runtime object type to see if that object has got its own version of the watchMovie method. In our case, if we look at our Comedy duck Soup, it gave us the Comedy movie. Java is smart enough to execute watchMovie in the Comedy subclass. It calls the watchMovie method on the parent class first, because of the super.watchMovie, then it prints our plot statements in the appropriate subclass (in this case our Comedy)

POLYMORPHISM IN ACTION!
-> the ability to execute different behavior, for different types, which are determined at runtime

- we did this with two statements in our main method:

```java
Movie movie = Movie.getMovie(type, title);
movie.watchMovie();
```

- POLYMORPHISM enables you to write generic code, based on the base class, or a parent class
- our code ^ is extendable, meaning it doesn't have to change, as new subclasses become available
- our code can handle any instances that are a Movie, or a subclass of Movie, that are returned from the factory method - even ones that don't exist yet

Part 3

```java
public class NextMain {
    public static void main(String[] args) {
        Movie movie = Movie.getMovie("A", "Jaws");
        movie.watchMovie();

        Adventure jaws = Movie.getMovie("A", "Jaws"); //<- won't compile!
    }
}
```

- this line `Adventure jaws = Movie.getMovie("A", "Jaws");` won't compile!
- IntelliJ tells us that the required type is Adventure, and the provided one is Movie.
  `incompatible types: Movie cannot be converted to Adventure`
- the compiler isn't going to run the code to figure out what will really happen
- it has to be satisfied with making assumptions about the code based on how we write the code
- in this case we declared that the method getMovie was going to return a Movie Class
- we didn't say it was going to return an instance of the Adventure class
- the compiler asks if every type of Movie can be called an Adventure, meaning, can every kind of Movie be assigned to an Adventure variable?
- no: the Adventure reference would not be able to handle a Comedy movie, if that was returned from our getmovie method.
- the compiler is not going to run the code to figure out whether it's right, we have to help the compiler more than that

#### casting

- just like with primitives we can use casting to get around our issue above ^
  `Adventure jaws = (Adventure) Movie.getMovie("A", "Jaws");`
  `jaws.watchMovie();`
- what if we cast to the wrong thing? like if we do `Adventure jaws = (Adventure) Movie.getMovie("C", "Jaws");`
- with the cast we've told the compiler that we are smarter than it, and to just run the code. So the code COMPILES, but if we RUN it, we get a special kind of exception, a Class Cast exception
- the ClassCastException tells us "class Comedy cannot be cast to class Adventure (Comedy and Adventure are in unnamed module of loader 'app')
- this is a bad situation, to have your code compile, but then get exceptions at runtime
- so, when can you assign an object of one type, to a reference with a different type?
- you can assign any object to a reference that is of type Object
  So what about:

```java
        Object comedy = Movie.getMovie("C", "Duck Soup");
        comedy.watchMovie();
```

- the assignment line works, but `comedy-watchmovie()` doesn't compile, because the compiler won't use the method return type to figure out what comedy really is, after you make this assignment. It just assumes it's an Object, and this variable only has access to Object's functionality. This is because, at any time in the code, an instance of Object itself could be assigned to this variable. The code has to work for whatever object gets assigned to this variable
- the compiler can't locate that method, watchMovie, on the Object class
- note that if you are using references that are too generic, like Object, you end up doing a lot of casting!

```java
        Object comedy = Movie.getMovie("C", "Duck Soup");
        Movie comedyMovie = (Movie) comedy;
        comedyMovie.watchComedy();
```

here ^ we cast to Movie, but this doesn't compile for the same reason. We can't execute watchMovie() on an Object reference, and we can't run the Comedy subclass's method watchComedy() on just a Movie reference

-> the compiler will only look at the reference type to determine if that method is on that type, and watchComedy() is not on the Movie class. We would need to cast to a more specific type, Comedy

```java
        Object comedy = Movie.getMovie("C", "Duck Soup");
        Comedy comedyMovie = (Comedy) comedy;
        comedyMovie.watchComedy();
```

#### var keyword

- var is a special contextual keyword in Java that lets our code take advantage of Local Variable Type Inference
- by using var as the type, we're telling Java to figure out the compile-time type for us

```java
        var airplane = Movie.getMovie("C", "Duck Soup");
        airplane.watchMovie();
```

- Since the Movie class was declared as the return type of the static method getMovie, then Java can infer that the type of this variable, airplane, should be a Movie
- why didn't it infer Comedy class? Nothing about the signature of the method indicated that a Comedy instance might be returned from the method, only that a Movie would be returned from this method

```java
        var plane = new Comedy("Airplane");
        plane.watchComedy();
```

- the compiler ^ easily inferred the type Comedy because we simply assigned a new instance of Comedy to this variable plane
- using this plane variable, we can execute methods specific to Comedy class without compile time errors

LOCAL VARIABLE TYPE INFERENCE (LVTI)

- introduced in Java 10
- one of the benefits is to help with the readability of the code and to reduce boilerplate code
- it can't be used in field declarations on a class
- it can't be used in method signatures, either as a parameter type or a return type
- it can't be used without an assignment, because the type can't be inferred in that case
- it can't be assigned a null literal, again because a type can't be inferred in that case

RUN TIME VS. COMPILE TIME TYPING

- you can think of the compile time type as teh DECLARED type
- this type is declared either as a variable reference, or a method return type, or a method parameter, for example
- in the case of LVTI we don't declare a type for the compiled reference type, it gets inferred, but the byte code is the same, as if we had declared it

- in many cases, the compile time type is the declared type to the left of the assignment operator
- what is returned on the right side of the assignment operator, from whatever expression or method is executed, sometimes can only be determined at runtime, when the code is executing conditionally, through the statements in the code
- you can assign a runtime instance to a different compile time type, only if certain rules are followed ->
- up to now we've only looked at the inheritance rule
- we can assign an instance to a variable of the same type, or a parent type, or a parent's parent type, including java.lang.Object, the ultimate base class

Why are runtime types different than compile time types?

- because of polymorphism
- polymorphism lets us write code once, in a more generic fashion, like with our Movie class code
- we saw that those two lines of code, using a single compile time type of Movie, actually supported four different runtime types
- each of those types was able to execute behavior unique to the class
- we can always assign an expression to a type withotu casting, if you're always assigning it to a parent class, or a base class type

Testing what the value of a runtime object really is:

- how do we test what the runtime type of a variable really is at runtime, if the declared type is something else?
- we can test several things:

1. we can use an if statement to see what the class name of the object is coming back from the method is when the code is running
   - we can use getClass() on the local variable reference unknownObject
   - (this method is available to any instance because it's a method on Object)
   - with getSimpleName() we're testing if the object coming back from that factory method has a class name that's Comedy
   - and if it does, we can cast the object to Comedy and assign it to a Comedy variable
   - then we can call any method on Comedy
   - the reason to cast to a Comedy class here is we want to execute the method that's specific to Comedy, watchComedy(). If we didn't cast to a Comedy class, we couldn't use that method
   - this is why the var keyword use was so helpful, because we didn't have to do this testing to run the method at runtime

```java
        Object unknownObject = Movie.getMovie("C", "Airplane");
        if (unknownObject.getClass().getSimpleName() == "Comedy") {
            Comedy c = (Comedy) unknownObject;
            c.watchComedy();
        }
```

2. testing if the object that comes back & the `instanceof` operator

- the instanceof operator lets you test the type of an object or instance: `unknownObject instanceof Adventure`
- the reference variable you are testing is the left operand
- the type you are testing for is the right operand
- note we are not testing type name "Adventure" but actual type Adventure
- this operator returns true if unknownObject is an instance of Adventure

```java
        var plane = new Comedy("Airplane");
        plane.watchComedy();

        Object unknownObject = Movie.getMovie("C", "Airplane");
        if (unknownObject.getClass().getSimpleName() == "Comedy") {
            Comedy c = (Comedy) unknownObject;
            c.watchComedy();
        } else if (unknownObject instanceof Adventure) {
            ((Adventure) unknownObject).watchAdventure();
        }
```

- so in this ^ code we're testing if unknownObject is really an Adventure object, and then if it is, if that's true, we want to cast unknownObject to Adventure and call watchAdventure(), a method that's only on the Adventure class
- the outer parentheses are the result of the cast to teh Adventure type, and we can chain a method directly on that:
  `((Adventure) unknownObject).watchAdventure();`
- we ^ don't have to assign the result of the cast to a local variable

3. another way to use instanceof operator:

```java
        if (unknownObject instanceof ScienceFiction syfy) {
            syfy.watchSciFi();
        }
```

- from JDK 16
- this is called pattern matching support for the instanceof operator
- if the JVM can identify that the object matches the type, it can extract data from the object without casting: `unknownObject instanceof ScienceFiction syfy`
- for this operator, the object can be assigned to a binding variable, which here is called syfy
- the variable syfy (if the instanceof method returns true) is already typed as a ScienceFiction variable
- we don't have to create the variable in the block statement, and we don't have to cast it

#### Polymorphism challenge

Polymorphism really just means many forms. What we want to do in this challenge, is have our runtime code execute different behavior for different objects.
At least one method should print the type of the runtime object
-> use `.getClass().getSimpleName()` to print the type of the runtime object

in this challenge we created a polymorphic method on the Main class `runRace()`, and it only knew about the Car class, and none of Car's subclasses:

```java
public class Main {
    public static void main(String[] args) {
        Car car = new Car("blue whatever");
        runRace(car);

        Car ferrari = new GasPoweredCar("2022 Blue Ferrari 296 GTS", 15.4, 6);
        runRace(ferrari);

        Car tesla = new ElectricCar("2022 Red Tesla Model 3", 568, 75);
        runRace(tesla);

        Car ferrariHybrid = new HybridCar("2022 black Ferrari SF90 Stradale", 16, 8, 8);
        runRace(ferrariHybrid);
    }

    public static void runRace(Car car) {
        car.startEngine();
        car.drive();
    }
}

```

"used the Car class as teh declared compile time type" and at runtime we executed different behavior on different objects, all of which could be called a Car in a way

#### OOP Final Challenge 1

Bill's Burgers
"MealOrder" uses composition in its design. It's composed of a burger, as well as a drink and a side (both are items).
MealOrder "HAS A" Burger, and "HAS" Items
the Burger class is specialized, a specialized Item, that uses inheritance from Item
We will use the MealOrder class to hide some of the implementation details from the calling code. So, we'll use encapsulation techniques on MealOrder and Item.

This constructor for MealOrder allows the calling code to be unaware of anything except the MealOrder itself. The details of the meal are encapsulated inside this class MealOrder, it can be configured with a few string literals

```java
    public MealOrder(String burgerType, String drinkType, String sideType) {
        this.burger = new Burger(burgerType, 4.0);
        this.drink = new Item("drink", drinkType, 1.00);
        this.side = new Item("side", sideType, 1.50);
    }
```

```java
    public void printItemizedList() {
        burger.printItem();
        drink.printItem();
        side.printItem();
        System.out.println("-".repeat(30));
        Item.printItem("TOTAL PRICE", getTotalPrice());
    }
```

since everything is an item we can use the static printItem method on all parts of the meal (whaaaat)
(this one:)

```java
    public static void printItem(String name, double price) {
        System.out.printf("%20s:%6.2f%n", name, price);
    }
```

instead of overriding toppings for the Deluxe Burger, he overloads the method to add more toppings:

```java
    public void addToppings(String extra1, String extra2, String extra3, String extra4, String extra5) {
        super.addToppings(extra1, extra2, extra3);
        deluxe1 = new Item("TOPPING", extra4, 0);
        deluxe2 = new Item("TOPPING", extra5, 0);
    }
```

notice use of binding variable "db": (we didn't have to cast or set a local variable)

```java
    public void addBurgerToppings(String extra1, String extra2, String extra3,
                                  String extra4, String extra5) {
        if (burger instanceof DeluxeBurger db) {
            db.addToppings(extra1, extra2, extra3, extra4, extra5);
        } else {
            burger.addToppings(extra1, extra2, extra3);
        }
    }
```
