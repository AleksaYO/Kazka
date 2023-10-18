import css from "./Rooms.module.css";
import "atropos/css";
import Atropos from "atropos/react";

const Rooms = () => {
  return (
    <section className={css.rooms}>
      <ul className={css["rooms_list"]}>
        <li onClick={() => console.log(1)} className={css["rooms_item"]}>
          <div id="app">
            <Atropos className="my-atropos">
              <div className={css.standart}>
                <div data-atropos-offset="10" className={css["info_box"]}>
                  <h3 data-atropos-offset="15" className={css["rooms_title"]}>
                    Стандарт
                  </h3>
                  <p data-atropos-offset="15" className={css["rooms_price"]}>
                    900 грн
                  </p>
                </div>
              </div>
            </Atropos>
          </div>
        </li>
        <li className={css["rooms_item"]}>
          <div id="app">
            <Atropos className="my-atropos">
              <div className={css["standart_plus"]}>
                <div data-atropos-offset="10" className={css["info_box"]}>
                  <h3 data-atropos-offset="15" className={css["rooms_title"]}>
                    Стандарт +
                  </h3>
                  <p data-atropos-offset="15" className={css["rooms_price"]}>
                    1200 грн
                  </p>
                </div>
              </div>
            </Atropos>
          </div>
        </li>
        <li className={css["rooms_item"]}>
          <div id="app">
            <Atropos className="my-atropos">
              <div className={css.lux}>
                <div data-atropos-offset="10" className={css["info_box"]}>
                  <h3 data-atropos-offset="15" className={css["rooms_title"]}>
                    Полу-Люкс
                  </h3>
                  <p data-atropos-offset="15" className={css["rooms_price"]}>
                    1600 грн
                  </p>
                </div>
              </div>
            </Atropos>
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
  );
};

export default Rooms;
