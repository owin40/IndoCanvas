import "./App.css";
import Home from "./Home";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-270030677-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <Routes>
      <Route>
        <Route
          path="/"
          element={
            <div className="App">
              <Home />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
