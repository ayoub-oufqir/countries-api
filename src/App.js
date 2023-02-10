import "./App.css";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import CountryCard from "./components/CountryCard.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import SearchBox from "./components/SearchBox";
// import SearchBox from "./components/SearchBox.js";

function App() {
  let countries = useRef([]);
  const [FiltredCountries, setFiltredCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then(function (response) {
        // console.log(response.data);
        const countriesData = response.data;
        countries.current = countriesData;
        setFiltredCountries(countriesData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // start search box code

  const changeHandler = (e) => {
    const country = e.target.value;
    setFiltredCountries(() =>
      countries.current.filter((item) => {
        const response = item.name
          .toLowerCase()
          .includes(country.toLowerCase());
        return response;
      })
    );
  };

  // end search box code
  return (
    <div className="bg-slate-200 h-full">
      <NavBar countriesArray={countries.current} />
      {countries.current.length ? <SearchBox onChange={changeHandler} /> : ""}
      {FiltredCountries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mx-auto pb-20">
          {FiltredCountries.map((element) => {
            return (
              <CountryCard country={element} key={element.name}></CountryCard>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center text-4xl text-slate-700 pt-20 pb-40">
          {FiltredCountries.length === 0
            ? "Loading Data :)"
            : FiltredCountries.length === 0
            ? "No data matched your search :/"
            : ""}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
