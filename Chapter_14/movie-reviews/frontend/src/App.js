import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import AddReview from "./components/add-review";
import MoviesList from "./components/movies-list";
import Movie from "./components/movie";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to={"/movies"}>Movies</Link>
            </Nav.Link>
            <Nav.Link href="#link">

            {/* ternary statement where if its true, execute the section after the '?' */}
            {/* If false, execute the section after the colon ':'. */}
            {/* if user is logged in (true) display logout, otherwise display login and link it to /login  */}
              { user ? ( 
                <a>Logout User </a>
              ) : (
                <Link to={"/login"}> Login </Link>
              )}

            {/* In React, we can use curly braces ‘{}’ to put in code. */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default App;
