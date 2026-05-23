import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/productListSlice'
import Navbar from '../Navbar/Navbar'
import { addToCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
//"https://dummyjson.com/products?limit=200"
const ProductList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data = useSelector(state => state.product.products)
  console.log(data)
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=150")
      .then(res => res.json())
      .then(data => (dispatch(setProducts(data.products))))
  }, [])

  const [search, setSearch] = useState("")
  const [sortType, setSortType] = useState("")

  const filterProducts = [...data]
    .filter((item) => {
      return item.category.toLowerCase().includes(search.toLowerCase())
    })
    .sort((a, b) => {
      if (sortType === "A to Z") {
        return a.category.localeCompare(b.category)

      }
      if (sortType === "Z to A") {
        return b.category.localeCompare(a.category)

      }
      if (sortType === "L to H") {
        return a.price - b.price


      }
      if (sortType === "H to L") {
        return b.price - a.price

      }
      return 0
    })
  return (

    <div>
      <Navbar />
      <input type="search" placeholder='search product' onChange={(e) => (setSearch(e.target.value))} />
      <select onChange={(e) => (setSortType(e.target.value))}>
        <option value="">Filter</option>
        <option value="A to Z">A-Z</option>
        <option value="Z to A">Z-A</option>
        <option value="L to H">Low to High</option>
        <option value="H to L">High to Low</option>
      </select>

      {
        filterProducts.length>0 ? (
          filterProducts.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h1>
              <img src={item.images[0]} width={200} height={200} alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <h4>₹ {Math.floor(item.price * 80)}</h4>

              <button onClick={() => navigate(`/ProductDetails/${item.id}`)}>View Details</button>

            </div>
          )

        })
        ):(
          <h1>No Products Found.Please select different Product!!!</h1>
        )
      }

    </div>
  )
}

export default ProductList
