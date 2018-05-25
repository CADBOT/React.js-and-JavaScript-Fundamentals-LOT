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
  it('contains a increment button', () => {
    expect(wrapper.containsMatchingElement(<button>increment</button>)).toBe(true)
  })
  it('contains a decrement button', () => {
    expect(wrapper.containsMatchingElement(<button>decrement</button>)).toBe(true)
  })
  it('can increment the count', () => {
    let button = wrapper.find('button').first()
    button.simulate('click')
    expect(wrapper.state().count).toEqual(1)
  })
  it('can decrement the count', () => {
    let button = wrapper.find('button').last()
    button.simulate('click')
    expect(wrapper.state().count).toEqual(-1)
  })
})
