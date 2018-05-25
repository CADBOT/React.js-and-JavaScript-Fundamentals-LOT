import React from 'react';
import UserList from './UserList';

import Enzyme from 'enzyme';
describe('<UserList/>', () => {
  let wrapper
  let users = [{username: 'Bob', age: 40}, {username: 'Sneha', age:30}]
  beforeEach(() => {
    wrapper = Enzyme.shallow(<UserList users={users}/>)
  })
  it('renders a ul with an li for each user in users prop', () => {
    expect(wrapper.find('ul').exists()).toBe(true)
    expect(wrapper.find('li').length).toEqual(2)
  })
  it('renders the passed in users name and age into li tags', () => {
    let liOneText = wrapper.find('li').first().text()
    let liTwoText = wrapper.find('li').last().text()
    expect(liOneText).toEqual('Bob 40')
    expect(liTwoText).toEqual('Sneha 30')
  })
})
/*
import Enzyme from 'enzyme';
describe('<UserList/>', () => {
  it('renders a userlist', () => {
    let users = [{username: 'Bob', age: 40}, {username: 'Sneha', age:30}]
    let wrapper = Enzyme.shallow(<UserList users={users}/>)
    let ele = (
      <ul>
        <li key={0}>Bob 40</li>
        <li key={1}>Sneha 30</li>
      </ul>
    )
    let liOneText = wrapper.find('li').first().text()
    let liTwoText = wrapper.find('li').last().text()
    expect(liOneText).toEqual('Bob 40')
    expect(liTwoText).toEqual('Sneha 30')
  })
})
*/
