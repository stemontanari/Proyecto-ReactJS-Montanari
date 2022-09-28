import React from "react";
import './itemDetail.css';
import ItemCounter from '../itemCounter/ItemCounter'
import Cart from '../cart/Cart'

function ItemDetail({data}) {

    let estadoCart = false;

    function handleAddToCart(count) {
        alert(`Agregaste al carrito ${count} productos!`)
    }

  return(
    <div className="ItemDetail">
        <div className="ItemDetail-img">
            <img src={data.img} alt="img"></img>
        </div>
        <div className="ItemDetail-detail">
            <h2> Nike {data.title}</h2>
            <h4> $ {data.price} </h4>
            <p> {data.detail}</p>
            { estadoCart === false? <ItemCounter className='ItemCounter' stock={data.stock} onAddToCart={handleAddToCart}/> : <Cart/>}
        </div>
    </div>
)
}

export default ItemDetail