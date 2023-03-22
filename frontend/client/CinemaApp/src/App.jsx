import "./App.css";
import Header from "./features/Header";
import MoviePage from "./features/MoviePage";

function App() {
  function clickHomeButton() {
    console.log("Hello");
  }

  function clickAboutButton() {
    console.log("homebutton");
  }
  return (
    <div className="App">
      <div className = "movieApp">
      <div className="header">
        <Header
          homeButtonClick={() => {
            clickHomeButton();
          }}
          aboutButtonClick={() => {
            clickAboutButton();
          }}
        ></Header>
      </div>
      <div className="moviePage">
        <MoviePage></MoviePage>
      </div>
      </div>
    </div>
  );
}

export default App;
