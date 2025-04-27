
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from './pages/home-page';
import ProductByBrand from './pages/product-by-brand';
import ProductByCategory from './pages/product-by-category';
import ProductByKeyword from './pages/product-by-keyword';
import ProductDetails from './pages/product-details';

import LoginPage from './pages/login-page';
import OtpPage from './pages/otp-page';
import ProfilePage from './pages/profile-page';






const App = () => {
  return (
    <div>
      
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/by-brand/:id' element={<ProductByBrand/>}/>
          <Route path='/by-category/:id' element={<ProductByCategory/>}/>
          <Route path='/by-keyword/:keyword' element={<ProductByKeyword/>}/>
          <Route path='/details/:id' element={<ProductDetails/>}/>
     


          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/otp' element={<OtpPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
         
         


        

          
       </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;