import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function accountReducer(state = initialState.accounts, action) {
  switch (action.type) {
    case types.CREATE_ACCOUNT_SUCCESS:
      return [...state, { ...action.account }];
    case types.UPDATE_ACCOUNT_SUCCESS:
      return state.map(account =>
        account.id === action.account.id ? action.account : account
      );
    case types.LOAD_ACCOUNTS_SUCCESS:
      return action.accounts;
    case types.DELETE_ACCOUNT_OPTIMISTIC:
      return state.filter(account => account.id !== action.account.id);
    default:
      return state;
  }
}
