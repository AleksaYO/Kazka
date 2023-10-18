import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <div className={css.wrapper}>
        <div className={css.spinner}></div>
      </div>
    </div>
  );
};
