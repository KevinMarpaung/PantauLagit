import CardBigWeather from "../Elements/CardBigWeather";
import CardSmallWeather from "../Elements/CardSmallWeather";
import Navbar from "../Elements/Navbar";
import Input from "../Elements/SearchBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";
import { Pagination } from "swiper/modules";
import { FecthApi } from "../../api";
import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;
const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const cities = [
        "Jakarta",
        "Surabaya",
        "Medan",
        "Bandung",
        "Denpasar,",
        "papua",
        "balige",
        "amerika",
      ];

      const results = await Promise.all(
        cities.map((city) =>
          FecthApi(
            `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
          )
        )
      );
      const filteredResults = results.filter((result) => result !== null);

      setData(filteredResults);
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex  justify-center pt-5">
        <Input></Input>
      </div>
      <div className=" gap-2 mt-10 flex">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((dat) => {
            return (
              <>
                <SwiperSlide key={dat.id}>
                  <CardBigWeather
                    key={dat.id}
                    lokasi={dat.location.country}
                    waktu={dat.location.localtime}
                    ibukota={dat.location.name}
                    temperatur={dat.current.temp_c}
                    icon={`https:${dat.current.condition.icon}`}
                    cuaca={dat.current.condition.text}
                  />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default Main;
