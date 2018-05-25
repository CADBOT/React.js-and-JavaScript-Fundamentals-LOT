import React from 'react'
import ReactDOM from 'react-dom'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai';


import ArticleList from './ArticleList'
import Article from './Article'

Enzyme.configure({ adapter: new Adapter() })

describe('<ArticleList/>', () => {
  let wrapper = Enzyme.shallow(<ArticleList/>)
  it('renders an <Article/>', () => {
    expect(wrapper.contains(<Article/>)).to.equal(true)
  })
})

