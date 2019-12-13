import * as types from "./actionTypes";
import * as orderApi from "../../api/orderApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import Axios from "axios"

export function getOrderSuccess(orders) {
    return { type: types.LOAD_ORDERS_SUCCESS, orders };
  }

export function createOrderSuccess(order) {
    return { type: types.CREATE_ORDER_SUCCESS, order };
  }

  export function updateOrderSuccess(order) {
    return { type: types.UPDATE_ORDER_SUCCESS, order };
  }
  
  export function deleteOrderOptimistic(order) {
    return { type: types.DELETE_ORDER_OPTIMISTIC, order };
  }

  /*export function getOrders() {
    /*console.log("orueva");
    return "";*/
    /*return function (dispatch) {     
      dispatch(beginApiCall());
      return orderApi
        .getOrders()
        .then(orders => {
          dispatch(getOrderSuccess(orders));
        })
        .catch(error => {
          dispatch(apiCallError(error));
          throw error;
        });
    };
  }*/

  

  export function getOrders() {
  
    return(dispatch)=>{   
      dispatch(beginApiCall());
      return Axios.get('https://my-json-server.typicode.com/richardpuma/db_data/products')
      //return Axios.get("http://3.15.174.163/products",{headers:{"Access-Control-Allow-Origin": "*"}})
      .then(result=>{
        dispatch(getOrderSuccess(result.data));
      }).catch(error=>{
        dispatch(apiCallError(error));
        throw error;
      })
    }
  }

  /*export function getOrders(order) {
    return (dispatch) => {
      dispatch(beginApiCall());
      dispatch(getOrderSuccess(order))
    }
  }*/
  
  export function saveOrder(order) {
    return (dispatch) => {
      dispatch(beginApiCall());
      dispatch(createOrderSuccess(order))
    }
  }
  
  /*export function deleteOrder(order) {
    return function (dispatch) {
      // Doing optimistic delete, so not dispatching begin/end api call
      // actions, or apiCallError action since we're not showing the loading status for this.
      dispatch(deleteOrderOptimistic(order));
      return orderApi.deleteOrder(order.id);
    };
  }*/
  export function deleteOrder(order) {
    return (dispatch) => {
      dispatch(beginApiCall());
      dispatch(deleteOrderOptimistic(order));
    }
  }
