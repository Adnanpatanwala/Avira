import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import NavBar from "./Components/NavBar";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Address from './Components/Address';
import  Register from './Pages/Register';
import Shop from './Pages/Shop';
import SingleProduct from './Pages/SingleProduct';
import WishList from './Pages/WishList';

function App() {
  return ( 
    <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      {/* <Route path='/address' element={<Address/>}/> */}
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/shop/:id' element={<SingleProduct/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
