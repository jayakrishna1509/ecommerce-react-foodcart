import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { user, setShowAuthModal } = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  if (!user) {
    setShowAuthModal(true);
    return (
      <div className="container mt-5 text-center">
        Please login to view your wishlist.
      </div>
    );
  }

  // Example wishlist content
  return (
    <div className="container mt-5">
      <h2>Wishlist</h2>
      <p>Your wishlist items will appear here.</p>
    </div>
  );
};

export default Wishlist;
