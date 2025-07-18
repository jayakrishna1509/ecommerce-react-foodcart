import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AuthModal.css";

const LoginSignupModal = () => {
  const { signin, signup, showAuthModal, setShowAuthModal } =
    useContext(AuthContext);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!showAuthModal) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      signup(email, password);
    } else {
      signin(email, password);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={() => setShowAuthModal(false)}>
          &times;
        </button>
        <h2>
          <FontAwesomeIcon icon={isSignup ? "user-plus" : "sign-in-alt"} />{" "}
          {isSignup ? "Sign Up" : "Sign In"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            <FontAwesomeIcon icon={isSignup ? "user-plus" : "sign-in-alt"} />{" "}
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button className="switch-btn" onClick={() => setIsSignup(!isSignup)}>
            <FontAwesomeIcon icon={isSignup ? "sign-in-alt" : "user-plus"} />{" "}
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignupModal;
