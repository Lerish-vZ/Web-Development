import MoviesDAO from '../dao/moviesDAO.js';

export default class MoviesController{

    static async apiGetMovies(req, res, next) {
        const moviesPerPage = req.query.moviesPerPage ?
        parseInt(req.query.moviesPerPage) : 20
        const page = req.query.page ? parseInt(req.query.page) : 0

        let filters = {}
    }
}