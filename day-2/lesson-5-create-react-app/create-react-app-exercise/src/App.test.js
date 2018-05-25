import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { shallow } from 'enzyme'

describe('<App />', () => {
  it("renders a div tag contains the text 'Hello React'", () => {
    let wrapper = shallow(<App/>)
    expect(
      wrapper.contains(<div>Hello React</div>)
    ).toBe(true)
  })
})
