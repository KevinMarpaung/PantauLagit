import { useState } from "react";

const Input = ({ onsearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      onsearch(input);
      setInput("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex  md:w-1/2 w-full mx-2 ">
      <div className="flex w-full  justify-center ">
        <input
          className=" hover:shadow-blue-300  p-3  dark:bg-[#1e293a] dark:text-white dark:opacity-100 bg-white shadow-sm   w-full  md:w-[60%]   rounded-l-3xl   text-black"
          type="text"
          value={input}
          placeholder="Pantau Langit Kotamu"
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="  rounded-r-3xl shadow-sm shadow-blue-400 hover:shadow-blue-500">
          <button
            type="submit"
            className="p-3  rounded-r-3xl    items-center flex  bg-blue-300"
          >
            🔍
          </button>
        </div>
      </div>
    </form>
  );
};
export default Input;
