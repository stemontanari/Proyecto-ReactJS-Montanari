import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/NavBar';
import ItemListContainer from './components/productos/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/cart/Cart'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
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
        <Route path='/cart' element={
          <Cart/>
        }/>

      </Routes>
      
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
