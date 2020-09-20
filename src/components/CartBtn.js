import React from 'react';
import { Button } from 'reactstrap';
import CartSvg from '../assets/icons/cart.svg';
import { connect } from 'react-redux';
import {addItemToCart, removeItemFromCart} from '../redux/actions'
import { useHistory } from 'react-router-dom';

function CartBtn(props) {
    const history = useHistory();
    // const handleClick = (e) => {
    //     e.stopPropagation()
    // }

    return (
        <Button onClick={()=>history.replace('/order')} className="mr-3 cartBtn" color="primary" >
            <img width="20" height="20" alt="cart" src={CartSvg}></img>
            {!!props.cartItems.length && (
                <div className="cartBtn__count">{props.cartItems.length}</div>
            )}
        </Button>
    )
}


const mapStateToProps = state => state.CartReducer;

export default connect (
    mapStateToProps, 
    {
        addItemToCart, 
        removeItemFromCart
    }
    )(CartBtn);
