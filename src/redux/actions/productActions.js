import * as types from "./actionTypes";
import * as productApi from "../../api/productApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import Axios from "axios"

export function getProductSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function getProducts() {
  
  return(dispatch)=>{   
    dispatch(beginApiCall());
    //Axios.get('https://my-json-server.typicode.com/richardpuma/db_data/products')
<<<<<<< HEAD
    return Axios.get("http://3.15.174.163/api/products",{headers:{"Access-Control-Allow-Origin": "*"}})
=======
    return Axios.get("http://localhost:8090/api/products",{headers:{"Access-Control-Allow-Origin": "*"}})
>>>>>>> a6636f2c3c0f0169c1081e6358d9b98c6457b724
    .then(result=>{
      dispatch(getProductSuccess(result.data));
    }).catch(error=>{
      dispatch(apiCallError(error));
      throw error;
    })
  }
}
