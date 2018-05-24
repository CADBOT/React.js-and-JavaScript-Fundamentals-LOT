/*
  In most langauges curly braces always create a scope. This isn't the case be default
  in JavaScript. var x can be accessed outside of the if statement. Make the tests
  pass by using let
*/
function letExercise() {
  if (true) {
    let x = 4
  }
  x
}

/*
  Both let and var allow a variable to be reassigned. Use const to make the function below
  throw an error when x is reassigned
*/
function constExercise() {
  const x = 10
  x = 4
}

/*
  Use map combined with an arrow function to return a new array of numbers where
  each number is doubled i.e.

  numbers = [1, 2, 3]

  output: [2, 4, 6]
*/
function arrowExercise(numbers) {
  return numbers.map(num => num * 2)
}


function objLiteralExerciseOne() {
  let x = 4
  let obj = {x}
  return obj
}

function objLiteralExerciseTwo() {
  let obj = {
    x() {
      console.log('hello!')
    }
  }
  return obj
}

function objLiteralExerciseThree() {
  let x = 'favorite'
  let y = 'Food'
  let obj = {
    [x + y]: 'pizza'
  }
  return obj
}

function arrayDestructuring(array) {
  let x
  let y
  // Dont edit code above this
  ;[x,, y] = array
  // Don't edit code below this
  return [x, y]
}

function objectDestructuring(obj) {
  let model
  let year
  // Dont edit code above this
  // Note: you must wrap the destructure in parens since we arent declaring the variables here
  ({model, year} = obj)
  // Don't edit code below this
  return {model, year}
}

function defaultArgs(x=0, y=0) {
  return x + y
}

function destructuringArgs({name, age}) {
  return [name, age]
}

function arraySpread(array) {
  return [...array, 10]
}

function objectSpread(obj) {
  return {...obj, copied: true}
}

function stringTemplates(name) {
  return `Hello ${name}` 
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
