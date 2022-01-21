import { Link } from "react-router-dom";
import Dropdown from "../components/menu/Dropdown.js";
import Carousel from "../components/carousel/Carousel.js";
import { artPhotos } from "../tools/artPhotos.js";
import "./pages.css";
import "../styles.css";

const Art = () => {
  return (
    <div className="art">
      <Link className="name" to="/">
        Sky Leilani
      </Link>
      <div className="button">
        <Dropdown />
      </div>
      <div>
        <Carousel photos={artPhotos} />
      </div>
    </div>
  );
};

export default Art;
