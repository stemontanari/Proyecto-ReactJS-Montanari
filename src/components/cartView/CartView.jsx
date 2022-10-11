import React, {useContext}  from 'react'
import {cartCtx} from '../../context/CartContext';
import './CartView.css'
import {Link} from "react-router-dom";

function CartView() {
    const context = useContext(cartCtx);
    const {cart, deleteItem, emptyCart} = context;

    if (cart.length === 0) {
        return <Link to='/inicio'> <button className="CarritoVacio">Su carrito esta vacio... click para Seguir Comprando</button> </Link>;
                
      } else {
        return (
            <div>
                <div className='CartView1'>
                        <h2> </h2>
                        <h2 className='CartViewTitle1'> Modelo</h2>
                        <h2 className='CartViewPrice1'> Precio</h2>
                        <h2 className='CartViewCount1'> Cantidad</h2>
                        <h2 className='CartViewSuma1'> Suma</h2>
                </div>
                {cart.map((data) => (
                    <div className='CartView'>
                        <img src={data.img} alt="" className='CartViewImg'/>
                        <h2 className='CartViewTitle'>{data.title}</h2>
                        <h3 className='CartViewPrice'>${data.price}</h3>
                        <p className='CartViewCount'>{data.count}</p>
                        <p className='CartViewSuma'> ${data.price * data.count}</p>
                        <button className='CartViewDelete' onClick={deleteItem}> X </button>
                    </div>
                ))}
                <div>
                    <span className='CartViewTotal'>TOTAL = </span>
                    <button className='CartViewDeleteAll' onClick={emptyCart}> Vaciar Carrito</button>
                </div>
            </div>
          );  
      }
}

export default CartView