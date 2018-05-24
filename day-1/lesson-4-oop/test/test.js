let { expect } = require('chai')
let lib = require('../index')

describe('Class exercises', () => {
  describe('food', () => {
    it('takes name cost and flavor parameters and returns a new object', () => {
      debugger
      let food = new lib.Food('ice cream', 2, 'sweet')
      expect(food.name).to.equal('ice cream')
      expect(food.cost).to.equal(2)
      expect(food.flavor).to.equal('sweet')
    })
  })
  describe('UserWidget', () => {
    let user = new lib.UserWidget('Ashley', 45, 200000)
    it('will create new objects with name age and salary properies', () => {
      expect(user.name).to.equal('Ashley')
      expect(user.age).to.equal(45)
      expect(user.salary).to.equal(200000)
    })
    it('has a render method that returns an string containing html that describes the user', () => {
      expect(user.render()).to.equal('<div>Name: Ashley, Age: 45, Salary: 200000</div>')
    })
  })
})


describe('This binding exercises', () => {
  describe('fix Resident', () => {
    it('will create the proper string for the listPets method', () => {
      let resident = new lib.Resident()
      let str = resident.listPets()
      expect(str).to.equal('Tenant name: Jim Tenant Pet name: Fluffy\nTenant name: Jim Tenant Pet name: Rex\n')
    })
  })
  describe('bindExercise', () => {
    it('will return the proper full name and', () => {
      let str = lib.bindExercise()
      expect(str).to.equal('Charlie Brown')
    })
  })
})
