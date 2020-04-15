import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS =[
    {
      id: 'u1',
      name:'soltane',
      image:'https://randomuser.me/api/portraits/men/43.jpg',
      places:3
    }
  
  ];
      return <UsersList items={USERS}/>;
}
 
export default Users;