import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/productListSlice'
import Navbar from '../Navbar/Navbar'
import { addToCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
//import { setProductDetails } from '../redux/productDetailsSlice'
const ProductList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data = useSelector(state => state.product.products)
  console.log(data)
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => (dispatch(setProducts(data.products))))
  }, [])

  const [search, setSearch] = useState("")
  const [sortType,setSortType]=useState("")

  const filterProducts = data
    .filter((item) => {
      return item.category.toLowerCase().includes(search.toLowerCase())
    })
    .sort((a,b)=>{
      if(sortType==="A to Z"){
        return a.title.localeCompare(b.title)

      }
      if(sortType==="Z to A"){
        return b.title.localeCompare(a.title)

      }
      if(sortType==="L to H"){
        return a.price -b.price


      }
      if(sortType==="H to L"){
        return b.price -a.price

      }
      return 0
    })
  return (

    <div>
      <Navbar />
      <input type="search" placeholder='search product' onChange={(e) => (setSearch(e.target.value))} />
      <select onChange={(e)=>(setSortType(e.target.value))}>
        <option value="">Filter</option>
        <option value="A to Z">A-Z</option>
        <option value="Z to A">Z-A</option>
        <option value="L to H">Low to High</option>
        <option value="H to L">High to Low</option>
      </select>

      {
        filterProducts.map((item) => {
          return (
            <div key={item.id}>
             <h1>{item.category}</h1>
             <img   src={item.images[0]} width={200} height={200} alt="" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
             
              <h4>${item.price}</h4>
              
              <button onClick={()=>navigate(`/ProductDetails/${item.id}`)}>View Details</button>
              
            </div>
          )

        })
      }

    </div>
  )
}

export default ProductList
