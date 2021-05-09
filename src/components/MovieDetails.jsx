import { useState, useEffect } from "react";
import { Dimmer, Loader } from "semantic-ui-react";

export default function MovieDetails({ imdbID }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `http://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
    )
      .then(res => res.json())
      .then(data => setMovie(data));
    setIsLoading(false);
  }, [imdbID]);

  return isLoading ? (
    <Dimmer active>
      <Loader />
    </Dimmer>
  ) : (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>
        <b>Director:</b> {movie.Director}
      </h3>
      <h3>
        <b>Actors:</b> {movie.Actors}
      </h3>
      <h3>
        <b>Plot:</b> {movie.Plot}
      </h3>
      <h3>
        <b>IMDB Rating:</b> {movie.imdbRating}
      </h3>
    </div>
  );
}
