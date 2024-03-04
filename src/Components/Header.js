import { useState ,useContext } from "react";
import UserContext from "../utils/usercontext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Title = () => (
  <a href="/">
    <img
      className="logo w-20 h-20 mx-4 mt-1 "
      src={
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0vgdlW9kPFDoh-wGj7I39R5yLG4yZDQ4dlJTGJLUEg&s"
      }
      alt="Food Fire Logo"
      width={100 }
    />
  </a>
);

const Header = () => {
  const cartItem=useSelector(store=>store.cart.items);
  console.log(cartItem);
  const [islogedin, setislogedin] = useState(false);
  return (
    <div className="header  bg-blue-950 flex flex-row gap-10 items-center justify-between ">
      <Title />
      <div className="nav-items">
        <ul className="flex space-x-4">
          <li className="bg-gray-400 text-white rounded-md px-3 py-2 text-sm font-medium" >
            <Link to="/" className="text-blue-800 hover:text-blue-700">
              Home
            </Link>
          </li>
          <li  className="bg-gray-400 text-white rounded-md px-3 py-2 text-sm font-medium" >
            <Link to="/about" className="text-blue-800 hover:text-blue-700">
              About
            </Link>
          </li>
          <li  className="bg-gray-400 text-white rounded-md px-3 py-2 text-sm font-medium" >
            <Link
              to="/contact"
              className="text-blue-800 hover:text-blue-700"
            >
              Contact
            </Link>
          </li >
          <li className="bg-gray-400 text-blue-800 rounded-md px-3 py-2 text-sm font-medium" >
            <Link
              to="/Instamart"
              className="text-blue-800 hover:text-blue-700"
            >
              Instamart
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
          <Link
              to="/Cart"
              className="text-blue-800 hover:text-blue-700"
            >
          <li className="bg-gray-400 text-blue-800 cursor-pointer rounded-md px-3 py-2 text-sm font-medium" >
           
              cart-{cartItem.length}
            
          
          </li>
          </Link>
        </ul>
      </div>



      {islogedin ? (
        <button
          onClick={() => {
            setislogedin(false);
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setislogedin(true);
          }}
          className="bg-blue-500   hover:bg-blue-700 text-white font-bold py-2 px-6 mx-4 rounded"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
