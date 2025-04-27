import React, { useEffect } from 'react';
import Layout from '../components/layout/layout';
import ProductStore from '../store/ProductStore';
import Slider from '../components/product/slider';
import Categories from '../components/product/categories';
import Products from '../components/product/products';




const HomePage = () => {

const {CategoryListRequest,SliderListRequest,ListByRemarkRequest}= ProductStore();


    useEffect(()=>{
        (async()=>{
           await SliderListRequest();
           await CategoryListRequest();
           await ListByRemarkRequest("Wedding");

        })()
    },[])

    return (
        <Layout>
        
            <Slider/>
            <Categories/>
            <Products/>

        </Layout>
    );
};

export default HomePage;
