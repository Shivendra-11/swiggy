import React from 'react';
import { useState } from 'react';

const Section1 = ({ title, desc }) => {
    const [showMore, setShowMore] = useState(false)
    return (
        <div>
            <h1>{title}</h1>
          <div className='cursor-pointer' >

        
            <button  onClick={()=>setShowMore(! showMore)} > {showMore ? "Less" : "More"}</button>
            {  showMore &&  <p> {desc} </p> }
            
</div>
        </div>
    );
};

function Instamart() {
    return (
        <div className='bg-gray-300  ' >
            <div className='border-4 border-gray-800 p-4'>
                <Section1
                    title={"About Instamart"}
                    desc={"Instamart is a new service from Swiggy that allows you to order groceries and other essential items from nearby shops and get them delivered to your doorstep in under 2 hours."}

                />
                <br />
                  <Section1
                    title={"Team Instmart"}
                    desc={"Instamart is a new service from Swiggy that allows you to order groceries and other essential items from nearby shops and get them delivered to your doorstep in under 2 hours."}
                />
                <br />
                <Section1
                    title={"Carrer Instmart"}
                    desc={"Instamart is a new service from Swiggy that allows you to order groceries and other essential items from nearby shops and get them delivered to your doorstep in under 2 hours."}
                />
            </div>
        </div>
    );
}

export default Instamart;
