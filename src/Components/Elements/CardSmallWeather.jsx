import React from "react";

const CardSmallWeather = ({ title, icon, angka, persen }) => {
  return (
    <div className="bg-white dark:bg-[#14293d] dark:text-white md:w-[205px] text-sm w-[100px] h-[90px] flex items-center justify-center rounded-md shadow">
      <h1>
        {icon}
        <br /> {angka} {persen}
        <br />
        <span className="text-sm font-normal opacity-40 text-[#0369a1] dark:text-white dark:opacity-100">
          {title}
        </span>
      </h1>
    </div>
  );
};
export default CardSmallWeather;
