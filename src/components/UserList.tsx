import React from 'react';
import { useUserData } from '../api/useUserData';

const UserList = () => {
  const { data, isLoading, error } = useUserData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          {user.username} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
