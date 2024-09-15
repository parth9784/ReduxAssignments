import { FC, useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { fetchshow } from "../api";
import { Show } from "../models/show";
import { showsQueryChangeAction } from "../slices/show";
import { connect, ConnectedProps } from "react-redux";
import {State} from "../store";
import { showLoadingSelector, showQuerySelector, showSelector } from "../selectors/Show";
import LoadingSpinner from "../Components/LoadingSpinner";

type showlistprops={}&ReduxProps;
const ShowListPage:FC<showlistprops>= ({query,shows,showquerychange,loading})=>{
  return (
    <div className="mt-2">
      <div className="flex">
      <SearchBar value={query} onChange={(e)=>{showquerychange(e.target.value)}} />
        {loading && <LoadingSpinner/>}
      </div>

      <div className="flex flex-wrap justify-center">
        {
          shows && shows.map((res:any)=>{
            return <ShowCard key={res.id} show={res}/>
          })
        }
      </div>
    </div>
  );
}

const mapDispatchToProps={
  showquerychange:showsQueryChangeAction,
}

const mapStateToProps=(state:State)=>{
  return {query:showQuerySelector(state),shows:showSelector(state),loading:showLoadingSelector(state)}
}

const connector=connect(mapStateToProps,mapDispatchToProps)
type ReduxProps=ConnectedProps<typeof connector>;
export default connector(ShowListPage);
