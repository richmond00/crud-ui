import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './UserDetails.css';
import { useUserData } from '../api/useUserData';

interface UserDetailsProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
}

const UserDetails = (props: UserDetailsProps) => {
  const [details, setDetails] = useState({
    show: false,
    name: '',
    email: '',
  });
  const { data } = useUserData();

  useEffect(() => {
    const user = data?.find((user) => user.id === props.userId);

    if (user) {
      setDetails({
        show: true,
        name: user.username,
        email: user.email,
      });
    }
  }, [props.userId]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Update', details);
  };
  const onDelete = () => {
    console.log('Delete', details);
  };
  const onCloseButtonClick = () => {
    props.setUserId('');
    setDetails({
      show: false,
      name: '',
      email: '',
    });
  };

  return details.show ? (
    <div className="details-container">
      <div className="close-button">
        <button type="button" onClick={onCloseButtonClick}>
          &#x2715;
        </button>
      </div>
      <form onSubmit={onSubmit}>
        <div className="details-input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={details.name}
            onChange={onChange}
          />
        </div>
        <div className="details-input">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={details.email}
            onChange={onChange}
          />
        </div>
        <div className="form-buttons">
          <button type="submit">Update</button>
          <button type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </form>
    </div>
  ) : (
    <></>
  );
};

export default UserDetails;
