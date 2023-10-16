//component to list movies

import React, { useState, useEffect } from "react"; //import useState to create a series of state variables.
import MovieDataService from "../services/movies";
import { Link } from "react-router-dom";

const MoviesList = (props) => {
  // is functional component and receives and uses props
  const [movies, setMovies] = useState([]); //use the React useState hook to create the movies, searchTitle, searchRating and ratings state variables.
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [ratings, setRatings] = useState(["All Ratings"]);

  useEffect(() => {
    retrieveMovies();
    retrieveRatings();
  }, []);

  const retrieveMovies = () => {
    MovieDataService.getAll()
      .then((response) => {
        console.log(response.data.movies);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveRatings = () => {
    MovieDataService.getRatings()
      .then((response) => {
        console.log(response.data);
        //start with 'All ratings' if user doesn't specify any ratings
        setRatings(["All Ratings"].concat(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };
  const onChangeSearchRating = (e) => {
    const searchRating = e.target.value;
    setSearchRating(searchRating);
  };
  
};



// function MoviesList() {
//   return <div className="App">Movies List</div>;
// }

export default MoviesList;
