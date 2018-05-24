/*
  In most langauges curly braces always create a scope. This isn't the case be default
  in JavaScript. var x can be accessed outside of the if statement. Make the tests
  pass by using let
*/
function letExercise() {
  if (true) {
    var x = 4
  }
  x
}

/*
  Both let and var allow a variable to be reassigned. Use const to make the function below
  throw an error when x is reassigned
*/
function constExercise() {
  let x = 10
  x = 4
}

/*
  Use map combined with an arrow function to return a new array of numbers where
  each number is doubled i.e.

  numbers = [1, 2, 3]

  output: [2, 4, 6]
*/
function arrowExercise(numbers) {
}


/*
  Update the below function to use enhanced object literals
  so we don't have to repeat x twice in the object
*/
function objLiteralExerciseOne() {
  let x = 4
  let obj = {x: x}
  return obj
}

/*
  Update the below function to use enhanced object literal function shorthand syntax
*/
function objLiteralExerciseTwo() {
  let obj = {
    x: function() {
      console.log('hello!')
    }
  }
  return obj
}

/*
 update the below function to use x and y in a computed object property 
*/
function objLiteralExerciseThree() {
  let x = 'favorite'
  let y = 'Food'
  let obj = {
    favoriteFood: 'pizza'
  }
  return obj
}

/*
  Make it so that the function will take the 0th and 2nd value from the passed in array,
  and create a new array where those values will be the 0th and 1st value respectively in
  the new array. Use array destructuring to do this

  HINT: if you aren't using ;'s, be sure to add a leading ; before you do the destructure
*/
function arrayDestructuring(array) {
  let x
  let y
  // Dont edit code above this
  // YOUR CODE HERE
  // Don't edit code below this
  return [x, y]
}

/*
  Use object destructuring to copy the model and year properties of the passed in objects
  to a new object
*/
function objectDestructuring(obj) {
  let model
  let year
  // Dont edit code above this
  // Note: you must wrap the destructure in parens since we arent declaring the variables here
  // Don't edit code below this
  return {model, year}
}

/*
  Make the below function return the result of x and y added together

  Also update it to use es6 default args so x and y both default to 0
*/
function defaultArgs(x, y) {
}

/*
  this function takes an object with name and age properties, and converts it to an
  array representation. Update it to use function argument destructuring 
*/
function destructuringArgs(obj) {
  let name = obj.name
  let age = obj.age
  return [name, age]
}

/*
  create and return a new array that copies all the values from the old array,
  and adds a 10 at the end Ex:

  array = [7, 4]

  output: [7, 4, 10]

  Use array spread to do so
*/
function arraySpread(array) {
}

/*
  create and return a new array that copies all the values from the old object,,
  and adds propepety called copied with a value of true

  obj = {name: 'beth'}

  output: {name: 'beth', copied: true}

  use object spread to do this
*/
function objectSpread(obj) {
}

/*
  update the below function to use es6 template strings instead of string concat
*/
function stringTemplates(name) {
  return 'Hello ' + name 
}


module.exports = {
  letExercise,
  constExercise,
  arrowExercise,
  objLiteralExerciseOne,
  objLiteralExerciseTwo,
  objLiteralExerciseThree,
  arrayDestructuring,
  objectDestructuring,
  defaultArgs,
  destructuringArgs,
  arraySpread,
  objectSpread,
  stringTemplates
}
