import { ActionCreator } from "redux";
import { Show } from "../models/show";
export const SHOW_LOADED = "SHOWS_LOADED";
export const ShowloadedAction: ActionCreator<{ type: string; payload:Show[]}> = (shows: Show[]) => {
  // console.log(shows);
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


export const SHOWS_ID_CHANGE="SHOWS_ID_CHANGE";
export const showIdChange:ActionCreator<{type:string,payload:number}>=(id)=>{
  return {
    type:SHOWS_ID_CHANGE,
    payload:id,
  }
}