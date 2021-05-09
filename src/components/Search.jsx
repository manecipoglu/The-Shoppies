import { useState } from "react";
import { connect } from "react-redux";

import { loadMovies } from "../redux/actions/movieActions";

import { Input } from "semantic-ui-react";

function Search({ loadMovies }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input.length === 0) return;
    loadMovies(input);
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
          onChange={e => setInput(e.target.value)}
          placeholder="Search movies by title"
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
