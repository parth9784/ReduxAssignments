import {produce} from "immer";
import { AnyAction } from "redux";
import { Show } from "../models/show";
import { normalize, schema } from "normalizr";
export type State = {
  shows: { [showid: number]: Show };
  query: string;
};
const initialState: State = {
  shows: {},
  query: "",
};

function Showreducer(state = initialState, action: AnyAction): State {
    switch (action.type){
        case 'SHOWS_LOADED':
            return produce(state,(draft:any)=>{
              const shows=action.payload as Show[];
              const showSchema= new schema.Entity("shows");
              const normalizedData=normalize(shows,[showSchema]);
              draft.shows={...normalizedData.entities.shows};
            })
        case "SHOWS_QUERY_CHANGE":
          return produce(state,(draft:any)=>{
            draft.query=action.payload;
          })  
        // case "SHOWS_ID_CHANGE":
        //   return produce(state,(draft:any)=>{
        //     const shows=action.payload as Show[];
        //     const showSchema= new schema.Entity("shows");
        //     const normalizedData=normalize(shows,[showSchema]);
        //     draft.shows={normalizedData.entities.shows};
        //   })
      default:
        return state;
    }
}

export default Showreducer;

