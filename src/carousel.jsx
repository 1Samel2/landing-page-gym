import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Personal from "./assets/Vector.svg";
import Home from "./assets/Rectangle12.svg";
import Female from "./assets/Rectangle12(1).svg";
import Home2 from "./assets/Rectangle12(2).svg";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="box-content">
            <div className="align-text-img">
              <img src={Home} alt="img" />
              <p className="text-slider">
                Leonardo <span>FISICULTORISTA</span>
              </p>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur. Vel ut nam mi velit. Lorem
              ornare accumsan faucibus cras. Porta varius bibendum.
            </p>
            <img src={Personal} alt="personal" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box-content">
            <div className="align-text-img">
              <img src={Female} alt="img" />
              <p className="text-slider">
                Geovana <span>Atleta</span>
              </p>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur. Vel ut nam mi velit. Lorem
              ornare accumsan faucibus cras. Porta varius bibendum.
            </p>
            <img src={Personal} alt="personal" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box-content">y
            <div className="align-text-img">
              <img src={Home2} alt="img" />
              <p className="text-slider">
                Leonardo <span>FISICULTORISTA</span>
              </p>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur. Vel ut nam mi velit. Lorem
              ornare accumsan faucibus cras. Porta varius bibendum.
            </p>
            <img src={Personal} alt="personal" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
