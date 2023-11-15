import styles from './Navbar.module.scss';
import Container from './Container/Container';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className={styles.nav}>
          <div className={styles.navIcon}>
            <a href='/'>
              <span className='fa fa-tasks'></span>
            </a>
          </div>
          <div>
            <ul>
              <li className='linkActive'>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : undefined
                  }
                  to='/'
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : undefined
                  }
                  to='/favorite'
                >
                  Favorite
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : undefined
                  }
                  to='/about'
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
