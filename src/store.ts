import {applyMiddleware, combineReducers,createStore} from "redux";
import Showreducer from "./reducers/showReducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from '@redux-devtools/extension';
import { fetchshowdata, fetchShows } from "./sagas/shows";
import { debounce, takeEvery} from "redux-saga/effects";
const reducer=combineReducers(
    {
        shows:Showreducer,
    }
);
function* rootSaga(){
    yield  debounce(200,"SHOWS_QUERY_CHANGE",fetchShows);
    yield takeEvery("SHOWS_ID_CHANGE",fetchshowdata);
}
const sagaMiddleWare=createSagaMiddleware();

const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare)),
);
sagaMiddleWare.run(rootSaga);
export type State=ReturnType<typeof reducer>;
export default store;
