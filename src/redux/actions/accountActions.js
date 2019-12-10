import * as types from "./actionTypes";
import * as accountApi from "../../api/accountApi"
import axios from "axios";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function getAccountsSuccess(accounts) {
  return { 
    type: types.LOAD_ACCOUNTS_SUCCESS, 
    accounts 
  };
}

export function createAccountSuccess(course) {
  return { type: types.CREATE_ACCOUNT_SUCCESS, course };
}

export function updateAccountSuccess(course) {
  return { type: types.UPDATE_ACCOUNT_SUCCESS, course };
}

export function deleteAccountOptimistic(account){
  return { type: types.DELETE_ACCOUNT_OPTIMISTIC, account};
}

export function getAccounts() {
  
  return(dispatch)=>{   
    dispatch(beginApiCall());
    return axios.get("http://localhost:8080/accounts",{headers:{"Access-Control-Allow-Origin": "*"}}).then(result=>{
      dispatch(getAccountsSuccess(result.data));
    }).catch(error=>{
      dispatch(apiCallError(error));
      throw error;
    })
  }
}

export function saveAccount(account) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return accountApi
      .saveCourse(account)
      .then(savedCourse => {
        account.id
          ? dispatch(updateAccountSuccess(savedCourse))
          : dispatch(createAccountSuccess(savedCourse));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteAccount(account) {
  return function (dispatch) {
    // Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this.
    dispatch(deleteAccountOptimistic(account));
    return accountApi.deleteAccount(account.id);
  };
}

