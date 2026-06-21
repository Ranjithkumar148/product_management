import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/productListSlice'
import Navbar from '../Navbar/Navbar'
import { addToCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data = useSelector(state => state.product.products)
  const [page, setPage] = useState(0)
  const size = 30

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${size}&skip=${page * size}`)
      .then(res => res.json())
      .then(data => (dispatch(setProducts(data.products))))
  }, [page])

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
    <div className="product-list-container">
      <Navbar />
      <div className="controls-bar">
        <input type="search" className="search-input" placeholder='search product' onChange={(e) => (setSearch(e.target.value))} />
        <select className="sort-select" onChange={(e) => (setSortType(e.target.value))}>
          <option value="">Filter</option>
          <option value="A to Z">A-Z</option>
          <option value="Z to A">Z-A</option>
          <option value="L to H">Low to High</option>
          <option value="H to L">High to Low</option>
        </select>
      </div>

      <div className="products-grid">
        {
          filterProducts.length > 0 ? (
            filterProducts.map((item) => {
              return (
                <div key={item.id} className="product-card">
                  <span className="product-category">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                  <div className="product-image-container">
                    <img className="product-image" src={item.images[0]} width={200} height={200} alt="" />
                  </div>
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-description">{item.description}</p>
                  <h4 className="product-price">₹ {Math.floor(item.price * 80)}</h4>
                  <button className="details-button" onClick={() => navigate(`/ProductDetails/${item.id}`)}>View Details</button>
                </div>
              )
            })
          ) : (
            <h1 className="no-products-message">No Products Found.Please select different Product!!!</h1>
          )
        }
      </div>

      <div className="pagination-container">
        <button className="pagination-btn" disabled={page === 0} onClick={() => setPage(page - 1)}>Prev</button>
        <span className="pagination-info">Page {page + 1}</span>
        <button className="pagination-btn" onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  )
}

export default ProductList
