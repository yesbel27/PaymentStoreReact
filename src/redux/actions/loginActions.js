import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import Axios from "axios"

export function getLoginCustomer(customerId) {
  return { type: types.LOGIN, customerId };
}

export function login(user,password) {
  return(dispatch)=>{   
    dispatch(beginApiCall());
    return Axios.post("https://banking-api-customers.cfapps.io/api/users/login",{"Name":user,"Password":password})
    .then(result=>{
      console.log("Respuesta:"+result.data);
      dispatch(getLoginCustomer(result.data));
    }).catch(error=>{
      dispatch(apiCallError(error));
      throw error;
    })
  }
}