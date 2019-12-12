import { combineReducers } from "redux";
import courses from "./courseReducer";
import products from "./productReducer";
import orders from "./orderReducer";
import professors from "./professorReducer";
import accounts from "./accountReducer";
import apiCallsInProgress from "./apiStatusReducer";
import transactions from "./transactionReducer"

const rootReducer = combineReducers({
  courses,
  products,
  orders,
  professors,
  accounts,
  transactions,
  apiCallsInProgress
});

export default rootReducer;
