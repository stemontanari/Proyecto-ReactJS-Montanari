import React from 'react'
import Item from './Item'

function ItemList(props) {
  return (
    <div>
        {props.data.map ((item) => {
            return( 
                <Item
                    key ={item.id}
                    id= {item.id}
                    img={item.img}
                    title={item.title}
                    detail={item.detail}
                    price={item.price}
                    cat={item.category}
                    stock={item.stock}
                />
            );
        })}
    </div>
  )
}

export default ItemList