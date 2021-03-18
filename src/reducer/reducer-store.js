import {combineReducers, createStore} from "redux";
import doctorBaseReducer from "./doctorBaseReducer";
import workFlowReducer from "./workFlowReducer";

let reducers = combineReducers({
    doctorBasePage: doctorBaseReducer, 
    workFlowPage: workFlowReducer,
})

const store = createStore(reducers);

export default store