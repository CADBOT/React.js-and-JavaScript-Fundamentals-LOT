let { expect } = require('chai')

let lib = require('../index')
describe('es6 exercises', () => {
  describe('letExercise', () => {
    it('will throw an error when x is accessed outside of the if statement', () => {
      expect(lib.letExercise).to.throw()
    })
  })
  describe('constExercise', () => {
    it('will throw an error when x is assigned a different value', () => {
      expect(lib.constExercise).to.throw()
    })
  })
  describe('arrowExercise', () => {
    let numbers = [1, 5, 10]
    let functionString = lib.arrowExercise.toString()
    it('will return an array with each number multipled by 2', () => {
      expect(lib.arrowExercise(numbers)).to.eql([2, 10, 20]) 
    })
    it("won't use a for loop", () => {
      expect(functionString.indexOf('for')).to.equal(-1)
    })
    it("Won't use the function keyword in the call to map", () => {
      expect(functionString.indexOf('function', 1)).to.equal(-1)
    })
  })
  describe('objLiteralExerciseOne', () => {
    it('will use shorthand syntax to create the object', () => {
      debugger
      let functionStrArray = lib.objLiteralExerciseOne.toString().split('')
      let xCount = functionStrArray.reduce((count, char) => {
        return (char === 'x') ? count + 1 : count
      }, 0) 
      expect(xCount).to.equal(3)
    })
  })
  describe('objLiteralExerciseTwo', () => {
    it('will add a function property with the new syntax', () => {
      let functionStr = lib.objLiteralExerciseTwo.toString()
      expect(functionStr.lastIndexOf('function')).to.equal(0)
    })
  })
  describe('objLiteralExerciseThree', () => {
    it('will use a computed property', () => {
      let functionStr = lib.objLiteralExerciseThree.toString()
      expect(functionStr.indexOf('[')).to.not.equal(-1)
    })
  })
  describe('arrayDestructuring', () => {
    it('will create a new array containing only the 0th and 2nd element from the passed in array', () => {
      let arr = [200, 4, 70, 8, 12]
      expect(lib.arrayDestructuring(arr)).to.eql([200, 70])
    })
  })
  describe('objectDestructuring', () => {
    it('will create a new object with only the model and year properties/values of the passed in object', () => {
      let obj = {model: 'prius', year: 2010, color: 'red', maker: 'toyota'}
      expect(lib.objectDestructuring(obj)).to.eql({model: 'prius', year: 2010})
    })
  })
  describe('defaultArgs', () => {
    it('will add two numbers together', () => {
      expect(lib.defaultArgs(10, 2)).to.equal(12)  
    })
    it('will have parameters x and y default to 0', () => {
      expect(lib.defaultArgs(10)).to.equal(10)  
    })
  })
  describe('destructuringArgs', () => {
    let obj = {name: 'bob', age: 50}
    it('will take an object with name and age properties, and return an array where the 0th entry is the name and the 1st is the age', () => {
      expect(lib.destructuringArgs(obj)).to.eql(['bob', 50]) 
    })
    it('will use destructuring inside the parameters', () => {
      let functionStr = lib.destructuringArgs.toString()
      expect(functionStr.indexOf('{')).to.equal(27)
    })
  })
  describe('arraySpread', () => {
    it('will copy the passed in array to a new array using spread, and add a new value 10 to the end', () => {
      expect(lib.arraySpread([1,2,3])).to.eql([1,2,3,10])
    })
  })
  describe('objectSpread', () => {
    it('will copy the passed in object to a new array using spread, and add a new property called copied with value of true', () => {
      expect(lib.objectSpread({name: 'hank'})).to.eql({name: 'hank', copied: true})
    })
  })
  describe('stringTemplates', () => {
    it('will return a string that says "Hello NAME" to the passed in name', () => {
      expect(lib.stringTemplates('sue')).to.equal('Hello sue')
    })
    it('will use template strings instead of string concat', () => {
      let functionStr = lib.stringTemplates.toString()
      expect(functionStr.indexOf('$')).to.not.equal(-1)
    })
  })
})
