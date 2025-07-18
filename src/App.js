import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CardsDetails from "./components/CardsDetails";
import HomePage from "./components/HomePage";
import Wishlist from "./components/Wishlist";
import Profile from "./components/Profile";
import Checkout from "./components/Checkout";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginSignupModal from "./components/LoginSignupModal";

// eslint-disable-next-line no-unused-vars
import logo from "./logo.svg";
// eslint-disable-next-line no-unused-vars
import Cards from "./components/Cards";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <LoginSignupModal />
    </AuthProvider>
  );
}

export default App;
