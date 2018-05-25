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
        <li>Bob</li>
      </ul>
    )
    expect(wrapper.contains(ele)).toBe(true)
  })
  it('has a form with an input and a button', () => {
    let ele = (
      <form>
        <input/>
        <button>Add User</button>
      </form>
    )
    expect(wrapper.containsMatchingElement(ele)).toBe(true)
  })
  it('can add a new user to the list', () => {

    let input = wrapper.find('input').first()    
    let form = wrapper.find('form').first()
    input.instance().value = 'Sarah'
    form.simulate('submit', {preventDefault(){}})
    input.simulate('change', {target: {value: 'Sarah'}})
    form.simulate('submit', {preventDefault(){}})
    expect(wrapper.state().users).toEqual(['Bob', 'Sarah'])
  })
})
