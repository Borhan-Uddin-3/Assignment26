import React from 'react';
import ProductStore from '../../store/ProductStore';
import StarRatings from "react-star-ratings/build/star-ratings.js";
import { Link } from 'react-router-dom';
import ProductsSkeleton from '../../skeleton/products-skeleton';
const Products = () => {

    const {ListByRemark,ListByRemarkRequest}=ProductStore();

    return (
        <div className='section'>
            <div className='container-fluid py-5 bg-white'>
                <div className='row'>

                <h1 className="headline-4 text-center my-2 p-0">Up coming Events</h1>
                <span className="bodySmal mb-3 text-center">Explore a World of Choices 
                     Across Our Most Popular</span>
                <div className='col-12'>
                    <div>
                        <ul className="nav nav-pills p-3 justify-content-center mb-3" 
                         id="pills-tab" role="tablist">
<li className="nav-item" role="presentation">
<button onClick={()=>{ListByRemarkRequest("Wedding")}} className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"data-bs-target="#pills-new" type="button" role="tab"aria-controls="pills-home" aria-selected="true">Wedding</button>
</li>

<li className="nav-item" role="presentation">
<button onClick={()=>{ListByRemarkRequest("birth")}} className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-top" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Birth Day</button>
</li>
<li className="nav-item" role="presentation">
<button onClick={()=>{ListByRemarkRequest("seminar")}} className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-top" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Seminar</button>
</li>

                        </ul>

<div className="tab-content" id="pills-tabContent">

   <div className="tab-pane fade show active" id="pills-new" role="tabpanel" 
   aria-labelledby="pills-home-tab" tabIndex="0">

    {
        ListByRemark===null?(<ProductsSkeleton/>):(
            <div className='container'>
            <div className='row'>
                
            {
              ListByRemark.map((item,i)=>{

  

                return(
                    <div className="col-md-3 p-2 col-lg-4 col-sm-6 col-12">
                     <Link to={`/details/${item['_id']}`} className="card shadow-sm h-100 rounded-3 bg-white">
                     <img className="w-100 rounded-top-2" src={item['image']} />
                     <div className="card-body">
                      <p className="bodySmal text-secondary my-1">{item['title']}</p>
        
                      <StarRatings rating={parseFloat(item['star'])} 
                       starRatedColor="red" starDimension="15px" 
                      starSpacing="2px" />
                     </div>
                     </Link>
                  </div>
                )
              })  
            }      
                
            </div>
        </div>
        )
    }
    
   </div>

   <div className="tab-pane fade show active" id="pills-trending" role="tabpanel" 
   aria-labelledby="pills-profile-tab" tabIndex="0">
    {
        ListByRemark===null?(<ProductsSkeleton/>):(
            <div className='container'>
            <div className='row'>
                
            {
              ListByRemark.map((item,i)=>{

   

                return(
                    <div className="col-md-3 p-2 col-lg-4 col-sm-6 col-12">
                     <Link to={`/details/${item['_id']}`} className="card shadow-sm h-100 rounded-3 bg-white">
                     <img className="w-100 rounded-top-2" src={item['image']} />
                     <div className="card-body">
                      <p className="bodySmal text-secondary my-1">{item['title']}</p>
            
                      <StarRatings rating={parseFloat(item['star'])} 
                       starRatedColor="red" starDimension="15px" 
                      starSpacing="2px" />
                     </div>
                     </Link>
                  </div>
                )
              })  
            }      
                
            </div>
        </div>
        )
    }
   </div>



   



</div>

                    </div>
                </div>     

                </div>
            </div>
        </div>
    );
};

export default Products;