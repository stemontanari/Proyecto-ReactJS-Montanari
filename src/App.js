import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ItemListContainer from './components/productos/ItemListContainer';

function App() {

  return (
    <div className="App">
    <Header/>
    <ItemListContainer greeting="NUESTROS CALZADOS"/>
    <Footer/>
    </div>
  );
}

export default App;
