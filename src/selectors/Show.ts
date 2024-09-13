import {State} from "../store";
import {createSelector} from "reselect";
export const showStateSelector=(state:State)=>{
    return  state.shows;
}
export const showQuerySelector=createSelector(showStateSelector,(state)=>{
    return state.query;
})

export const showMapSelector=createSelector(showStateSelector,(state)=>{
    return state.shows;
})

export const showSelector=createSelector(showMapSelector,(showmap)=>{
    return Object.keys(showmap).map((showid)=>showmap[+showid]);
})