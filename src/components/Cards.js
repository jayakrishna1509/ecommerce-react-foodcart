import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cards = () => {
  const { user, setShowAuthModal } = useContext(AuthContext);

  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(Cardsdata);
  const [wishlist, setWishlist] = useState([]);
  // console.log(data);

  const dispatch = useDispatch();

  const send = (e) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    dispatch(ADD(e));
  };

  const addToWishlist = (item) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    if (!wishlist.some((w) => w.id === item.id)) {
      setWishlist([...wishlist, item]);
      // Optionally, persist wishlist in localStorage
      localStorage.setItem("wishlist", JSON.stringify([...wishlist, item]));
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>Price : ₹ {element.price}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Button
                      variant="primary"
                      onClick={() => send(element)}
                      className="col-lg-8"
                    >
                      <FontAwesomeIcon icon="shopping-cart" /> Add to Cart
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => addToWishlist(element)}
                      className="col-lg-3"
                      title="Add to Wishlist"
                    >
                      <FontAwesomeIcon icon="heart" />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
