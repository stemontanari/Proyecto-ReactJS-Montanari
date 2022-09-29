import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer'
import CartContextProvider from './context/CartContext'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Header/>

          <Routes>
            <Route path='/inicio' element={
              <ItemListContainer greeting="Nuestros Calzados"/>
            }/>
            <Route path='/calzado/:id' element={
              <ItemDetailContainer/>
            }/>
            <Route path='/categoria/:cat' element={
              <ItemListContainer/>
            }/>

          </Routes>
          
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
