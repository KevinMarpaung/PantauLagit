import CardSmallWeather from "./CardSmallWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function CardBigWeather({
  lokasi,
  temperatur,
  waktu,
  ibukota,
  icon,
  cuaca,
}) {
  return (
    <div className="   w-[75%]  rounded-xl text-black ">
      <div className="flex flex-col   text-start w-full p-5 gap-2 ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl text-start  ">
              <h1 className="  font-thin text-sm opacity-20">{waktu}</h1>
              <div className="gap-2 flex ">
                <FontAwesomeIcon icon={faLocationDot} color="red" />
                {ibukota} - {lokasi}{" "}
              </div>
            </h1>{" "}
            <div className="flex items-center justify-between mx-6">
              <div>
                <p className=" font-thin text-blue-400 ">{cuaca}</p>{" "}
              </div>
            </div>
            <h1 className="text-4xl  mx-6"> {temperatur} ℃ </h1>{" "}
          </div>
          <div className="h-[100px] w-[100px] flex ">
            <img src={icon} alt="" className="h-full w-full" />
          </div>
        </div>
      </div>

      <div className="flex text-center  gap-6  justify-center my-13">
        <CardSmallWeather
          title={"Kelembapan"}
          icon={<FontAwesomeIcon icon={faDroplet} color=" #0369a1" />}
        ></CardSmallWeather>
        <CardSmallWeather
          icon={<FontAwesomeIcon icon={faWind} color=" #0369a1" />}
          title={"kecepatan angin"}
        ></CardSmallWeather>
        <CardSmallWeather
          title={"Sinar Ultraviolet (UV) "}
          icon={<FontAwesomeIcon icon={faSun} color=" #0369a1" />}
        ></CardSmallWeather>
      </div>
    </div>
  );
}
