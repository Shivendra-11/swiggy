import { useState } from "react";
import { Link } from "react-router-dom";



const Title = () => (
    <a href="/">
      <img className="logo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0vgdlW9kPFDoh-wGj7I39R5yLG4yZDQ4dlJTGJLUEg&s"} alt="Food Fire Logo" />
    </a>
  );
 
  
  // Header component for header section: Logo, Nav Items
  const Header = () => {
    const [islogedin , setislogedin]=useState(false)
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>
        {  
               (islogedin? <button  onClick={()=>{setislogedin(false)}}  >Logout</button> :  <button onClick={()=>{setislogedin(true)}} >Login</button> )
        }
        
       
      </div>
    );
  };

  export default Header;