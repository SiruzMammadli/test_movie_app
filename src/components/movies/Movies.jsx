import React from "react";
import './movies.scss'

const Movies = ({ mov }) => {


  return (
    <>
      <div className="movie-card">
        <div className="movie-image"><img src={mov.imageURL} alt="" /></div>
        <div className="movie-description">
          {mov.name}<br/>{mov.overview}<br/>{mov.rating}
        </div>
      </div>
    </>
  );
};

export default Movies;
