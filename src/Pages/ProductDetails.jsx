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
      
        return (
        <div className="product-details-container no-selection">
          <Navbar/>
          <div className="no-selection-card">
            <h1 className="no-selection-title">Products are Not Selected</h1>
            <p className="no-selection-p">Please Select a Product!!!!!!!!!!!!!!</p>
            <button className="select-btn" onClick={()=>navigate(`/ProductList`)}>Select Product</button>
          </div>
        </div>
        )
    }
    return (
     
      <div className="product-details-container">
        <Navbar/>
        <div className="details-content-wrapper">
          <div className="details-left">
            <img
              src={singleProduct.images[0]}
              className="details-image"
              width={300}
              alt=""
            />
            <div className="details-meta">
              <h3>Meta Details</h3>
              <p><b>Barcode:</b> {singleProduct.meta.barcode}</p>
              <p><b>Created:</b> {singleProduct.meta.createdAt}</p>
              <p><b>Updated:</b> {singleProduct.meta.updatedAt}</p>
              <img
                src={singleProduct.meta.qrCode}
                className="details-qr"
                width={150}
                alt=""
              />
            </div>
          </div>

          <div className="details-right">
            <h1 className="details-title">{singleProduct.title}</h1>
            <h2 className="details-price">₹ {Math.floor(singleProduct.price*80)}</h2>
            <p className="details-desc">{singleProduct.description}</p>

            <div className="details-specs">
              <p><b>Brand:</b> {singleProduct.brand}</p>
              <p><b>Category:</b> {singleProduct.category}</p>
              <p><b>Rating:</b> {singleProduct.rating} / 5 ⭐</p>
              <p><b>Discount:</b> {singleProduct.discountPercentage}%</p>
              <p><b>Availability:</b> {singleProduct.availabilityStatus}</p>
              <p><b>Minimum Order:</b> {singleProduct.minimumOrderQuantity}</p>
              <p><b>Return Policy:</b> {singleProduct.returnPolicy}</p>
            </div>

            <div className="details-dimensions">
              <h3>Dimensions</h3>
              <p>Width: {singleProduct.dimensions.width}</p>
              <p>Height: {singleProduct.dimensions.height}</p>
              <p>Depth: {singleProduct.dimensions.depth}</p>
            </div>

            <div className="details-actions">
              <button className="back-btn" onClick={()=>navigate(`/ProductList`)}>Back</button>
              <button className="add-cart-btn" onClick={() => (dispatch(addToCart(singleProduct)))}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
     
    )
}

export default ProductDetails