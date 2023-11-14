import styles from './Navbar.module.scss';
import Container from './Container/Container';

const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className={styles.nav}>
          <div className={styles.navIcon}>
            <a href="/">
              <span className="fa fa-tasks"></span>
            </a>
          </div>
          <div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/favorite">Favorite</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
