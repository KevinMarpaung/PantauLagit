import React from "react";

export default function CardSmallWeather({ title, icon }) {
  return (
    <div className="bg-[#e6f6fd] w-[205px] h-[90px] flex items-center justify-center rounded-md">
      <h1>
        {icon}
        <br /> 99% <br />
        <span className="text-sm font-normal opacity-40 text-[#0369a1]">
          {title}
        </span>
      </h1>
    </div>
  );
}
