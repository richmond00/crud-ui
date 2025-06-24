import React from 'react';
import { useUserData } from '../api/useUserData';
import './UserList.css';

const UserList = () => {
  const { data, isLoading, error } = useUserData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <table id="users">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*<div>*/}
      {/*  <div>*/}
      {/*  <label htmlFor="name">Name</label>*/}
      {/*  <input type="text" id="name" name="name" />*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*  <label htmlFor="email">Email</label>*/}
      {/*  <input type="email" id="email" name="email" />*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <button>Update</button>*/}
      {/*    <button>Delete</button>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default UserList;
