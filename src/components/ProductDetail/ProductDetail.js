import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {key} = useParams();
    const selectedProduct = fakeData.find(product => product.key === key);
    return (
        <div>
            <h1>{key} Product Detail Comming Soon</h1>
            <Product product = {selectedProduct} showBtn = {false}></Product>
        </div>
    );
};
export default ProductDetail;