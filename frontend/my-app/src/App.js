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
import About from './Pages/About';
import WithNavBar from './Components/HOE/WithNavBar';
import Footer from './Components/Footer';

function App() {
  return ( 
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<WithNavBar Component={Home} />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/cart' element={<WithNavBar Component={Cart} />}/>
      <Route path='/wishlist' element={<WithNavBar Component={WishList} />}/>
      <Route path='/about' element={<WithNavBar Component={About} />}/>
      <Route path='/shop' element={<WithNavBar Component={Shop} />}/>
      <Route path='/shop/:id' element={<WithNavBar Component={SingleProduct} />}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
