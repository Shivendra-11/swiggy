import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";

// import {Body} from   './Components/Body';
import { Body } from "./Components/Body";
import Footer from "./Components/Footer";
import { IMG_CDN_URL } from "./config";
import "./index.css";
import Shimmer from "./Components/Shimmer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

export default function AppLayout() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
        {/* we have to use nav bar list item to be load quickly then we use this */}
          <Route exact  path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/" element={<Body />} />
          <Route  path="/*" element={<Error />} />
        </Routes>
        {/* this header and footer are have to keep with every page  */}
        <Footer />

      </Router>
    </>
  );
}
