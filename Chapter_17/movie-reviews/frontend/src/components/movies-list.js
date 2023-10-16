//component to list movies

import React, { useState, useEffect } from "react"; //import useState to create a series of state variables.
import MovieDataService from "../services/movies";
import { Link } from "react-router-dom";

const MoviesList = (props) => { // is functional component and receives and uses props
  const [movies, setMovies] = useState([]); //use the React useState hook to create the movies, searchTitle, searchRating and ratings state variables.
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [ratings, setRatings] = useState(["All Ratings"]);
};



function MoviesList() {
  return <div className="App">Movies List</div>;
}

export default MoviesList;
