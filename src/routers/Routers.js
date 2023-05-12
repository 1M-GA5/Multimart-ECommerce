import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from '../components/pages/Home';
import Shop from '../components/pages/Shop';
import ProductDetails from '../components/pages/ProductDetails';
import Cart from '../components/pages/Cart';
import Checkout from '../components/pages/Checkout';
import Login from '../components/pages/Login';
import Signup from '../components/pages/Signup';
import ProtectedRoute from './ProtectedRoute';

import Users from '../admin/Users';


import AddProducts from '../admin/AddProducts';
import AllProducts from '../admin/AllProducts';
import Dashboard from '../admin/Dashboard';


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='home'/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='Shop' element={<Shop/>}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='shop/:id' element={<ProductDetails/>}/>
        {/* <Route path='checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>}/> */}

        <Route path='/*' element={<ProtectedRoute />}>
          <Route path='checkout' element={<Checkout />}/>
          <Route path='dashboard' element={<Dashboard />}/>
          <Route path='dashboard/all-products' element={<AllProducts />}/>
          <Route path='dashboard/add-products' element={<AddProducts />}/>
          <Route path='dashboard/users' element={<Users />}/>
        </Route>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
    </Routes>
  )
}

export default Routers