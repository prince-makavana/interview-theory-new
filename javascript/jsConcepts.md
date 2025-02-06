### Deep copy and shallow copy

### Deep copy methods
1) JSON.parse(JSON.stringify({}))
2) _.clonedeep({})
3) structuredClone()

### Shalow copy
1) {...obj} Spread operator

### Object Destructuring
 const { name, email } = obj

### Types checking

1) typeof null -> object
2) typeof undefined -> undefined
3) typeof {name: 'prince'} === {name: 'prince'} -> false

## JS Concepts
1) What is closures?
- A closure is the combination of a function bundled(enclosed) together with its lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables, functions and other data even after the outer function has finished its execution.
    The closure has three scope chains.

    - Own scope where variables defined between its curly brackets
    - Outer function's variables
    - Global variables

2) What is hoisting?
- Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of variable hoisting,

- Variables declared with var are hoisted but initialized as undefined.

- Variables declared with let and const are hoisted but exist in the Temporal Dead Zone (TDZ) and cannot be accessed until the declaration line is executed

3) What is promise?
- A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

4) # Difference between promises and callback

## CALLBACK
- Function pass as an argument to another function
- less readable with nested callback
- extra parameter passed to callback
- can use simple asyncronous task

## PROMISE
- Promise is an object that will resolve or reject in future
- More readable code with chaining (then and catch)
- inbuilt error handling with .then and .catch
- can use complex asyncronous task

5) # Var and let difference

  ## Var
  - Can redeclare variable
  - Var variable hoisted
  - Accessible with in all function

  ## Let
  - Can not redeclare variable
  - Let variable not hoisted
  - Accessible with in block only

1) What is the difference between abstract class and interface?
2) What is the advantages of typescript?
3) How many types of indexing in mongodb?
- Single field index
- Compound index
- Multikey index
- Geospatial index

4) How can i reduce load of my application?
5)  When should i use aggregate in mongodb?
6)  what is singleton class?