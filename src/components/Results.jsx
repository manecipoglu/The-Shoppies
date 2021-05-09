import { useState } from "react";
import { connect } from "react-redux";
import { setNominees, loadMovies } from "../redux/actions/movieActions";
import MovieDetails from "./MovieDetails";
import poster from "../images/poster.jpg";

import {
  Accordion,
  Icon,
  Segment,
  Button,
  Image,
  Divider,
} from "semantic-ui-react";

function Results({ searchResults, nominees, setNominees, loadMovies }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  function nominateMovie(result) {
    const updatedNominees = [...nominees, result];
    setNominees(updatedNominees);
    window.localStorage.setItem("nominees", JSON.stringify(updatedNominees));
  }

  return (
    <Segment inverted style={{ minHeight: "500px" }}>
      {searchResults[0] !== "Movie not found!" ? (
        searchResults.map((result, index) => (
          <Accordion inverted fluid key={index + result.imdbID}>
            <Accordion.Title active={activeIndex === index} index={index}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    size="large"
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? -1 : index)
                    }
                    name={
                      activeIndex === index ? "chevron down" : "chevron right"
                    }
                  />
                  {
                    <Image
                      id="nmf"
                      src={result.Poster ? result.Poster : poster}
                      alt="movie poster"
                      size={activeIndex === index ? "medium" : "tiny"}
                      spaced="right"
                    />
                  }
                  <Segment inverted style={{ marginTop: "0" }}>
                    <h3>
                      {result.Title} - {result.Year}
                    </h3>
                    {activeIndex === index && (
                      <MovieDetails imdbID={result.imdbID} />
                    )}
                  </Segment>
                </div>
                <Button
                  size="medium"
                  circular
                  inverted
                  color="green"
                  content={"Nominate"}
                  disabled={
                    nominees.some(
                      nominee => nominee.imdbID === result.imdbID
                    ) || nominees.length >= 5
                  }
                  onClick={() => nominateMovie(result)}
                />
              </div>
            </Accordion.Title>
            <Accordion.Content
              active={activeIndex === index}
              className="expand"
            ></Accordion.Content>
            <Divider inverted />
          </Accordion>
        ))
      ) : (
        <h3>{searchResults[0]}</h3>
      )}
    </Segment>
  );
}

function mapState({ movieReducer: { nominees, searchResults } }) {
  return {
    searchResults,
    nominees,
  };
}

const mapDispatch = {
  setNominees,
  loadMovies,
};

export default connect(mapState, mapDispatch)(Results);
