const Input = () => {
  return (
    <div className="flex">
      <input
        className="text-center bg-white shadow  shadow-black rounded-l-3xl  px-35 text-black"
        type="text"
      />
      <div className=" rounded-r-3xl  items-center flex shadow  shadow-black bg-blue-300">
        <button className="p-2">🔍</button>
      </div>
    </div>
  );
};
export default Input;
