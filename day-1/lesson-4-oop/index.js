// Finish the Food consturctor function below. Make the constructor function
// take name, cost, and flavor parameters and use the this keyword to attach them
// to the object being constructed
function Food() {
}


/*
  Finsh the UserWidget class below. Make the constructor take and set name, age, and salary properties

  Also create a method called render that will return a string that has HTML descibing how to render this
  into a div tag. For example:

   let user = new UserWidger('eric', 22, 80000)
   let html = user.render()


  html would contain the following string
  <div>Name: Eric, Age: 22, Salary: 80000</div>
*/
class UserWidget {
  constructor() {
  }

  render() {
  }
}

/*
  Extra Credit:
  Finsh the StudentWidget class below. Make it extend the UserWidget above.

  It will operate the same way, but take an additional university property
  Create a new render method that displays the unviersity as well 

  No tests for this one. They way you render the information is up to you!
*/
class StudentWidget {
  constructor() {

  }

  render() {

  }
}

/*
  Exercises for this keyword
*/

/*
 * Uncomment out the listPets method. As written it will crash your code. Use
 * your knowledge of es6 arrow functions to fix it.
*/
class Resident {
  constructor() {
    this.name = 'Jim Tenant'
    this.pets = ['Fluffy', 'Rex']
  }

  /*
  listPets() {
    let str = ''
    this.pets.forEach(function(pet) {
      str += 'Tenant name: ' + this.name + ' Pet name: ' + pet + '\n'
    })
    return str
  }
  */
}

/*
  Use bind/call/apply to fix this function. It should return 'Charlie Brown'
*/
function bindExercise() {
  // don't alter the class
  class Resident {
    constructor() {
      this.firstName = 'Charlie'
      this.lastName = 'Brown'
    }

    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }

  let res = new Resident()
  let fullNameFunction = res.fullName
  let fullName = fullNameFunction()
  return fullName 
}



// Don't touch code below these lines. They are necessary for the test framework
module.exports = {
 Food,
 UserWidget,
 Resident,
 bindExercise
}
