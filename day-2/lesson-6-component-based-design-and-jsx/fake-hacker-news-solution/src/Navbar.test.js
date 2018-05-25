import React from 'react'
import ReactDOM from 'react-dom'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai';


import Navbar from './Navbar'

Enzyme.configure({ adapter: new Adapter() })

describe('<Navbar/>', () => {
  let wrapper = Enzyme.shallow(<Navbar/>)
  debugger
  it('renders a div tag that contains happer news', () => {
    expect(wrapper.contains(<div>Hacker News</div>)).to.equal(true)
  })
  it('renders a nav tag with 7 div tags containing New Comments Show Ask Jobs Submit Login', () => {
    let ele = (
        <nav>
          <div>New</div>
          <div>Comments</div>
          <div>Show</div>
          <div>Ask</div>
          <div>Jobs</div>
          <div>Submit</div>
          <div>Login</div>
        </nav>
    )
    expect(wrapper.contains(ele)).to.equal(true)
  })
})

