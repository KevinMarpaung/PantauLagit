import React from "react";

const CardSmallWeather = ({ title, icon, angka, persen }) => {
  return (
    <div className="bg-white w-[205px] h-[90px] flex items-center justify-center rounded-md shadow shadow">
      <h1>
        {icon}
        <br /> {angka} {persen}
        <br />
        <span className="text-sm font-normal opacity-40 text-[#0369a1]">
          {title}
        </span>
      </h1>
    </div>
  );
};
export default CardSmallWeather;
