import { Link } from "react-router-dom";
import { Show } from "../models/show";
import { FC } from "react";
type show={
  show:Show,
  key:number
}
const ShowCard:FC<show>=({show})=>{
  return (
    <div className="max-w-xs rounded-md shadow-md p-2 m-1" key={show.id}>
      <img
        src="https://picsum.photos/200/300"
        alt="photo"
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{show.name}</h2>
          <p>
           {show.summary}
          </p>
        </div>
        <Link
          to={"/show/"+show.id}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ShowCard;
