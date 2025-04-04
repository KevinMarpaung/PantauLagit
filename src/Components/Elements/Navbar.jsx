const Navbar = () => {
  return (
    <>
      <div className="flex justify-between  items-center">
        <div className=" mx-2 my-2">
          <img src="img/icon.png" alt="" className="w-[50px]" />
          <div className="mx-5 -mt-7">
            <h1 className="text-3xl font-bold ">PantauLangit</h1>
            <p className="text-end">21:00 pm</p>
          </div>
        </div>
        <div className=" flex mx-10 p-1  ">
          <div>
            <button className=" rounded-s-xl active:bg-blue-400 active:rounded-s-2xl p-1  px-5 shadow shadow-cyan-100 hover:shadow-cyan-200 active:shadow-cyan-300">
              Light
            </button>
          </div>
          <div>
            <button
              dir="rtl"
              className="rounded-s-xl p-1 active:bg-blue-400 active:rounded-s-2xl  px-5 shadow shadow-cyan-100 hover:shadow-cyan-200 active:shadow-cyan-300"
            >
              Dark
            </button>
          </div>
        </div>
      </div>
      {/* <div className="text-center">
        <h1 className="italic opacity-40 text-sm">
          Ketahui Cuaca Seluruh Indonesia <br />
          Dimanapun Posisi Anda Berada
        </h1>
      </div> */}
    </>
  );
};

export default Navbar;
