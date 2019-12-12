import * as types from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
//import Axios from "axios"

export function getOrderSuccess(orders) {
    return { type: types.LOAD_ORDERS_SUCCESS, orders };
  }

export function createOrderSuccess(order) {
    return { type: types.CREATE_ORDER_SUCCESS, order };
  }

  export function updateOrderSuccess(order) {
    return { type: types.UPDATE_ORDER_SUCCESS, order };
  }
  
  export function deleteOrderOptimistic(order) {
    return { type: types.DELETE_ORDER_OPTIMISTIC, order };
  }

  export function getOrders() {
    /*return function (dispatch) {
      dispatch(beginApiCall());
      return courseApi
        .getCourses()
        .then(courses => {
          dispatch(getCourseSuccess(courses));
        })
        .catch(error => {
          dispatch(apiCallError(error));
          throw error;
        });
    };*/
  }
  
  export function saveOrder(order) {
    console.log("holaa");
    return "";
    
    /*//eslint-disable-next-line no-unused-vars
    return function (dispatch, getState) {
      dispatch(beginApiCall());
      return courseApi
        .saveCourse(course)
        .then(savedCourse => {
          course.id
            ? dispatch(updateCourseSuccess(savedCourse))
            : dispatch(createCourseSuccess(savedCourse));
        })
        .catch(error => {
          dispatch(apiCallError(error));
          throw error;
        });
    };*/
  }
  
  /*export function deleteCourse(course) {
    return function (dispatch) {
      // Doing optimistic delete, so not dispatching begin/end api call
      // actions, or apiCallError action since we're not showing the loading status for this.
      dispatch(deleteCourseOptimistic(course));
      return courseApi.deleteCourse(course.id);
    };
  }*/