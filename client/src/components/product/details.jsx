import React, { useState } from 'react';
import ProductImages from './productImages';
import ProductStore from '../../store/ProductStore';
import DetailsSkeleton from '../../skeleton/details-skeleton';


const Details = () => {

    const {Details}=ProductStore();
    
    if(Details===null){
        return <DetailsSkeleton/>
    }else{
        return (
            <div>
                <div className='container mt-2'>
                    <div className='row'>
                        <div className='col-md-7'>
                           <ProductImages/>
                        </div>
                        <div className='col-md-5'>
                           <h4>{Details[0]['title']}</h4>
                           <p className="text-muted bodySmal my-1">Category:
                            {Details[0]['category']['categoryName']}
                           </p>
                           <p className="text-muted bodySmal my-1">Brand:
                            {Details[0]['brand']['brandName']}
                           </p>
                           <p className='bodySmal mb-2 mt-1'>
                            {Details[0]['shortDes']}
                           </p>
                       
                
                        </div>
                    </div>



                </div>
            </div>
        );
    }

  
};

export default Details;
