import React, { useEffect } from 'react';
import Layout from '../components/layout/layout';
import Details from '../components/product/details';

import ProductStore from '../store/ProductStore';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {DetailsRequest,ReviewListRequest}=ProductStore();
    const {id}=useParams();

    useEffect(() => {
        (async()=>{
            await DetailsRequest(id);
     
        })()
    }, []);



    return (
        <Layout>
            <Details/>
         
        </Layout>
    );
};

export default ProductDetails;