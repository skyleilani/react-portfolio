import {useRef} from 'react';
import {useCancelOffButton} from '../tools/useCancelOffButton';
import DropdownButton from './DropdownButton';
import {Link} from 'react-router-dom';

import '../../styles.css';

const Dropdown = (props) => {
  const dropdown = useRef(null);
  const [isActive, setIsActive] = useCancelOffButton(dropdown, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className='dropdown-container'>
      <div className='menu-container'>
        <button onClick={onClick} className='dropdown-trigger'>
          <DropdownButton lines='3' />
        </button>
        <nav
          ref={dropdown}
          className={`dropdown ${isActive ? 'active' : 'inactive'}`}
        >
          <ul>
            <li>
              <Link className='art' to='/art'>
                Art
              </Link>
            </li>
            <li>
              <Link className='tech' to='/tech'>
                Tech
              </Link>
            </li>
            <li>
              <Link className='about' to='/about'>
                About
              </Link>{' '}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Dropdown;
