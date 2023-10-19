import React from 'react'
import NavbarLogin from '../../components/navbarLogin'

const cart = () => {
  return (
    <>
    <NavbarLogin />
    <div className="container" style={{ marginTop: 100 }}>
    <h1 className="font-weight-bold">My Cart</h1>
    <div className="row">
      <div className="col-md-8">
        {/* Cart items */}
        <div className="card mb-3">
          {/* Individual cart item */}
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <img src="item-image.jpg" alt="Item" className="cart-item-image" />
                <div className="ml-3">
                  <h5 className="cart-item-title">Product Name</h5>
                  <p className="cart-item-details">Size: XL, Color: Blue</p>
                  <p className="cart-item-price">$99.99</p>
                </div>
              </div>
              <div>
                <input type="number" className="cart-item-quantity" value="1" />
              </div>
            </div>
          </div>
        </div>
        {/* Repeat the above item for each item in the cart */}
      </div>
      <div className="col-md-4">
        {/* Cart summary */}
        <div className="card">
          <div className="card-body">
            <h5 className="font-weight-bold">Cart Summary</h5>
            <div className="d-flex justify-content-between">
              <p>Total Items:</p>
              <p>3</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Total Price:</p>
              <p>$299.97</p>
            </div>
            <button className="btn btn-primary btn-block mt-3">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default cart