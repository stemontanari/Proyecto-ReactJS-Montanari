import React, {useContext} from "react";
import './itemDetail.css';
import ItemCounter from '../itemCounter/ItemCounter'
import {cartCtx} from '../../context/CartContext'

function ItemDetail({data}) {

    const {addItem} = useContext(cartCtx);

    function handleAddToCart(count) {
        addItem(data, count)
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
            <ItemCounter className='ItemCounter' stock={data.stock} onAddToCart={handleAddToCart}/>
        </div>
    </div>
)
}

export default ItemDetail