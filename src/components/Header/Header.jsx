import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      {/* <svg className={css.logo} width="90px" height="23px">
        <use src="../../images/sprite.svg#icon-kazka" />
      </svg> */}
      <a href="/" className={css.logo}></a>
      <p className={css.menu}>MENU</p>
    </header>
  );
};

export default Header;
