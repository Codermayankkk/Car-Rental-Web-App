import { combineReducers } from "redux";
import userDataReducer from "../reducers/userDataReducer";

const rootReducer = combineReducers({
    userDataReducer: userDataReducer,
});

export default rootReducer;