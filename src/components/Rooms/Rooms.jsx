import css from "./Rooms.module.css";
import { useEffect, useState } from "react";
import { lux, standart, standartPlus } from "./Katalog";
import Slider from "../Slider/Slider";

const Rooms = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);

  const onOpenModal = (e) => {
    setIsOpen(true);
    if (e.currentTarget.id === "standart") {
      setImages(standart);
    } else if (e.currentTarget.id === "lux") {
      setImages(lux);
    } else {
      setImages(standartPlus);
    }
    document.body.style.overflow = "hidden";
  };

  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      document.body.style.overflow = "unset";
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Получите размеры окна браузера
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      // Получите размеры модального окна
      const modalHeight = document.querySelector(".modal").offsetHeight;
      const modalWidth = document.querySelector(".modal").offsetWidth;

      // Вычислите положение модального окна
      const top = (windowHeight - modalHeight) / 2;
      const left = (windowWidth - modalWidth) / 2;

      // Установите положение модального окна
      document.querySelector(".modal").style.top = `${top}px`;
      document.querySelector(".modal").style.left = `${left}px`;
    }
  }, [isOpen]);

  return (
    <>
      <section className={css.rooms}>
        {isOpen && <Slider onCloseModal={onCloseModal} arr={images} />}
        <ul className={css["rooms_list"]}>
          <li id="standart" onClick={onOpenModal} className={css["rooms_item"]}>
            <div className={css.standart}>
              <div className={css["info_box"]}>
                <h3 className={css["rooms_title"]}>Стандарт</h3>
                <p className={css["rooms_price"]}>900 грн</p>
              </div>
            </div>
          </li>
          <li
            id="standart+"
            onClick={onOpenModal}
            className={css["rooms_item"]}
          >
            <div className={css["standart_plus"]}>
              <div className={css["info_box"]}>
                <h3 className={css["rooms_title"]}>Стандарт +</h3>
                <p className={css["rooms_price"]}>1200 грн</p>
              </div>
            </div>
          </li>
          <li id="lux" onClick={onOpenModal} className={css["rooms_item"]}>
            <div className={css.lux}>
              <div className={css["info_box"]}>
                <h3 className={css["rooms_title"]}>Напівлюкс</h3>
                <p className={css["rooms_price"]}>1600 грн</p>
              </div>
            </div>
          </li>
        </ul>
        {/* <ul className={css["rooms_list"]}>
          <li className={css["rooms_item"]}>
            <Atropos className={css.atropos} shadowScale={1}>
              <div className={css["text_bg"]}>
                <h3 className={css["rooms_title"]}>Стандарт</h3>
                <p className={css["rooms_price"]}>900 грн</p>
              </div>
            </Atropos>
          </li>
          <li className={css["rooms_item"]}></li>
          <li className={css["rooms_item"]}></li>
        </ul> */}
      </section>
    </>
  );
};

export default Rooms;
