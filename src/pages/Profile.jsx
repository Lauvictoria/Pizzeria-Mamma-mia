import React from 'react';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const { email, logout } = useUser();

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
