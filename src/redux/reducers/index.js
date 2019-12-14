import { combineReducers } from "redux";
import courses from "./courseReducer";
import products from "./productReducer";
import orders from "./orderReducer";
import purchases from "./purchaseReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  products,
  orders,
  purchases,
  apiCallsInProgress
});

export default rootReducer;
