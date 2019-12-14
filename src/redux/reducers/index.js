import { combineReducers } from "redux";
import courses from "./courseReducer";
import products from "./productReducer";
import orders from "./orderReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  products,
  orders,
  apiCallsInProgress
});

export default rootReducer;
