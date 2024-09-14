import { produce } from "immer";
import { AnyAction } from "redux";
import { Show } from "../models/show";
import { normalize, schema } from "normalizr";

export type State = {
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

// Reducer
function showReducer(state = initialState, action: AnyAction): State {
  return produce(state, (draft) => {
    switch (action.type) {
      case "SHOWS_LOADED": {
        const shows = action.payload as Show[];
        if (shows && shows.length > 0) {
          const showSchema = new schema.Entity("shows");
          const normalizedData = normalize(shows, [showSchema]);
          draft.loading=false; 
          draft.query_shows[draft.query]=normalizedData.result;
          draft.shows = { ...draft.shows,...normalizedData.entities.shows };
        }
        break;
      }

      case "SHOWS_QUERY_CHANGE": {
        const query = action.payload as string;
        if (typeof query === "string") {
          draft.query = query;
          draft.loading=true;
        }
        break;
      }

      case "SHOWS_ID_CHANGE": {
        const show = action.payload as Show; 
        if (show && show.id !== undefined) {
          draft.shows[show.id] = show;
        }
        break;
      }

      default:
        return state;
    }
  });
}

export default showReducer;
