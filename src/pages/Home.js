import Carousel from "../components/carousel/Carousel";
import Dropdown from "../components/menu/Dropdown";
import { homePhotos } from "../tools/homePhotos";
import "../styles.css";

const Home = () => {
  return (
    <div className="home">
      <div className="button">
        <Dropdown />
      </div>
      <Carousel photos={homePhotos} />
    </div>
  );
};

export default Home;
