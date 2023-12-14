import React from "react";
import Header from "../components/common/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Conference from "../media/img/conference.png";
import FaceToFace from "../media/img/face-to-face.png";
import Public from "../media/img/public.png";
import AskToJoin from "../media/img/ask-to-join.png";
import "../media/styles/HomePage.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Homepage = () => {
  return (
    <>
      <Header />
      <div className="w-80 text-center m-auto border rounded-full p-10 relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          loop={true}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div>
              <img src={Conference} />
              <div>Coference</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={FaceToFace} />
              <div>Face to Face</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Public} />
              <div>Public</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={AskToJoin} />
              <div>Ask to Join</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Homepage;
