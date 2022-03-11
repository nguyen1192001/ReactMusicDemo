import { combineReducers } from "redux";
import { singReducer } from "./singReducer";
const reducers = combineReducers({
    listSing: singReducer
});
export default reducers;
