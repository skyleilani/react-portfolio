import {Link} from 'react-router-dom';
import './pages.css';
import Dropdown from '../menu/Dropdown.js';
import '../../styles.css';

const Tech = () => {
  return (
    <div className='tech'>
      <Link className='name' to='/'>
        Sky Leilani
      </Link>
      <div className='button'>
        <Dropdown />
      </div>
      <p className='pageTitle'>Tech</p>
    </div>
  );
};

export default Tech;
