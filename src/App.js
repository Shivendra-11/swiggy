import React, { Suspense, lazy } from "react";
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
import RestrauntMenu from "./Components/RestrauntMenu";
import Profile from "./Components/Profile";
import { Provider } from "react-redux";
import store from "./utils/store";
import UserContext from "./utils/usercontext";
// import Instamart from "./Components/Instamart";



// lazy import ---use when too many components are there if we use lazy load import then our component will onlyh be trigger if we click on it..

const Instamart=lazy(()=>
  import("./Components/Instamart"))

export default function AppLayout() {
  return (
    <Provider>
      
     <Router>
        <Header />
        

        <Routes>
        {/* we have to use nav bar list item to be load quickly then we use this */}
         
          <Route exact  path="/about" element={<About />} >
            {/* nested react routing */}
           <Route  path="profile" element={<Profile />} />
          
            </Route>
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/" element={<Body />} />
          <Route  path="/*" element={<Error />} />
          <Route  path="/restaurant/:id" element={<RestrauntMenu />} />

          <Route  path="/Instamart" element={<Suspense>
            <Instamart />
            </Suspense>} />
        </Routes>
        {/* this header and footer are have to keep with every page  */}
        <Footer />

      </Router>

      </Provider>
   
  );
}
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