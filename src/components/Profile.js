import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, setShowAuthModal } = useContext(AuthContext);

  if (!user) {
    setShowAuthModal(true);
    return (
      <div className="container mt-5 text-center">
        Please login to view your profile.
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
