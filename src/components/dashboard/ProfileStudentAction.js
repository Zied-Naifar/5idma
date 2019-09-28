import React from 'react';
import { Link } from 'react-router-dom';

const ProfileStudentActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-profile-student" className="btn btn-light">
        <i className="fas fa-user-circle text-profil mr-1" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-profil mr-1" />
        Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-graduation-cap text-profil mr-1" />
        Add Education
      </Link>
    </div>
  );
};

export default ProfileStudentActions;
