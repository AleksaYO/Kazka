import css from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={css.header}>
      <Link to="/">
        <p className={css.logo}></p>
      </Link>
      <Link to="/menu">
        <p className={css.menu}>MENU</p>
      </Link>
    </header>
  );
};

export default Header;
