import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css";

const CardBigWeather = ({
  lokasi,
  temperatur,
  waktu,
  ibukota,
  icon,
  cuaca,
  children,
}) => {
  return (
    <div
      className={` md:w-[55%]  dark:text-white  dark:bg-[#1e293a] w-[85%] m-auto  h-[200px] md:h-fit   rounded-xl text-black inset-shadow-sm  bg-cover  md:bg-none md:bg-white`}
    >
      <div className="flex flex-col   text-start w-full px-5 gap-2 ">
        <div className="flex justify-between opacity-86">
          <div className="py-12">
            <div className="">
              <span className="font-light text-sm   px-6  ">{waktu}</span>
            </div>
            <h1 className="text-xl text-start  ">
              <div className="gap-2 flex ">
                <FontAwesomeIcon icon={faLocationDot} color="red" />
                {ibukota} - {lokasi}
              </div>
            </h1>{" "}
            <div className="flex items-center justify-between mx-6">
              <div>
                <p className=" font-sm opacity-60 text-blue-400 ">{cuaca}</p>{" "}
              </div>
            </div>
            <h1 className="text-4xl  mx-6"> {temperatur} ℃ </h1>{" "}
          </div>
          <div className=" md:w-[200px]  w-fit flex  ">
            <img src={icon} alt="" className=" md:h-[200px]  h-fit" />
          </div>
        </div>
      </div>
      <div className="flex text-center  gap-6  justify-center ">{children}</div>
    </div>
  );
};

export default CardBigWeather;
