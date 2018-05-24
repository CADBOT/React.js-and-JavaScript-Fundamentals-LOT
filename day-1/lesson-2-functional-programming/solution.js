
/*
  names is an array of strings: Ex
  
  names =  ['bob', 'sally', 'tim' 'sneha']

  use a forEach to log each of these names to the console
*/
function printNames(names) {
  names.forEach(name => console.log(name))
}

/*
  names is an array of numbers: Ex
  
  numbers =  [1, 10, 4]

  use a forEach to log each of these numbers + 1 to the console

  For the above example input, this is the expected output

  2
  11
  5
*/
function addOne(numbers) {
  numbers.forEach(number => console.log(number+1))
}

/*
  names is an array of numbers: Ex
  
  numbers =  [1, 10, 4]

   return a new array where each number is multiplied by 10

  for the above input this is what you would return
  [10, 100, 40]
*/
function timesTen(numbers) {
  return numbers.map(n => n * 10)
}


/*
  people is an array of objects: Ex
  
  people =  [{name: 'sally',  age: 20}, {name: 'sneha', age:35 }]
   
  return a new array that contains only the ages

  for the above input this is what you would return
  [20, 35]
*/
function justAges(people) {
  return people.map(p => p.age)
}

/*
  numbers is an array of numbers: Ex
  
  numbers =  [1, 4, 10, 50, 0, 100]
   
  return a new array that contains only the numbers over 20

  for the above input this is what you would return
  [50, 100]
*/
function onlyOver20(numbers) {
  return numbers.filter(number => number > 20)
}


/*
  numbers is an array of numbers: Ex
  
  numbers =  [1, 4, 10, 100]
   
  return a number that is the sum of all numbers in the array

  for the above input this is what you would return
  115
*/
function addAll(numbers) {
  return numbers.reduce((sum, x) => sum + x)
}

/*
  name is a string that represents an activity name: Ex

  name = 'sleeping'


  array is an array of objects that have activityName and time properties
  
  array = [{activityName: 'sleeping', time 8}, {name: 'working out', time: 2},  {activityName: 'sleeping', time 4}]
   
  return a number that is the total amout of time spent on the activity specifed for the name paramete

  for the above input this is what you would return
  12 
*/
function timeUsed(name, array) {
  array = array.filter(activity => activity.name === name)
  return array.reduce((total, activity) => {
    return total + activity.time
  }, 0)  
}

module.exports = {
  printNames,
  addOne,
  timesTen,
  justAges,
  onlyOver20,
  addAll,
  timeUsed
}
