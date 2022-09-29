import React, {useContext} from 'react';
import {cartCtx} from '../../context/CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconList from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  const {getTotalItemsInCart} = useContext(cartCtx);

  return (
    <div className="icon">
    <FontAwesomeIcon icon={ iconList.faCartShopping } className="iconoCarrito" /> 
    <span>{getTotalItemsInCart()}</span>
  </div>
  )
}

export default CartWidget