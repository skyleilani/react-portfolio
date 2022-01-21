import "./styles.css";
import Home from "./pages/Home";
import Art from "./pages/Art";
import Tech from "./pages/Tech";
import About from "./pages/About";

import { Route, Routes, Link } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      {/*routing*/}
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
              </div>
            }
          />{" "}
          <Route
            path="/art"
            element={
              <div>
                <Art />
              </div>
            }
          />{" "}
          <Route
            path="/tech"
            element={
              <div>
                <Tech />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <About />
              </div>
            }
          />
        </Routes>
      </div>
      );
    </div>
  );
};

export default App;
