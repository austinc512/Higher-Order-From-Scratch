# Higher-Order-From-Scratch

Whiteboard, make a code plan and build each of the following methods:

1. .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.

2. .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.

3. .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.

# Whiteboard:

1. .map()

- this method applies some process to each of the array elements
  const map1 = array1.map(x => x \* 2);
- this method creates a new array.

- "function that takes an array of items and a function"
  - our function is going to take 2 arguments, an input array and a function for manipulating these array elements.
    - x => x \* 2 is an example of the second argument

2. .reduce()

- function that takes an array of food orders with their amounts and returns the total amount of all the food orders.

- 'with their amounts' - I'm imagining this to be an object with some name and cost.

- use a for item in arr loop
- access amount property
- this is using the accumulator use case

3. .filter()

- function that takes an array of items and a function that returns an array with only the items that return true in the function.

- I know this function will return another array
- the filter method takes a conditional statement
- if that conditional returns true, push to output array
