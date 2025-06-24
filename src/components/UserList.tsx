import React from 'react';
import { useUserData } from '../api/useUserData';

const UserList = () => {
  const { data, isLoading, error } = useUserData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    // <ul>
    //   {data?.map((user) => (
    //     <li key={user.id}>
    //       <div>
    //         name: {user.username}, email: {user.email}
    //       </div>
    //     </li>
    //   ))}
    // </ul>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((user) => (
          <tr>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
