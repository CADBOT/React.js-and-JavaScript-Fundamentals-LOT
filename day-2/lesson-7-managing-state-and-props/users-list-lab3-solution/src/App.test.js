import React from 'react';
import App from './App';

import UserList from './UserList'
import NewUserForm from './NewUserForm'

import Enzyme from 'enzyme';
describe('<App/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = Enzyme.shallow(<App/>)
  })
  it('initializes state with Bob 40', () => {
    expect(wrapper.state().users).toEqual([{username: 'Bob', age: '40'}])
  })
  it('renders a <UserList/> with the correct users prop', () => {
    expect(wrapper.containsMatchingElement(<UserList 
      users={wrapper.state().users} 
        />)).toBe(true)
  })
  it('renders a <NewUserForm/> with an addUser prop', () => {
    let instance = wrapper.instance()
    expect(wrapper.containsMatchingElement(
      <NewUserForm 
        addUser={instance.addUser}
        />)).toBe(true)
  })
  it('has an addUser method that will add the passed in user to state.users', () => {
    let instance = wrapper.instance()
    instance.addUser({username: 'Sue', age: '50'})
    expect(wrapper.state().users).toEqual([
      {username: 'Bob', age: '40'},
      {username: 'Sue', age: '50'}
    ])
  })
})
