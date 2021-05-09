import Header from "./components/Header";
import Banner from "./components/Banner";
import Search from "./components/Search";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Search />
      <Results />
      <Footer />
    </div>
  );
}

export default App;
