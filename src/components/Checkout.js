import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import "./Checkout.css";

const Checkout = () => {
  const { user, setShowAuthModal } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cartreducer.carts);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qnty,
    0
  );

  if (!user) {
    setShowAuthModal(true);
    return (
      <div className="container mt-5 text-center">
        Please login to proceed to checkout.
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>
        <FontAwesomeIcon icon="credit-card" /> Checkout
      </h2>
      <div className="checkout-list">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="checkout-item">
                <img
                  src={item.imgdata}
                  alt={item.rname}
                  className="checkout-img"
                />
                <span>{item.rname}</span>
                <span>Qty: {item.qnty}</span>
                <span>₹{item.price * item.qnty}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="checkout-total">
        <strong>Total: ₹{total}</strong>
      </div>
      <button className="checkout-btn">Place Order</button>
    </div>
  );
};

export default Checkout;
