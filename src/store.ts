import {applyMiddleware, combineReducers,createStore} from "redux";
import Showreducer from "./reducers/showReducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from '@redux-devtools/extension';
import { fetchShows } from "./sagas/shows";
import { takeLatest } from "redux-saga/effects";
const reducer=combineReducers(
    {
        shows:Showreducer,
    }
);
function* rootSaga(){
    yield  takeLatest("SHOWS_QUERY_CHANGE",fetchShows);
}
const sagaMiddleWare=createSagaMiddleware();

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare)),
);
sagaMiddleWare.run(rootSaga);
export type State=ReturnType<typeof reducer>;
export default store;
