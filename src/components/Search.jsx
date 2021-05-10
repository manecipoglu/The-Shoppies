import { useState } from "react";
import { connect } from "react-redux";

import { loadMovies } from "../redux/actions/movieActions";

import { Input } from "semantic-ui-react";

function Search({ loadMovies }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const searchBar = new FormData(e.target).get("searchBar");
    if (!searchBar || searchBar === input) return;

    setInput(searchBar);
    loadMovies(searchBar);
  }

  return (
    <section>
      <h2 style={{ textAlign: "center" }}>Choose 5 movies to Nominate!</h2>
      <form onSubmit={handleSubmit}>
        <Input
          action={{
            icon: "search",
            color: "green",
            content: "Search",
            labelPosition: "right",
          }}
          fluid
          placeholder="Search movies by title"
          name="searchBar"
        />
      </form>
    </section>
  );
}

function mapState() {
  return {};
}

const mapDispatch = {
  loadMovies,
};

export default connect(mapState, mapDispatch)(Search);
