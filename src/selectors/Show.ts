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
export const showQueryMapSelector=createSelector(showStateSelector,(state)=>{
    return  state.query_shows;
})
export const showLoadingSelector=createSelector(showStateSelector,(state)=>{
    return  state.loading;

})

export const showSelector = createSelector(
    showMapSelector,
    showQuerySelector,
    showQueryMapSelector,
    (showmap, query, querymap) => {
      return querymap[query]?.map((showid:number) => showmap[showid]) || [];
    }
  );