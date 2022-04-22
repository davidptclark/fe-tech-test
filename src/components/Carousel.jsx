import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            <div className="carousel-text-container">
              <h3 className="carousel-title">{item.Title}</h3>
              <p className="carousel-subtitle">{item.Subtitle}</p>
              <Link to="/contact-us">
                <button>Contact Us</button>
              </Link>
            </div>
            <img
              key={`carousel-image-${index}`}
              className="carousel-image"
              src={item.ImageUrl}
              alt="Office"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
