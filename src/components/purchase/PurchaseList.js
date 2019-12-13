import React from "react";
import PropTypes from "prop-types";


const PurchaseList = ({orders}) => (

  <div className="card-deck">
    {orders.map(order => {
      return (
        <div className="card" style={{ width: '18rem' }} key={order.productId} >
          <img src={"http://lorempixel.com/350/230/technics"} className="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">{order.description}</h5>
            <p className="card-text">{`Stock: ${order.stock}`}</p>
            <p className="card-text">{`Precio: S/. ${order.price}`}</p>
          </div>
        </div>
      );
    })}
  </div>
)

PurchaseList.propTypes = {
  orders: PropTypes.array.isRequired
}

export default PurchaseList;