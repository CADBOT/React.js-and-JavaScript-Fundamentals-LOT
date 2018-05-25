import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<App/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = Enzyme.shallow(<App/>)
  })
  it('initially renders a userslist with one user', () => {
    let ele = (
      <ul>
        <li>Bob 40</li>
      </ul>
    )
    expect(wrapper.contains(ele)).toBe(true)
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
  it('can add a new user to the list', () => {
    let inputName = wrapper.find('input').first()
    let inputAge = wrapper.find('input').last()
    let form = wrapper.find('form').first()
    inputName.simulate('change', {target: {name: 'username', value: 'Sarah'}})
    inputAge.simulate('change', {target: {name: 'age', value: '30'}})
    form.simulate('submit', {preventDefault(){}})
    expect(wrapper.state().users).toEqual([{username: 'Bob', age: '40'}, {username: 'Sarah', age: '30'}])
  })
})
