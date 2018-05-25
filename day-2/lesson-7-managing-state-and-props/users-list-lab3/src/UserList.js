import React, { Component } from 'react';

let UserList = ({users}) => (
  <div>
    <ul>
      {users.map((user, i) => <li key={i}>{user.username} {user.age}</li>)}
    </ul>
  </div>
)

export default UserList
