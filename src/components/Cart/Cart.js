import React from 'react';
const Cart = (props) => {
    // const [cart, setCart] = useState([]);
    const formateNumber = num => {
        return Number(num.toFixed(2));        
    } 
    const allPrices = props.cart.map(product => product.price);
    let productPrice = 0;
    let shipping = 0;    
    for (let i = 0; i < allPrices.length; i++) {
        productPrice = productPrice + allPrices[i];           
    }
    const tax = productPrice*0.1;
    let total = productPrice + shipping + tax;    
    if (total>35) {
        shipping = 0;
        total = productPrice + shipping + tax;
    }   
    else if (total>15) {
        shipping = 4.99;
        total = productPrice + shipping + tax;
    }    
    else if (total > 0) {
        shipping = 12.99;
        total = productPrice + shipping + tax;        
    }     
    return (
        <div>
            <h3>This is Cart</h3>
            <h5>Order Summary: {props.cart.length}</h5>                
            <h5>Product Price: ${formateNumber(productPrice)}</h5>
            <h5>Shipping: ${formateNumber(shipping)}</h5>
            <h5>Tax + Vat: ${formateNumber(tax)}</h5>
            <h4>Total Price: ${formateNumber(total)}</h4>
        </div>
    );
};

export default Cart;