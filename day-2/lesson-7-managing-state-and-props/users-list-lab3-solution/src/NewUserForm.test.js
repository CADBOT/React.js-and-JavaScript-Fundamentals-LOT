import React from 'react';
import NewUserForm from './NewUserForm';
import sinon from 'sinon'

import Enzyme from 'enzyme';
describe('<NewUserForm/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = Enzyme.shallow(<NewUserForm/>)
  })
  it('has a form with an input with name attribute set to username', () => {
    let ele = (
        <input name='username'/>
    )
    expect(wrapper.containsMatchingElement(ele)).toBe(true)
  })
  it('has a form with an input with name attribute set to age', () => {
    let ele = (
        <input name='age'/>
    )
    expect(wrapper.containsMatchingElement(ele)).toBe(true)
  })
  it('can add a new user to the list by invoking the addUser prop', () => {
    let addUser = sinon.spy()
    wrapper = Enzyme.shallow(<NewUserForm addUser={addUser}/>)
    let inputName = wrapper.find('input').first()
    let inputAge = wrapper.find('input').last()
    let form = wrapper.find('form').first()
    inputName.simulate('change', {target: {name: 'username', value: 'Sarah'}})
    inputAge.simulate('change', {target: {name: 'age', value: '30'}})
    form.simulate('submit', {preventDefault(){}})
    expect(addUser.calledWith({username: 'Sarah', age: '30'})).toBe(true)
  })
})
