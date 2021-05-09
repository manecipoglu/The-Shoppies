import { connect } from "react-redux";
import { setNominees } from "../redux/actions/movieActions";

import poster from "../images/poster.jpg";

function MovieCard({ nominee, nominees, setNominees }) {
  function handleClick() {
    const updatedNominees = nominees.filter(
      nom => nom.imdbID !== nominee.imdbID
    );
    setNominees(updatedNominees);
    window.localStorage.setItem("nominees", JSON.stringify(updatedNominees));
  }

  return (
    <>
      <div id="nmf" className="card">
        <div className="card-inner">
          <div className="card-front">
            <img
              src={nominee.Poster ? nominee.Poster : poster}
              alt="movie poster"
            />
          </div>
          <div className="card-back">
            <div>
              <h2>{nominee.Title}</h2>
              <h3>{nominee.Year}</h3>
            </div>
            <button className="btn" onClick={handleClick}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <ul id="mf">
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {nominee.Title} - {nominee.Year}
          <button className="btn" onClick={handleClick}>
            Remove
          </button>
        </li>
      </ul>
    </>
  );
}

function mapState({ movieReducer: { nominees } }) {
  return {
    nominees,
  };
}

const mapDispatch = {
  setNominees,
};

export default connect(mapState, mapDispatch)(MovieCard);
