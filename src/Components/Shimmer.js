function Shimmer(){
    
    // console.log(Array)
    return(
   <>
   <div className="restaurant-list  flex flex-wrap justify-center  " >

   {
            Array.from({length:10}).map(()=>{
                return  <div className="card_S w-72 h-40 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg shadow-lg p-10 m-20 cursor-pointer"    >
                </div>
            })
        }
 </div>
   </>
    );
}
export default Shimmer;