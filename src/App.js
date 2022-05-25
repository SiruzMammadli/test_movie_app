import Header from "./components/header/Header";
import Movies from "./components/movies/Movies";
import movieapi from "./api/movies.json";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const App = () => {
  return (
    <>
      <Header />
      <Swiper
        spaceBetween={24}
        slidesPerView={4}
      >
        {movieapi.map((mov) => (
          <SwiperSlide key={mov.id}>
            <Movies mov={mov} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default App;
