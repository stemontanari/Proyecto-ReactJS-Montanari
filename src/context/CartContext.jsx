import React, {useState, createContext} from 'react';

const cartCtx = createContext();

export default function CartContextProvider({children}) {
  const [cart, setCart] = useState ([]);

  function addItem(data, count) {
    let newCart = cart.map ((data) => data);
    newCart.push({...data, count: count});
    setCart(newCart)
  }

  function getTotalItemsInCart() {
    let totalItems = 0;
    cart.forEach((data) => {
        totalItems += data.count;
    });
    return totalItems;
  }

  return (
    <cartCtx.Provider value={{cart, addItem, getTotalItemsInCart}}> {children} </cartCtx.Provider>
  );
} 

export {cartCtx};