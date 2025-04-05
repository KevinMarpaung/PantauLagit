import { useEffect, useState } from "react";
import iconLogo from "../../assets/cloudy-day-3.svg";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="flex justify-between  items-center ">
        <div className=" mx-2 my-2">
          <img src={iconLogo} alt="" className="w-[50px]" />
          <div className="mx-5 -mt-7">
            <h1 className="text-3xl font-bold  font-poppins">PantauLangit</h1>
          </div>
        </div>
        <div className=" flex mx-10 p-1  ">
          <div>
            <button
              onClick={() => setIsDarkMode(false)}
              className={`rounded-s-xl p-1 px-5 shadow hover:shadow-cyan-200  ${
                !isDarkMode
                  ? "bg-[#1e293a] text-white active:shadow-cyan-500"
                  : "bg-white"
              }`}
            >
              Light
            </button>
            <button
              onClick={() => setIsDarkMode(true)}
              className={`rounded-e-xl p-1 px-5 shadow hover:shadow-cyan-200 ${
                isDarkMode ? "bg-[#1e293a] text-white" : ""
              }`}
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
