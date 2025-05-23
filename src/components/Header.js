import { LOGO_URL } from '../utils/constants';


const Header = () => {
    return (
      <div className="header">
        <div className="flex-child logo-container">
          <img
            className="logo"
            src= { LOGO_URL }
          ></img>
        </div>
  
        <div className="flex-child nav-items">
          <ul className="list-style">
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;