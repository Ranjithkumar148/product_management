import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice';
import Navbar from '../Navbar/Navbar';

const ProductDetails = () => {

    const { id } = useParams();
    const details = useSelector((state) => state.product.products)
    const singleProduct = details.find((item) => item.id == id)
    console.log(details)
    const navigate=useNavigate()
    const dispatch=useDispatch()

    if (!singleProduct) {
      
        return (<div>
          <Navbar/>
          <h1>Products are Not Selected</h1>
        <p>Please Select a Product!!!!!!!!!!!!!!</p>
        <button onClick={()=>navigate(`/ProductList`)}>Select Product</button>
        </div>
        )
    }
    return (
     
           <div>
            <Navbar/>
      <img
        src={singleProduct.images[0]}
        width={300}
        alt=""
      />

      <h1>{singleProduct.title}</h1>

      <h2>₹ {singleProduct.price}</h2>

      <p>{singleProduct.description}</p>

     
      <p>
        <b>Brand:</b> {singleProduct.brand}
      </p>

      <p>
        <b>Category:</b> {singleProduct.category}
      </p>

      <p>
        <b>Rating:</b> {singleProduct.rating}
      </p>

      <p>
        <b>Discount:</b>
        {singleProduct.discountPercentage}%
      </p>

      <p>
        <b>Availability:</b>
        {singleProduct.availabilityStatus}
      </p>

      <p>
        <b>Minimum Order:</b>
        {singleProduct.minimumOrderQuantity}
      </p>

      <p>
        <b>Return Policy:</b>
        {singleProduct.returnPolicy}
      </p>

     
      <h3>Dimensions</h3>

      <p>
        Width: {singleProduct.dimensions.width}
      </p>

      <p>
        Height: {singleProduct.dimensions.height}
      </p>

      <p>
        Depth: {singleProduct.dimensions.depth}
      </p>

      
      <h3>Meta Details</h3>

      <p>
        Barcode:
        {singleProduct.meta.barcode}
      </p>

      <p>
        Created:
        {singleProduct.meta.createdAt}
      </p>

      <p>
        Updated:
        {singleProduct.meta.updatedAt}
      </p>

      <img
        src={singleProduct.meta.qrCode}
        width={150}
        alt=""
      />
      <button onClick={()=>navigate(`/ProductList`)}>Back</button>
      <button onClick={() => (dispatch(addToCart(singleProduct)))}>Add to cart</button>

    </div>
     
    )
}

export default ProductDetails