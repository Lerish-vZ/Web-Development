import express from "express";
import MoviesController from './movies.controller.js';

const router = express.Router(); // get access to express router

router.route("/").get((req,res) => res.send('hello world'))//get(MoviesController.apiGetMovies);

export default router;
