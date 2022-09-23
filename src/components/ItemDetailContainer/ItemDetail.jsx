import React from "react";
import './itemDetail.css';


function ItemDetail({data}) {
  return(
    <div className="ItemDetail">
        <div className="ItemDetail-img">
            <img src={data.img} alt="img"></img>
        </div>
        <div className="ItemDetail-detail">
            <h2> Nike {data.title}</h2>
            <h4> $ {data.price} </h4>
            <p> {data.detail}</p>
        </div>
    </div>
)
}

export default ItemDetail