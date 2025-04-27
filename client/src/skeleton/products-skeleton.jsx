import React from 'react';
import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import ImagePlaceholder from "../assets/images/image.json"

const ProductsSkeleton = () => {
    return (
        <div className='container'>
            <div className='row'>
            <h1 className="headline-4 text-center my-2 p-0">Up coming Events</h1>
               {
                Array.from({length:1}).map(()=>{
                    return(
            <div className='col-md-3 p-2 col-lg-3 col-sm-6 col-12'>
               <div className="card shadow-sm h-100 rounded-3 bg-white">
                 <Lottie className="w-100" animationData= 
                     {ImagePlaceholder} loop={true} />
                 <div className="card-body">
                     <Skeleton count={3} />
                 </div>
                </div>
            </div>
                    )
                })
               }
            </div>
        </div>
    );
};

export default ProductsSkeleton;