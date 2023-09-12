let movies; //stores refernece to the database

export default class MoviesDAO {
  static async injectDB(conn) { //injectDB (async method) gets called as soon as server starts. Provides database reference to movies.
    if (movies) {
      return;
    }
    try { //if reference already exists we return...(next line)
      movies = await conn.db(process.env.MOVIEREVIEWS_NS).collection("movies");
    } catch (e) {
      console.error(`unable to connect in MoviesDAO: ${e}`);
    }
  }
}

//method to get all movies from database