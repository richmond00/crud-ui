import React, { useState } from 'react';
import './UserDetails.css';

const UserDetails = () => {
  const [details, setDetails] = useState({
    name: 'Kim',
    email: 'kim@gmail.com',
  });

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

  return (
    <form onSubmit={onSubmit} className="details-container">
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
  );
};

export default UserDetails;
