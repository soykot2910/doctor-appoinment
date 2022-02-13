import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
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

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
