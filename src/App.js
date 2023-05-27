import "./App.css";
import Home from "./Home";
import About from "./About";
import { Route, Routes } from "react-router-dom";

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
        <Route path="/social" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
