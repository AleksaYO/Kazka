import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css["title-box"]}>
        <h1 className={css.title}>Hotel & restaurant “Kazka”</h1>
      </div>
    </section>
  );
};

export default Hero;
