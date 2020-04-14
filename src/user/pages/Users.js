import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS =[{
      id: 'u1',
      name:'soltane',
      image:'https://www.pexels.com/photo/america-architecture-bay-boat-208745/',
      places:3
    }
  ];
      return <UsersList items={USERS}/>;
}
 
export default Users;