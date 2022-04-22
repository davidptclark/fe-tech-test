import { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import * as api from "../utils/api";

export default function Carousel() {
  const [carouselData, setCarouselData] = useState([]);
  //object keys: Title, Subtitle and ImageUrl
  useEffect(() => {
    api.getCarouselData().then((data) => setCarouselData(data));
  }, []);
  console.log(carouselData);
  return (
    <Swiper
      className="carousel-image-container"
      modules={[Navigation]}
      spaceBetween={10}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {carouselData.map((item, index) => {
        return (
          <SwiperSlide key={`carousel-slide-${index}`}>
            <div>
              <h3 className="carousel-title">{item.Title}</h3>
              <p className="carousel-text">{item.Subtitle}</p>
              <img
                key={`carousel-image-${index}`}
                className="carousel-image"
                src={item.ImageUrl}
                alt="Office"
              />
            </div>
          </SwiperSlide>
        );
      })}
      ...
    </Swiper>
  );
}
