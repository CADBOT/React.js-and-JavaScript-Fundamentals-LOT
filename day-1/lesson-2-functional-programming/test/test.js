let { expect } = require('chai')
let sinon = require('sinon')

let lib = require('../index')

describe('forEach exercises', () => {
  let cStub
  beforeEach(() => {
    cStub = sinon.spy(console, 'log')
  })
  afterEach(()  =>{
    cStub.restore()
  })
  describe('printNames', () => {
    it('will log every name in the names array', () => {
      let names = ['tim', 'bob', 'jane']
      lib.printNames(names)
      names.forEach((name, i) => {
        expect(cStub.getCall(i).lastArg).to.equal(name)
      })
    })
  })
  describe('addOne', () => {
    it('will take an array of numbers, add one to each number, then log each number to the console', () => {
      let numbers = [1, 10, 100]
      lib.addOne(numbers)
      numbers.forEach((number, i) => {
        expect(cStub.getCall(i).lastArg).to.equal(number + 1)
      })
    })
  })
})

describe('map exercises', () => {
  describe('timesTen', () => {
    it('will take an array of numbers and return a new array, where each element is multipied by 10', () => {
      let numbers = [1, 10, 100]
      let newNumbers = lib.timesTen(numbers)
      expect(newNumbers).to.eql([10,100,1000]) 
    })
  })
  describe('justAges', () => {
    it('will take an array of objects with name and age properties and return an array of the just the ages', () => {
      let people = [{name: 'tim', age: 20}, {name: 'beth', age: 30}]
      let ages = [20, 30]
      let computedAges = lib.justAges(people)
      expect(computedAges).to.eql(ages) 
    })
  })
})

describe('filter exercises', () => {
  describe('onlyOver20', () => {
    it ('will take an array of numbers and return a new array containing only the numbers greater than 20', () => {
      let numbers = [0, 1, 15, 22, 50]
      let answer = lib.onlyOver20(numbers)
      expect(answer).to.eql([22, 50])
    })
  })
})

describe('reduce exercises', () => {
  describe('addAll', () => {
    it('will take an array of numbers and add them all together', () => {
      let numbers = [5, 5, 10]
      let result = lib.addAll(numbers)
      expect(result).to.equal(20)
    })
  })

  describe('timeUsed', () => {
    it('will take an activityName and array of objects with name and timeSpent properties and return how much time was spent on ActivityName', () => {
      let arr = [{name: 'sleeping', time: 7}, {name: 'working', time: 8}, {name: 'sleeping', time: 8}]
      let result = lib.timeUsed('sleeping', arr)
      expect(result).to.equal(15)
    }) 
  })
})
