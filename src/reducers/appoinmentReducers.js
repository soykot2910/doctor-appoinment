import {
  APPOINMENT_CREATE_REQUEST,
  APPOINMENT_CREATE_SUCCESS,
  APPOINMENT_CREATE_FAIL,
  GET_APPOINMENT_LIST_REQUEST,
  GET_APPOINMENT_LIST_SUCCESS,
  GET_APPOINMENT_LIST_FAIL,
} from "../constants/appoinmentConstant";

export const appoinmentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case APPOINMENT_CREATE_REQUEST:
      return {
        loading: true,
      };
    case APPOINMENT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        appoinmentList: action.payload,
      };
    case APPOINMENT_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAppoinmentListReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_APPOINMENT_LIST_REQUEST:
      return {
        loading: true,
      };
    case GET_APPOINMENT_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        appoinmentList: action.payload,
      };
    case GET_APPOINMENT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
