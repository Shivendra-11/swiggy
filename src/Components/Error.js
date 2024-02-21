import React from 'react'
// import img1 from './images/error.jpg';
import { Link } from 'react-router-dom';

 function Error() {
  return (
    <div>
      <div  className='all_content'>
      <div className='img_error'  >  
      <img src="./images/error.jpg"    loading='lazy'    />
      </div>
      <div className='headings' >

     
    <h1>
      We will right back 
    </h1>
    <h2>
      Error 404 Not Found
    </h2>
    </div>
</div>
<Link to="/">
<button className='btn-error' >GO Back</button>
</Link>



    </div>
  )
}
export default Error;