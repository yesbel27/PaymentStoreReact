import * as types from "./actionTypes";
import axios from "axios";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function getTransactionsSuccess(transactions) {
  return { 
    type: types.LOAD_TRANSACTIONS_SUCCESS, 
    transactions 
  };
}

export function getTransactions() {
  
  return(dispatch)=>{   
    dispatch(beginApiCall());
    return axios.get("http://localhost:8085/transfers/d585fecc-4985-48a6-b20d-507e113255d0/history",{headers:{"Access-Control-Allow-Origin": "*"}}).then(result=>{
      console.log(result.data);
      dispatch(getTransactionsSuccess(result.data));
    }).catch(error=>{
      dispatch(apiCallError(error));
      throw error;
    })
  }
}

