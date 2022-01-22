import "./styles.css";
import Home from "./components/pages/Home";
import Art from "./components/pages/Art";
import Tech from "./components/pages/Tech";
import About from "./components/pages/About";
import { Route, Routes } from "react-router-dom";
import Cursor from "./components/cursor/Cursor";
const App = () => {
  return (
    <>
      <Cursor />
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
    </>
  );
};

export default App;
