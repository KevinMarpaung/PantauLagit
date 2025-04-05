import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { faDroplet, faSun, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardBigWeather from "../Elements/CardBigWeather";
import Input from "../Elements/SearchBar";
import CardSmallWeather from "../Elements/CardSmallWeather";
import "../../index.css";

import sunnyIcon from "../../assets/cloudy.svg";
import suny from "../../assets/day.svg";
import mistIcon from "../../assets/cloudy.svg";
import defaultIcon from "../../assets/cloudy-day-3.svg";
import rainshower from "../../assets/rainy-5.svg";
import snowy from "../../assets/snowy-5.svg";

const apiKey = import.meta.env.VITE_API_KEY;

const Main = ({ dataValue }) => {
  const [data, setData] = useState([]);
  const [dataPencarian, setDataPencarian] = useState([]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const getWeatherIcon = (cuaca) => {
    const lower = cuaca.toLowerCase();

    if (lower.includes("rain") || lower.includes("moderate rain at times"))
      return rainshower;
    if (
      lower.includes("cloudy") ||
      lower.includes("partly cloudy") ||
      lower.includes("fog") ||
      lower.includes("overcast")
    )
      return sunnyIcon;
    if (lower.includes("sun") || lower.includes("clear")) return suny;
    if (lower.includes("mist")) return mistIcon;
    if (lower.includes("snow")) return snowy;

    return defaultIcon;
  };

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
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (dataValue) {
      setData(dataValue);
    }
  }, [dataValue]);

  const renderCardContent = (dat) => (
    <CardBigWeather
      lokasi={dat.location.country}
      waktu={dat.location.localtime}
      ibukota={dat.location.name}
      temperatur={dat.current.temp_c}
      icon={getWeatherIcon(dat.current.condition.text)}
      cuaca={dat.current.condition.text}
      dataCard={data}
    >
      <div className=" hidden md:flex gap-1  opacity-88 py-6   ">
        <CardSmallWeather
          title="Kelembapan"
          angka={dat.current.humidity}
          icon={<FontAwesomeIcon icon={faDroplet} color="#0369a1" />}
          persen="%"
        />
        <CardSmallWeather
          title="Sinar Ultraviolet (UV)"
          angka={dat.current.uv}
          icon={<FontAwesomeIcon icon={faSun} color="#0369a1" />}
        />
        <CardSmallWeather
          title="Kecepatan Angin"
          angka={dat.current.wind_kph}
          icon={<FontAwesomeIcon icon={faWind} color="#0369a1" />}
        />
      </div>
    </CardBigWeather>
  );

  return (
    <div>
      <div className="flex justify-center py-5 md:pt-0">
        <Input onsearch={handleSearch} />
      </div>

      <div className="mt-2 flex flex-col mx-2 md:mx-0">
        {isDesktop ? (
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {[...dataPencarian, ...data].map((dat) => (
              <SwiperSlide key={dat.location.name + dat.location.localtime}>
                {renderCardContent(dat)}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          [...dataPencarian, ...data].map((dat) => (
            <div
              key={dat.location.name + dat.location.localtime}
              className="mb-6"
            >
              {renderCardContent(dat)}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Main;
