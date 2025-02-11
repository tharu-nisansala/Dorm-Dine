// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../pages/Modal'; // Adjust path if necessary
import SignUpForm from '../pages/SignUp'; // Adjust path if necessary
import img1 from '../images/dd[1].png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import './navbar.css';



function Navbar() {
  const [menu, setMenu] = useState("home");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeToggle, setActiveToggle] = useState("SignUp");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='navbar'>
      <img src={img1} alt="logo" className="navbar-logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setMenu("Aboutus")} className={menu === "Aboutus" ? "active" : ""}>
          <Link to="/Aboutus">About Us</Link>
        </li>
        <li onClick={() => setMenu("Offers")} className={menu === "Offers" ? "active" : ""}>
          <Link to="/Offers">Offers</Link>
        </li>
        <li onClick={() => setMenu("Contactus")} className={menu === "Contactus" ? "active" : ""}>
          <Link to="/Contactus">Contact Us</Link>
        </li>
      </ul>
      <div className='navbar-right'>
      <FontAwesomeIcon icon={faShoppingBag} className='fa-shopping-cart'/>
        <button onClick={() => setIsSearchVisible(!isSearchVisible)} className="search-icon-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {isSearchVisible && (
          <form onSubmit={handleSearch} className="search-bar active">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
          </form>
        )}
         <div className="button-container">
          
        <button 
            className={`sign-up-button ${activeToggle === "SignUp" ? "active" : ""}`}
            onClick={() => {
              setActiveToggle("SignUp");
              openModal();
            }}
          >  Sign Up
          </button>

          <button 
            className={`login-button ${activeToggle === "Login" ? "active" : ""}`}
            onClick={() => setActiveToggle("Login")}
          >
            Login
          </button>
</div>

      </div>

      <Modal show={isModalOpen} onClose={closeModal}>
        <SignUpForm />
      </Modal>
     

    </div>
    
  );
}

export default Navbar;
