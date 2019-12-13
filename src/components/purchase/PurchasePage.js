import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as orderActions from "../../redux/actions/orderActions";
import PropTypes from "prop-types";
import PurchaseList from "./PurchaseList";

class PurchasePage extends React.Component{
  state = {
    redirectToAddProductPage: false
  };

  componentDidMount() {
    const { orders} = this.props;
    
    if (orders.length === 0) {
      console.log("hola orders");
    }
  }

  render() {
    console.log(this.props.orders);
    return (
      <>
        <div className="card-deck">
                <PurchaseList
                  orders={this.props.orders}
                 
                />
        </div>
      </>
    );
}
}

PurchasePage.propTypes = {
  orders: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    products: state.products,
    orders: state.orders,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PurchasePage)
