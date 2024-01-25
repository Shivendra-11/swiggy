import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
// import {Body} from   './Components/Body';
import {Body} from './Components/Body';
import Footer from './Components/Footer'
import {IMG_CDN_URL} from './config'
import './index.css';


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
 <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
 </>
  );
}

