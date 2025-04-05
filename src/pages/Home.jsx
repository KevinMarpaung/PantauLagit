import Main from "../Components/Fragments/Main";
import { useEffect, useState } from "react";
import { FecthApi } from "../api";
import Navbar from "../Components/Elements/Navbar";
import Layout from "../Components/Layouts/Layout";
import Footer from "../Components/Elements/Footer";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [dataValue, setDatavalue] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      const cities = ["Jakarta", "Medan", "Bandung", "Denpasar,", "papua"];

      const results = await Promise.all(
        cities.map((city) =>
          FecthApi(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
          )
        )
      );
      const filteredResults = results.filter((result) => result !== null);

      setDatavalue(filteredResults);
      console.log(filteredResults);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Navbar />
      <Main dataValue={dataValue}></Main>
    </Layout>
  );
};

export default Home;
