import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { fetchshow } from "../api";
import { Show } from "../models/show";
function ShowListPage() {
  const [shows, setShows] = useState<Show[]>([]);
  const [query, setQuery] = useState("");
  useEffect(()=>{
    fetchshow(query).then((res:any)=>setShows(res))
  },[query])
  console.log(shows);
  return (
    <div className="mt-2">
      <SearchBar value={query} onChange={(e)=>{setQuery(e.target.value)}} />
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
export default ShowListPage;
