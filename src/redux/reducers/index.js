import { combineReducers } from "redux";
import courses from "./courseReducer";
import professors from "./professorReducer";
import accounts from "./accountReducer";
import apiCallsInProgress from "./apiStatusReducer";
import transactions from "./transactionReducer"

const rootReducer = combineReducers({
  courses,
  professors,
  accounts,
  transactions,
  apiCallsInProgress
});

export default rootReducer;
