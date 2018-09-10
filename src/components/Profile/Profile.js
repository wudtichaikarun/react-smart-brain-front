import React from 'react';
import './Profile.css';

const Profile = ({ isProfileOpen, toggleModal }) => {
  return (
    <div className="profile-modal">
      <button onClick={toggleModal}>Close Modal</button>
    </div>
  );
};

export default Profile;
