import {combineReducers,createStore} from "redux";
import Showreducer from "./reducers/showReducer";
const reducer=combineReducers(
    {
        shows:Showreducer,
    }
);
const store=createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
export type State=ReturnType<typeof reducer>;
export default store;
