import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { name, seller, price, img, stock, key } = props.product;
    return (
        <div className='product'>
            <div>
                <Link to = {'/product/' + key}><img src={img} alt="" /></Link>                
            </div>
            <div className='product-info'>
                <h3 className='product-name'><Link to ={'/product/' + key}>{name}</Link></h3>
                <div>
                    <h5>By: {seller}</h5>
                    <h2>${price}</h2>
                    <h4>Only {stock} Left in Stock- Order Soon... </h4>
                </div>
                <div>
                    {
                        props.showBtn && <button onClick={() => props.handleAddProduct(props.product)} className='btn'><FontAwesomeIcon icon={faShoppingCart}/> Add To Cart</button>

                    }
                </div>
            </div>
        </div>
    );
};

export default Product;