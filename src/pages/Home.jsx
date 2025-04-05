import Main from "../Components/Fragments/Main";
import { useEffect, useState } from "react";
import { FecthApi } from "../api";
import Navbar from "../Components/Elements/Navbar";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [dataValue, setDatavalue] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      const cities = [
        "Jakarta",
        "Surabaya",
        "Medan",
        "Bandung",
        "Denpasar,",
        "papua",
        "balige",
        "amerika",
        "samosir",
      ];

      const results = await Promise.all(
        cities.map((city) =>
          FecthApi(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
          )
        )
      );
      const filteredResults = results.filter((result) => result !== null);

      setDatavalue(filteredResults);
      setLoading(false);
    };

    fetchData();
  }, []);

  console.log(dataValue);
  return (
    <>
      <Navbar />
      <Main dataValue={dataValue}></Main>
    </>
  );
};

export default Home;
