import React from 'react'
import Card from './Item'

function ItemList(props) {
  return (
    <div>
        {props.data.map ((item) => {
            return( 
                <Card
                    key ={item.id}
                    img={item.img}
                    title={item.title}
                    detail={item.detail}
                    price={item.price}
                />
            );
        })}
    </div>
  )
}

export default ItemList