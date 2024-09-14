import {call, put} from "redux-saga/effects";
import {AnyAction} from "redux"
import { fetchshow } from "../api";
import { ShowloadedAction } from "../actions/showactions";
export function* fetchShows(action:AnyAction):Generator<any,any,any>{
    const result= yield call(fetchshow,action.payload);
    yield put(ShowloadedAction(result))
}