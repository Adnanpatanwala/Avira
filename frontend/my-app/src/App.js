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
import OrderSummary from "./Pages/OrderSummary"
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Pages/Order';
import Account from './Pages/Account';
import Contact from './Pages/Contact';

function App() {
  return ( 
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<WithNavBar Component={Home} />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/cart' element={<WithNavBar Component={Cart} />}/>
      <Route path='/about' element={<WithNavBar Component={About} />}/>
      <Route path='/contact' element={<WithNavBar Component={Contact} />}/>
      <Route path='/cart/ordersummary' element={<WithNavBar Component={OrderSummary} />}/>

      {/* <Route path='/cart/ordersummary' element={
      <PrivateRoute  element={<WithNavBar Component={OrderSummary}/>} isauthneticate={false}/>
    }/> */}
      <Route path='/wishlist' element={<WithNavBar Component={WishList} />}/>
      <Route path='/order' element={<WithNavBar Component={Order} />}/>
      <Route path='/account' element={<WithNavBar Component={Account} />}/>
      <Route path='/shop' element={<WithNavBar Component={Shop} />}> </Route>
      <Route path='/shop/:id' element={<WithNavBar Component={SingleProduct} />}/>
    </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
