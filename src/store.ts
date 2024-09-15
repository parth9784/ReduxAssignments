import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from '@redux-devtools/extension';
import { fetchshowdata, fetchShows } from "./sagas/shows";
import { debounce, takeEvery} from "redux-saga/effects";
import showReducer from "./slices/show";
// const reducer=combineReducers(
//     {
//         shows:Showreducer,
//     }
// );
function* rootSaga(){
    yield  debounce(200,"SHOWS_QUERY_CHANGE",fetchShows);
    yield takeEvery("SHOWS_ID_CHANGE",fetchshowdata);
}
const sagaMiddleWare=createSagaMiddleware();
const store=configureStore({
    reducer:{
        shows:showReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleWare)
})

sagaMiddleWare.run(rootSaga);
export type State=ReturnType<typeof store.getState>;
export default store;
