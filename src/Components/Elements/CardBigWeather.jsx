import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function CardBigWeather({
  lokasi,
  temperatur,
  waktu,
  ibukota,
  icon,
  cuaca,
  children,
}) {
  return (
    <div className={` w-[75%]  rounded-xl text-black inset-shadow-sm `}>
      <div className="flex flex-col   text-start w-full p-5 gap-2 ">
        <div className="flex justify-between">
          <div>
            <div className="">
              <span className="  font-thin text-sm opacity-64  px-6  ">
                {waktu}
              </span>
            </div>
            <h1 className="text-xl text-start  ">
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
        {children}
      </div>
    </div>
  );
}
