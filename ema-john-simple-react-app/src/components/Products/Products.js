import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css';
const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="Pictures" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            {/* button onclick faction ta shop.js r props dara call kora kora hoice */}
            {/* onclick faction() ta sorasori call kora jabe nh oita k just annunomus array facton diye dile r sorasori call hobe nah tkn paramater diye call hobe  */}
            <button onClick={() => props.handlerAddToCart(props.product)} className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} className='iconStyle'></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;