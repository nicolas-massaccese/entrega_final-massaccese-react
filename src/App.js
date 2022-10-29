import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {CartProvider} from './contexts/CartContext';

import NavBar from './components/NavBar/NavBar';
import Home from './Routes/Home/Home';
import Detail from './Routes/Detail/Detail';
import Cart from './Routes/Cart/Cart';



function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
              <Route exact path="/" element= {<Home />} />
              <Route exact path='/Nuestros-Productos/:tipoProducto' element={<Home />} />
              <Route exact path='/Nuestros-Productos/:tipoProducto/:modelo' element={<Detail />} />
              <Route exact path='/Cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

