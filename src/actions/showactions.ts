import { ActionCreator } from "redux";
import { Show } from "../models/show";
export const SHOW_LOADED = "SHOWS_LOADED";
export const ShowloadedAction: ActionCreator<{ type: string; payload:Show[]}> = (shows: Show[]) => {
  return {
    type: SHOW_LOADED,
    payload: shows,
  };
};


export const SHOWS_QUERY_CHANGE="SHOWS_QUERY_CHANGE";
export const showQueryChange:ActionCreator<{type:string,payload:string}>=(query)=>{
  return {
    type:SHOWS_QUERY_CHANGE,
    payload:query,
  }

}