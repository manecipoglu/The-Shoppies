import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setNominees } from "../redux/actions/movieActions";

import MovieCard from "./MovieCard";

import { Dimmer, Loader, Message, Placeholder } from "semantic-ui-react";

function Banner({ nominees, setNominees }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let nominees = window.localStorage.getItem("nominees");
    nominees = JSON.parse(nominees);
    if (nominees) setNominees(nominees);
    setIsLoading(false);
    // eslint-disable-next-line
  }, []); // it is OK in this use case to leave the array empty

  return isLoading ? (
    <Dimmer active>
      <Loader />
    </Dimmer>
  ) : (
    <>
      <div style={{ height: "100px" }}>
        {nominees.length >= 5 && (
          <Message
            success
            header="Thank you for choosing your nominees!"
            content="Should you decide to change your list, simply remove the existing nominees to add new ones."
          />
        )}
        {nominees.length === 0 && (
          <h1 style={{ textAlign: "center" }}>
            USE THE SEARCHBAR TO FIND MOVIES!
          </h1>
        )}
      </div>
      <div className="banner">
        <section className="cards">
          {[0, 1, 2, 3, 4].map(index =>
            nominees[index] ? (
              <MovieCard
                key={index + nominees[index].imdbID}
                nominee={nominees[index]}
              />
            ) : (
              <Placeholder
                key={index + "placeholder"}
                id="nmf"
                inverted
                style={{
                  height: "300px",
                  width: "200px",
                  margin: "0",
                }}
              >
                <Placeholder.Image />
              </Placeholder>
            )
          )}
        </section>
      </div>
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

export default connect(mapState, mapDispatch)(Banner);
