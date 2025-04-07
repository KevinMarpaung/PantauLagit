import Main from "../Components/Fragments/Main";
import { useEffect, useState } from "react";
import { FecthApi } from "../api";
import Navbar from "../Components/Elements/Navbar";
import Layout from "../Components/Layouts/Layout";
import AOS from "aos";
import Footer from "../Components/Elements/Footer";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [dataValue, setDatavalue] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
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
      <div data-aos="fade-down">
        <Navbar />
      </div>
      <div data-aos="flip-left">
        <Main dataValue={dataValue}></Main>
      </div>
      <div data-aos="fade-up">
        <Footer></Footer>
      </div>
    </Layout>
  );
};

export default Home;
