import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
/*import ItemListContainer from './components/productos/ItemListContainer';*/
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <div className="App">
    <Header/>
    {/*<ItemListContainer greeting="NUESTROS CALZADOS"/>*/}
    <ItemDetailContainer/>
    <Footer/>
    </div>
  );
}

export default App;
