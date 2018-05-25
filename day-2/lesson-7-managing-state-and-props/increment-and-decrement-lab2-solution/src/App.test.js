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
  it('displays a div with an initial count of 0', () => {
    let ele = (
      <div>
        count: 0
      </div>
    )
    expect(wrapper.contains(ele)).toBe(true)
  })
  it('contains a increment button with name attribute increment', () => {
    expect(wrapper.containsMatchingElement(<button name='increment'>increment</button>)).toBe(true)
  })
  it('contains a decrement button with name attribute decrement', () => {
    expect(wrapper.containsMatchingElement(<button name='decrement'>decrement</button>)).toBe(true)
  })
  it('can increment the count', () => {
    let button = wrapper.find('button').first()
    button.simulate('click', {target: {name: 'increment'}} )
    expect(wrapper.state().count).toEqual(1)
  })
  it('can decrement the count', () => {
    let button = wrapper.find('button').last()
    button.simulate('click', {target: {name: 'decrement'}} )
    expect(wrapper.state().count).toEqual(-1)
  })
})
