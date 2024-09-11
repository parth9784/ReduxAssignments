import produce from "immer";
import {AnyAction} from "redux";
import {Show} from "../models/show"
// import { State } from "../store";
export type State={
    shows:{ [showid:number] : Show},
    query:string,
}
const initialState={};

function reducer(state=initialState,action:AnyAction):State{
    switch(action.type){
        default:
            return state;
    }
}
export default reducer;
