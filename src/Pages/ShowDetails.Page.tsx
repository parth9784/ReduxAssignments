import { FC, useEffect } from "react";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { State } from "../store";
import { connect, ConnectedProps } from "react-redux";
import { showMapSelector } from "../selectors/Show";
import { showIdChange } from "../actions/showactions";
import LoadingSpinner from "../Components/LoadingSpinner";

type OwnProps = WithRouterProps;
type ShowDetailPageProps = ReduxProps & OwnProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({ params, show,loadshowdata }) => {
  // console.log(params.show_id);
  // console.log(show.genres);
  useEffect(()=>{
    loadshowdata(+params.show_id)
  },[params.show_id])
  // console.log(show)

  if (!show) {
    return <LoadingSpinner/>;
  }

  return (
    <div className="mt-2">
      <h2 className="text-4xl font-semibold tracking-wide">{show.name}</h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        {show.genres.length!==0 ? (
          show.genres.map((i:any) => <GenrePill name={i} key={i} />)
        ) : (
          <GenrePill name={"Comedy"} />
        )}
      </div>

      <div className="mt-2 flex">
        <img
          src={show.image?.original || "https://picsum.photos/200/300"}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
        <p
            dangerouslySetInnerHTML={{ __html: show.summary || 'No summary available' }}
          />
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating: <span className="text-gray-700">{show.rating?.average}/10</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State, ownProps: OwnProps) => {
  const showId = +ownProps.params.show_id;
  return { show: showMapSelector(state)[showId] };
};
const mapDispatchToProps={
  loadshowdata:showIdChange,
}
const connector = connect(mapStateToProps,mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

export default withRouter(connector(ShowDetailPage));
