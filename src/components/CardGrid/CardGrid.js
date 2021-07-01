import React, { Fragment } from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import { useSelector } from "react-redux";
import { selectPhotos, selectLoadingStatus } from "../PhotoCard/PhotoCardSlice";

const CardGrid = () => {
  const loading = useSelector(selectLoadingStatus);

  const flickrObj = useSelector(selectPhotos);

  if (loading === "loading") {
    return <h1>Loading</h1>;
  } else {
    return (
      <Fragment>
        {flickrObj.map((photo, ind) => (
          <PhotoCard key={ind} photo={photo} />
        ))}
      </Fragment>
    );
  }
};

export default CardGrid;
