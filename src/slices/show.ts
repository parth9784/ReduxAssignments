import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Show } from '../models/show';
import { normalize, schema } from 'normalizr';
type State = {
    shows: { [showid: number]: Show };
    query_shows:{[query:string]:number[]};
    query: string;
    loading: boolean;
    show_loading:{[showid:number]:boolean}
  };
  const initialState: State = {
    shows: {},
    query_shows: {},
    query: "",
    loading: false,
    show_loading:{}
  };

export const  showsSlice = createSlice({
    name:"shows",
    initialState,
    reducers:{
        Showloaded:(state:State,action:PayloadAction<Show[]>)=>{
            console.log("SHOW LOAD CALLED  CALLED IN SLICE")
        const shows = action.payload as Show[];
          const showSchema = new schema.Entity("shows");
          const normalizedData = normalize(shows, [showSchema]);
          state.loading=false;
          state.query_shows[state.query]=normalizedData.result;
          state.shows = { ...state.shows,...normalizedData.entities.shows };
        },
        showsQueryChange:(state:State,action:PayloadAction<string>)=>{
            // const query = action.payload as string;
            console.log("SHOW Q CHANGE CALLED IN SLICE")
            state.query = action.payload;
            state.loading=true; 
        }
    }
})

const {actions,reducer:showReducer}=showsSlice;
export const{
    Showloaded:ShowloadedAction,
    showsQueryChange:showsQueryChangeAction
}=actions;
export default showReducer;