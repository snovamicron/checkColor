import { createStore, combineReducers } from "redux";

// reducers
import BackgroundColorChange from "./Reducer/BackgroundColorChange";

const reducers = combineReducers({
    BackgroundColorChange
})

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store