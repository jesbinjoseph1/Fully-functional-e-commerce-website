
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Navbar1 from './components/Navbar1'
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import CartPage from './pages/CartPage';


function App() {
  return (
    
   <div className="App">
    <Navbar1/>
    <Routes>
    <Route  path='/' element={<Home/>}/>

    <Route  path='/products' element={<Products/>}  />
    <Route  path='/cart' element={<CartPage/>}/>
    <Route  path='/products/:productId' element={<SingleProduct/>}/>


    </Routes>
    </div>
  );
}

export default App;