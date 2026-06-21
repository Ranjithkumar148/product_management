import { useState } from 'react'
import Login from './Pages/Login'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ProductList from './Pages/ProductList'
import Cart from './Pages/Cart'
import ProductDetails from './Pages/ProductDetails'
import Register from './Pages/Register'

function App() {


  return (
    <>

      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Home' element={<Home />} />
          <Route path='/ProductList' element={<ProductList />} />
          <Route path='/ProductDetails/:id' element={<ProductDetails />} />
          <Route path='/ProductDetails' element={<ProductDetails />} />
          <Route path='/Cart' element={<Cart />} />

        </Routes>


      </Provider>


    </>
  )
}

export default App
