import { TrySharp } from "@mui/icons-material";
import {
  APPOINMENT_CREATE_REQUEST,
  APPOINMENT_CREATE_SUCCESS,
  APPOINMENT_CREATE_FAIL,
  GET_APPOINMENT_LIST_REQUEST,
  GET_APPOINMENT_LIST_SUCCESS,
  GET_APPOINMENT_LIST_FAIL,
} from "../constants/appoinmentConstant";

export const createAppoinment = (data) => async (dispatch, getState) => {
  try {
    dispatch({
      type: APPOINMENT_CREATE_REQUEST,
    });

    const appoinmentList = localStorage.setItem(
      "appoinmentList",
      JSON.stringify(data)
    );
    dispatch({
      type: APPOINMENT_CREATE_SUCCESS,
      payload: appoinmentList,
    });
  } catch (error) {
    console.log("error");
  }
};

export const getAppoinmentList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_APPOINMENT_LIST_REQUEST });

    let data = JSON.parse(localStorage.getItem("appoinmentList"));
    dispatch({
      type: GET_APPOINMENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("Error");
  }
};
