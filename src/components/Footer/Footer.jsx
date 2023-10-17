import css from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Link to="/">
        <p className={css.logo}></p>
      </Link>
      <Link to="/contacts">
        <p className={css.contacts}>CONTACTS</p>
      </Link>
    </footer>
  );
};

export default Footer;
