import React, { Dispatch, SetStateAction } from 'react';
import { useUserData } from '../api/useUserData';
import Loader from './Loader';
import './UserList.css';

interface UserListProps {
  setUserId: Dispatch<SetStateAction<string>>;
}
const UserList = (props: UserListProps) => {
  const { data, isLoading, error } = useUserData();

  if (isLoading) return <Loader />;
  if (error) return <Error message={error.message} />;

  const onClick = (id: string) => {
    props.setUserId(id);
  };

  return (
    <div>
      <table id="users">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={user.id} onClick={(e) => onClick(user.id)}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
