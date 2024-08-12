import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import ProductDetail from './components/ProductDetail/ProductDetail';
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path='/' element= {<Shop/>}/>
          <Route path='/shop' element= {<Shop/>}/>
          <Route path='/review' element= {<Review/>}/>          
          <Route path='/manage' element= {<Inventory/>}/>
          <Route path='*' element= {<h1 class="text-3xl font-bold underline">404 Not Found</h1>}/>
          <Route path='/product/:key' element={<ProductDetail/>}/>
        </Routes>
      </Router>  
      {/* <Shop></Shop> */}
    </div>
  );
}
export default App;
