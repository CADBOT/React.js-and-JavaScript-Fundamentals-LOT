import React from 'react'
import ReactDOM from 'react-dom'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai';


import App from './App'
import Navbar from './Navbar'
import ArticleList from './ArticleList'

Enzyme.configure({ adapter: new Adapter() })

describe('<App/>', () => {
  let wrapper = Enzyme.shallow(<App/>)
  it('renders a <NavBar/>', () => {
    expect(wrapper.contains(<Navbar/>)).to.equal(true)
  })
  it('renders an <ArticleList/>', () => {
    expect(wrapper.contains(<ArticleList/>)).to.equal(true)
  })
})

