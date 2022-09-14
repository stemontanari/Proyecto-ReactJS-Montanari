import React from 'react'
import "./ItemCounter.css"

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

    return (
      <div className="itemCount">
        <button className="itemSubstract" onClick={handleSubstract}>-</button>
        <span>{count}</span>
        <button className="itemAdd" onClick={handleAdd}>+</button>
      </div>
    );
  }
  
  export default ItemCount;