import CardBigWeather from "../Elements/CardBigWeather";
import Input from "../Elements/SearchBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";
import { Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import CardSmallWeather from "../Elements/CardSmallWeather";
import { faDroplet, faSun, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const apiKey = import.meta.env.VITE_API_KEY;
const Main = ({ dataValue }) => {
  const [data, setData] = useState([]);
  const [dataPencarian, setDataPencarian] = useState([]);

  const handleSearch = async (input) => {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}`
      );
      const data = await res.json();
      setDataPencarian([data]);
    } catch (error) {
      console.error("Gagal ambil data cuaca:", error);
    }
  };

  useEffect(() => {
    try {
      if (dataValue) {
        setData(dataValue);
      }
    } catch (error) {
      console.log(error);
    }
  }, [dataValue]);
  return (
    <div>
      <div className="flex  justify-center pt-5">
        <Input onsearch={handleSearch}></Input>
      </div>
      <div className="mt-10 flex ">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {[...dataPencarian, ...data].map((dat) => {
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
                    dataCard={data}
                  >
                    <CardSmallWeather
                      title={"Kelembapan"}
                      angka={dat.current.humidity}
                      icon={
                        <FontAwesomeIcon icon={faDroplet} color=" #0369a1" />
                      }
                      persen={"%"}
                    ></CardSmallWeather>
                    <CardSmallWeather
                      angka={dat.current.uv}
                      title={"Sinar Ultraviolet (UV) "}
                      icon={<FontAwesomeIcon icon={faSun} color=" #0369a1" />}
                    ></CardSmallWeather>{" "}
                    <CardSmallWeather
                      angka={dat.current.wind_kph}
                      icon={<FontAwesomeIcon icon={faWind} color=" #0369a1" />}
                      title={"kecepatan angin"}
                    ></CardSmallWeather>
                  </CardBigWeather>
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
