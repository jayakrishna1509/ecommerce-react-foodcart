import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./HomePage.css";
import Cardsdata from "./CardsData";
import { useSelector, useDispatch } from "react-redux";
import { SET_SEARCH, SET_FILTER, ADD } from "../redux/actions/action";

const menuCategories = [
  { icon: "coffee", label: "Drinks" },
  { icon: "hamburger", label: "Burger" },
  { icon: "pizza-slice", label: "Pizza", active: true },
  { icon: "drumstick-bite", label: "Fried Chicken" },
  { icon: "carrot", label: "Seasonal" },
];

const brands = [
  { name: "KFC", icon: "store" },
  { name: "Dominos", icon: "store" },
  { name: "Burger King", icon: "store" },
  { name: "MC Donalds", icon: "store" },
  { name: "Subway", icon: "store" },
  { name: "Starbucks", icon: "store" },
];

const restaurants = [
  {
    name: "CONCEPT EAT USA FOOD",
    address: "USA, New York",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    name: "THE CAPITAL GRILLE",
    address: "USA, Boston",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  },
  {
    name: "THE INCREDIBLE CAFE",
    address: "USA, Chicago",
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
  },
  {
    name: "GOLDEN GREEK",
    address: "USA, San Francisco",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
];

// eslint-disable-next-line no-unused-vars
const foods = [
  {
    name: "Sandwich",
    price: 12,
    img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c",
  },
  {
    name: "Burger",
    price: 13,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    name: "Salad",
    price: 11,
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  },
  {
    name: "Pizza",
    price: 15,
    img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366",
  },
];

const offers = [
  { name: "Sandwiches", price: 12 },
  { name: "Burgers", price: 13 },
  { name: "Salads", price: 11 },
];

const HomePage = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { search, filter } = useSelector((state) => state.cartreducer);

  // Search/filter logic
  const filteredProducts = Cardsdata.filter((product) => {
    const matchesSearch = product.rname
      .toLowerCase()
      .includes(search.toLowerCase());
    // Add more filter logic here (category, price, rating)
    return matchesSearch;
  });

  return (
    <div className="homepage">
      <header className="hero-section">
        <h1 className="hero-title">Let's Eat!</h1>
        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="hero"
        />
        <div className="search-bar">
          <input type="text" placeholder="Type your location..." />
          <button>Search</button>
        </div>
      </header>
      <section className="menu-section">
        <h3>Select Menu</h3>
        <div className="menu-categories">
          {menuCategories.map((cat, idx) => (
            <div
              key={cat.label}
              className={`menu-category${cat.active ? " active" : ""}`}
            >
              <FontAwesomeIcon icon={cat.icon} size="2x" />
              <span>{cat.label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="featured-section">
        <div className="featured-special">
          <img
            src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c"
            alt="special"
          />
          <div>
            <h4>Featured Specials:</h4>
            <p>
              Try the delicious Sandwich! Discover a range of carefully crafted
              dishes that include fresh ingredients, varied flavors, and
              delicious nutrition.
            </p>
            <button>Order Now</button>
          </div>
        </div>
        <div className="health-benefit">
          <img
            src="https://images.unsplash.com/photo-1467003909585-2f8a72700288"
            alt="coffee"
          />
          <div>
            <h4>Health Benefits:</h4>
            <p>
              Elevate your lifestyle with Berry Bait! Learn how our thoughtfully
              chosen healthy options can contribute to your overall health and
              vitality.
            </p>
            <button>Order Now</button>
          </div>
        </div>
      </section>
      <section className="brands-section">
        <h3>Top Brands</h3>
        <div className="brands-list">
          {brands.map((brand) => (
            <div key={brand.name} className="brand-item">
              <FontAwesomeIcon icon={brand.icon} size="2x" />
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="restaurants-section">
        <h3>Select Restaurant</h3>
        <div className="restaurants-list">
          {restaurants.map((rest) => (
            <div key={rest.name} className="restaurant-card">
              <img src={rest.img} alt={rest.name} />
              <div>
                <h4>{rest.name}</h4>
                <p>{rest.address}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="food-grid-section">
        <h3>Order Food Online</h3>
        <div className="search-bar" style={{ marginBottom: "2rem" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => dispatch(SET_SEARCH(e.target.value))}
            style={{ width: "300px" }}
          />
          <NavLink to="/checkout" className="checkout-link-btn">
            Go to Checkout
          </NavLink>
        </div>
        <div className="food-grid">
          {filteredProducts.map((food) => (
            <div key={food.id} className="food-card">
              <img
                src={food.imgdata}
                alt={food.rname}
                style={{
                  width: "100%",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  background: "#eee",
                }}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/180x120?text=No+Image";
                }}
              />
              <div>
                <h4>{food.rname}</h4>
                <span>₹{food.price}</span>
              </div>
              <button
                className="add-cart-btn"
                onClick={() => dispatch(ADD(food))}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="offers-section">
        <h3>Hunger Day</h3>
        <div className="offers-list">
          {offers.map((offer) => (
            <div key={offer.name} className="offer-card">
              <span>50% on {offer.name}</span>
              <span>${offer.price}</span>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer-section">
        <h2>Hungry For More?</h2>
        <div className="footer-content">
          <p>
            Step up to the table with offerings in a freshened style! Sign up
            for our latest news and content, or visit social media for tempting
            discounts, recipes, and more.
          </p>
          <input type="email" placeholder="Enter your Email" />
          <button>Subscribe Now</button>
        </div>
        <div className="footer-bottom">
          <span>FNT</span>
          <span>Designed & developed by you</span>
          <span>Contact: info@fnt.com</span>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
