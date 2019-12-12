import * as types from "./actionTypes";
import * as productApi from "../../api/productApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import Axios from "axios"

export function getProductSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}
/*
export function createProductSuccess(product) {
  return { type: types.CREATE_PRODUCT_SUCCESS, product };
}

export function updateProductSuccess(product) {
  return { type: types.UPDATE_PRODUCT_SUCCESS, product };
}

export function deleteProductOptimistic(product) {
  return { type: types.DELETE_PRODUCT_OPTIMISTIC, product };
}*/

/*export function getProducts() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return professorApi
      .getProfessors()
      .then(professors => {
        dispatch(getProfessorSuccess(professors));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}*/

/*export const getProducts=()=>dispatch=> {
  //Axios.get('https://my-json-server.typicode.com/richardpuma/db_data/products')
  Axios.get("http://3.15.174.163/products",{headers:{"Access-Control-Allow-Origin": "*"}})
  .then(resp => {
      return dispatch({
        type:  types.LOAD_PRODUCTS_SUCCESS,
        courses: resp.data        
      })
    }
  )
}*/

export function getProducts() {
  
  return(dispatch)=>{   
    dispatch(beginApiCall());
    //Axios.get('https://my-json-server.typicode.com/richardpuma/db_data/products')
    return Axios.get("http://3.15.174.163/products",{headers:{"Access-Control-Allow-Origin": "*"}})
    .then(result=>{
      dispatch(getProductSuccess(result.data));
    }).catch(error=>{
      dispatch(apiCallError(error));
      throw error;
    })
  }
}

/*export function saveProduct(product) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return productApi
      .saveProduct(product)
      .then(savedProduct => {
        product.id
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}*/

/*export function deleteProduct(product) {
  return function (dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteProductOptimistic(product));
    return productApi.deleteProduct(product.id);
  };
}*/
