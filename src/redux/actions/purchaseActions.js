import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import Axios from "axios"

export function getPurchaseSuccess(purchases) {
    return { type: types.LOAD_PURCHASES_SUCCESS, purchases };
  }

export function createPurchaseSuccess(purchase) {
    return { type: types.CREATE_PURCHASE_SUCCESS, purchase };
  }

  export function updatePurchaseSuccess(purchase) {
    return { type: types.UPDATE_PURCHASE_SUCCESS, purchase };
  }
  
  export function deletePurchaseOptimistic(purchase) {
    return { type: types.DELETE_PURCHASE_OPTIMISTIC, purchase };
  }  

  export function getPurchases() {
  
    return(dispatch)=>{   
      dispatch(beginApiCall());
      return Axios.get('https://my-json-server.typicode.com/richardpuma/db_data/products')
      //return Axios.get("http://3.15.174.163/products",{headers:{"Access-Control-Allow-Origin": "*"}})
      .then(result=>{
        dispatch(getPurchaseSuccess(result.data));
      }).catch(error=>{
        dispatch(apiCallError(error));
        throw error;
      })
    }
  }

  const data = {
    "customerId":"2",
	"products":[
		{
			"productId":"1",
			"quantity":3
		},
		{
			"productId":"2",
			"quantity":3
		}
	]
  }
  export function savePurchase(purchase) {
    return(dispatch)=>{   
      dispatch(beginApiCall());
      //Axios.get('https://my-json-server.typicode.com/richardpuma/db_data/products')
      return Axios.post("http://3.15.174.163/api/orders",data,{headers:{"Access-Control-Allow-Origin": "*"}})
      .then(result=>{
        //dispatch(getProductSuccess(result.data));
        console.log("resultado de purchase")
        console.log(result);
      }).catch(error=>{
        dispatch(apiCallError(error));
        throw error;
      })
    }
  }

  export function deletePurchase(purchase) {
    return (dispatch) => {
      dispatch(beginApiCall());
      dispatch(deletePurchaseOptimistic(purchase));
    }
  }
