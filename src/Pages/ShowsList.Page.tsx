import { FC, useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { fetchshow } from "../api";
import { Show } from "../models/show";
import { ShowloadedAction, showQueryChange } from "../actions/showactions";
import { connect } from "react-redux";
import {State} from "../store";
import { showQuerySelector, showSelector } from "../selectors/Show";

type showlistprops={
  shows:Show[],
  query:string,
  showquerychange:(query:string)=>void
}
const ShowListPage:FC<showlistprops>= ({query,shows,showquerychange})=>{
  return (
    <div className="mt-2">
      <SearchBar value={query} onChange={(e)=>{showquerychange(e.target.value)}} />
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
  showquerychange:showQueryChange,
}

const mapStateToProps=(state:State)=>{
  return {query:showQuerySelector(state),shows:showSelector(state)}
  
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowListPage);
