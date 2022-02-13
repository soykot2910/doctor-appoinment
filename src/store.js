import { createStore, combineReducers, applyMiddleware } from "redux";

import {
  appoinmentCreateReducer,
  getAppoinmentListReducer,
} from "./reducers/appoinmentReducers";

const reducer = combineReducers({
  appoinmentCreate: appoinmentCreateReducer,
  appoinmentList: getAppoinmentListReducer,
});

const appoinmentList = localStorage.getItem("appoinmentList")
  ? JSON.parse(localStorage.getItem("appoinmentList"))
  : [];

const initialState = {
  appoinmentList,
};


const store = createStore(
    reducer,
    initialState,
);


export default store