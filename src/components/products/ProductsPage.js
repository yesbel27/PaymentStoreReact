import React from "react";
import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ProductList from "./ProductList";
//import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class ProductsPage extends React.Component {


  state = {
    redirectToAddProductPage: false
  };

  componentDidMount() {
    const { products, actions } = this.props;

    if (products.length === 0) {
      actions.getProducts().catch(error => {
        alert("Loading products failed" + error);
      });
    }
  }

  handleAddOrder = async product => {
    /*toast.success("producto agregado");
    try {
      await this.props.actions.saveOrder(product);
    } catch (error) {
      toast.error("add failed. " + error.message, { autoClose: false });
    }*/
    console.log(`agregando pedidoStock: ${product.stock}`);
  };

  render() {
    return (
      <>
        <h1>Lista de Productos</h1>

        {this.props.loading ? (
          <Spinner />
        ) : (
            <>
              <div className="card-deck">
                <ProductList
                  products={this.props.products}
                  onAddCardClick={this.handleAddOrder}
                />
              </div>
            </>
          )}
      </>
    );
  }
}

ProductsPage.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    products: state.products,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);


