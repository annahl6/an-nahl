import React, { useState } from 'react';
import fakeData from '../../fakeData/';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => { 
    const first10 = fakeData.slice(0,10);   
    const[products] = useState(first10);
    console.log(products);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) =>{        
        const newCart = [...cart, product];
        setCart(newCart);
        console.log('marse re', newCart);        
    } 
    console.log(cart);   
    return (
        <div className='shop-container'>
            <div className="empty-container"></div>
            <div className="product-container">                
                {
                    products.map(product => <Product 
                        product={product} 
                        key = {product.key}
                        handleAddProduct = {handleAddProduct}
                        showBtn = {true}
                        ></Product>)                    
                }    
            </div>                
            <div className="cart-container">
                <Cart cart = {cart}></Cart>               
            </div>            
        </div>
    );
};
export default Shop;