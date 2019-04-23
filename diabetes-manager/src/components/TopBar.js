import React from "react";
import { Link } from "react-router-dom";
import { 
  // FaHome, 
  FaEye, 
  FaUser 
} from 'react-icons/fa';


class TopBar extends React.Component {

  render() {
    return (
      <>
        <nav>
          <Link to={'/'} >
            <h1 className='logo' label='Home'>GlucosIQ™</h1>
          </Link>
          
          <div className='nav-links'>
            <Link to={'/overview'} >
              <FaEye label="Overview" />
            </Link>
            
            <Link to={'/profile'} >
              <FaUser label="Profile" />
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

// export default withStyles(styles)(TopBar);
export default TopBar;
