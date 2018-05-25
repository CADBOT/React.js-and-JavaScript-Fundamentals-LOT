
import React from 'react'
import ReactDOM from 'react-dom'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai';


import Article from './Article'

Enzyme.configure({ adapter: new Adapter() })

describe('<Article/>', () => {
  let wrapper = Enzyme.shallow(<Article/>)
  it('renders a div tag with 1. New JavaScript Framework...', () => {
    let ele = (
        <div>1. New JavaScript Framework (javascripttimes.com)</div>
    )
    expect(wrapper.contains(ele)).to.equal(true)
  })
  it('renders a div tag with 49 ponts by JsUser', () => {
    let ele = (
        <div>49 points by JsUser</div> 
    )
    expect(wrapper.contains(ele)).to.equal(true)
  })
})

