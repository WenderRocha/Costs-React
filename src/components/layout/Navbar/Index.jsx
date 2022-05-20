import { Link } from "react-router-dom";
import styles from "../Navbar/Navbar.module.css";
import logo from "../../../img/costs_logo.png";

import Container from "../Container/Index";

function NavBar(props) {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>

          <li className={styles.item}>
            <Link to="/projects">Projetos</Link>
          </li>
          
          <li className={styles.item}>
            <Link to="/company">Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default NavBar;
