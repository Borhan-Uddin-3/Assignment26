import React from 'react';
import AppNavBar from './appNavBar';
import Footer from './footer';
import {Toaster} from "react-hot-toast";

const Layout = (props) => {
    return (
        <>
          <AppNavBar/>
            {props.children}
            <Toaster position="bottom-center"/>
          <Footer/>  
        </>
    );
};

export default Layout;