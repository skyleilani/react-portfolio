import { Link } from "react-router-dom";
import "./pages.css";
import Dropdown from "../components/menu/Dropdown.js";
import "../styles.css";

const About = () => {
  return (
    <div className="about">
      <Link className="name" to="/">
        Sky Leilani
      </Link>
      <div className="button">
        <Dropdown />
      </div>
      <p className="pageTitle">About</p>
    </div>
  );
};

export default About;
