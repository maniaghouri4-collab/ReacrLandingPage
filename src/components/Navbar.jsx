

import logoImg from '../assets/Mylogo.png';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logoImg} alt="GlowBotanics Logo" className="logo-img" />
        <h2 className="logo-text">GlowBotanics</h2>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Ingredients</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;