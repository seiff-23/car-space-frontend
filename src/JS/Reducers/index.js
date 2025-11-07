import { combineReducers } from "redux";
import CarReducer from "./CarReducer";
import AuthReducer from "./AuthReducer";


const rootReducer = combineReducers({ CarReducer, AuthReducer });


export default rootReducer; 