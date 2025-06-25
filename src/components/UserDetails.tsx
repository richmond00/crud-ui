import React, { ChangeEvent, useState } from 'react';

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
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={details.name}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={details.email}
            onChange={onChange}
          />
        </div>
        <div>
          <button type="submit">Update</button>
          <button type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
