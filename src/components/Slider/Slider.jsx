import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import css from "./Slider.module.css";
import PropTypes from "prop-types";
import "swiper/css/effect-fade";

const Slider = ({ arr = [], onCloseModal }) => {
  return (
    <div className={`${css["modal-backdrop"]} modal`}>
      <Swiper
        onClick={onCloseModal}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        keyboard
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        effect="fade"
      >
        {arr.map(({ url, key }) => {
          return (
            <SwiperSlide key={key}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img width={"50%"} src={url} alt="room" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

Slider.propTypes = {
  arr: PropTypes.array.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Slider;
