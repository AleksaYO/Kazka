import css from "./Rooms.module.css";
import { useState } from "react";
import { lux, standart, standartPlus } from "./Katalog";

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

  return (
    <>
      <section className={css.rooms}>
        {isOpen && (
          <div onClick={onCloseModal} className={css.backdrop}>
            <div className={css.modal}>
              <ul className={css["modal-list"]}>
                {images.map(({ url, key }) => {
                  return (
                    <li className={css["modal-item"]} key={key}>
                      <img className={css.image} src={url} alt="img" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
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
