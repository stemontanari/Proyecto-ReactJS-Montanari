import React from 'react'
import "./ItemCounter.css"
import Button from "../button/Button";

function ItemCount({stock,initial}) {
  const [count, setCount] = React.useState(initial)
  function handleAdd (){
    if (count < stock) {
    setCount(count+1)
    }
  }
  function handleSubstract (){
    if (count > 1) {
    setCount(count-1)
  }
    }
  function onAddToCart(){

  }

  return (
  <div>
    <Button onClick={onAddToCart} text=" Agregar al carrito" />
    <div className="itemCount">
      <button className="itemSubstract" onClick={handleSubstract}>-</button>
      <span>{count}</span>
      <button className="itemAdd" onClick={handleAdd}>+</button>
    </div>
  </div>

    );
  }
  
  export default ItemCount;