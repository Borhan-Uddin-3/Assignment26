import React from 'react';
import {Link} from 'react-router-dom'
import pay from "../../assets/images/pay.png"
const Footer = () => {
    return (
        <div>
            <div className='section-bottom shadow-sm bg-white'>
               <div className='container py-5'>
                 <div className='row'>
                   <div className='col-md-4'>
                     <h1 className='bodyMedium'>Legals</h1>
                     <p className="my-2">
                        <Link className="nav-link" >About</Link>
                     </p>
                    
                     <p className='my-2'>
                       <Link className="nav-link" >Privacy Policy</Link>
                     </p>
                     <p className='my-2'>
                       <Link className="nav-link" >Terms</Link>
                     </p>
                   </div>

                   <div className='col-md-4'>
                     <h1 className='bodyMedium'>Information</h1>
                     <p className='my-2'>
                      <Link className="nav-link">Contact</Link>
                     </p>
                     <p className='my-2'>
                      <Link className="nav-link">Complain</Link>
                     </p>
                   </div>

                   <div className='col-md-4'>
                     <h1 className="bodyMedium">About</h1>
                     <p>Lorem Ipsum is simply dummy text of the printing and 
                         typesetting industry. Lorem Ipsum </p>
                     <img className="w-100" src={pay} />   
                   </div>

                 </div>
               </div>
            </div>
        </div>
    );
};

export default Footer;