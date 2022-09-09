import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconList from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div className="icon">
    <FontAwesomeIcon icon={ iconList.faCartShopping } className="iconoCarrito" /> 
  </div>
  )
}

export default CartWidget