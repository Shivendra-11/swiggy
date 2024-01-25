import { useState } from "react";


const Title = () => (
    <a href="/">
      <img className="logo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0vgdlW9kPFDoh-wGj7I39R5yLG4yZDQ4dlJTGJLUEg&s"} alt="Food Fire Logo" />
    </a>
  );
  
  // Header component for header section: Logo, Nav Items
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;