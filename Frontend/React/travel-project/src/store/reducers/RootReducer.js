import authReducer from "./AuthReducer";
import tourReducer from "./TourReducer";
import { combineReducers } from "redux";

const roootReducer = combineReducers({
    auth: authReducer,
    tour: tourReducer
})

export default roootReducer;