import React, { useEffect, useState, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
// eslint-disable-next-line no-unused-vars
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import { DLT } from "../redux/actions/action";
import { AuthContext } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const Header = () => {
  const { user, logout, setShowAuthModal } = useContext(AuthContext);

  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    // eslint-disable-next-line array-callback-return
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="main-navbar">
        <Container>
          <NavLink to="/" className="navbar-logo text-light">
            <FontAwesomeIcon
              icon="store"
              size="2x"
              style={{ marginRight: "8px" }}
            />{" "}
            FNT
          </NavLink>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link text-light">
                Home
              </NavLink>
              <NavLink to="/restaurants" className="nav-link text-light">
                Restaurants
              </NavLink>
              <NavLink to="/gallery" className="nav-link text-light">
                Gallery
              </NavLink>
              <NavLink to="/contact" className="nav-link text-light">
                Contact
              </NavLink>
            </Nav>
            <Nav className="ms-auto align-items-center">
              <NavLink
                to="/wishlist"
                className="nav-link text-light mx-2"
                title="Wishlist"
              >
                <FontAwesomeIcon icon="heart" />
              </NavLink>
              <NavLink
                to="/profile"
                className="nav-link text-light mx-2"
                title="Profile"
              >
                <FontAwesomeIcon icon="user" />
              </NavLink>
              <NavLink
                to="/cart"
                className="nav-link text-light mx-2"
                title="Cart"
              >
                <FontAwesomeIcon icon="shopping-cart" />
                <span className="cart-count-badge">{getdata.length}</span>
              </NavLink>
              {user ? (
                <button
                  className="btn btn-outline-light btn-sm mx-2"
                  onClick={logout}
                >
                  <FontAwesomeIcon icon="sign-out-alt" /> Logout
                </button>
              ) : (
                <button
                  className="btn btn-outline-light btn-sm mx-2"
                  onClick={() => setShowAuthModal(true)}
                >
                  <FontAwesomeIcon icon="sign-in-alt" /> Login / Signup
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((e) => (
                    <tr key={e.id}>
                      <td>
                        <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                          <img
                            src={e.imgdata}
                            style={{ width: "5rem", height: "5rem" }}
                            alt=""
                          />
                        </NavLink>
                      </td>
                      <td>
                        <p>{e.rname}</p>
                        <p>Price : ₹{e.price}</p>
                        <p>Quantity : {e.qnty}</p>
                        <p
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                          onClick={() => dlt(e.id)}
                        >
                          <i className="fas fa-trash smalltrash"></i>
                        </p>
                      </td>
                      <td
                        className="mt-5"
                        style={{
                          color: "red",
                          fontSize: 20,
                          cursor: "pointer",
                        }}
                        onClick={() => dlt(e.id)}
                      >
                        <i className="fas fa-trash largetrash"></i>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={3} className="text-center">
                      Total :₹ {price}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 22 }}>Your carts is empty</p>
              <img
                src="./cart.gif"
                alt=""
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
